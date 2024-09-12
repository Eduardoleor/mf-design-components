import React, { useState, useRef, useEffect, ComponentPropsWithRef, forwardRef, ReactNode } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid';
import useDebouncedSearch from '@/hooks/useDebouncedSearch';
import { dropdownContainer, dropdownListContainer, inputStyles, labelStyles, noItemsMessage, optionStyles, placeholderStyles } from './styles';

export type DropdownProps = ComponentPropsWithRef<'div'> & {
  options: { value: string; label: string; icon?: ReactNode }[];
  placeholder?: string;
  label?: string;
  onSelect?: (value: string) => void;
  showIcon?: boolean;
  isSortable?: boolean;
  searchable?: boolean;
};

export const Dropdown = forwardRef<HTMLDivElement, DropdownProps>(
  (
    { options, placeholder = 'Select an option', label, onSelect, className, showIcon = false, isSortable = true, searchable = false, ...props },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [isFocused, setIsFocused] = useState(false);
    const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [placeholderText, setPlaceholderText] = useState<string | null>(null);

    const debouncedSearchQuery = useDebouncedSearch(searchQuery, 100);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (placeholder && placeholder.length > 30) {
        setPlaceholderText(`${placeholder.slice(0, 30)}...`);
      } else {
        setPlaceholderText(placeholder);
      }
    }, [placeholder]);

    useEffect(() => {
      if (typeof ref === 'function') {
        ref(dropdownRef.current);
      } else if (ref && 'current' in ref) {
        (ref as React.MutableRefObject<HTMLDivElement | null>).current = dropdownRef.current;
      }
    }, [ref]);

    const filteredOptions = options.filter((option) => option.label.toLowerCase().includes(debouncedSearchQuery.toLowerCase()));

    const sortedOptions = isSortable
      ? [
          ...options
            .filter((option) => option.value === selectedOption)
            .concat(
              options
                .filter((option) => option.value !== selectedOption)
                .filter((option) => option.label.toLowerCase().includes(debouncedSearchQuery.toLowerCase()))
                .sort((a, b) => a.label.localeCompare(b.label))
            ),
        ]
      : filteredOptions;

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
          setIsOpen(false);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);

    const handleSelect = (value: string) => {
      setSelectedOption(value);
      setSearchQuery('');
      if (onSelect) {
        onSelect(value);
      }
      setTimeout(() => setIsOpen(false), 400);
    };

    const handleBlur = () => {
      setIsFocused(false);
      if (filteredOptions.length === 0) {
        setSearchQuery('');
      }
    };

    const handleOpenList = () => setIsOpen(true);
    const handleFocus = () => setIsFocused(true);
    const handleMouseEnter = (index: number) => setFocusedIndex(index);
    const handleMouseLeave = () => setFocusedIndex(null);

    const selectedLabel = options.find((option) => option.value === selectedOption)?.label || '';

    return (
      <div ref={dropdownRef} className={`relative ${className} mt-5 w-full`} {...props}>
        <div
          className={dropdownContainer({
            isOpen,
            label: Boolean(label),
            isFocused,
          })}
          onClick={handleOpenList}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onMouseEnter={handleFocus}
          onMouseLeave={handleBlur}
        >
          {searchable ? (
            <input
              type="text"
              value={isOpen ? searchQuery : selectedLabel}
              placeholder={placeholderText || ''}
              className={inputStyles({
                label: Boolean(label),
              })}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          ) : (
            <input
              type="text"
              readOnly
              value={selectedLabel}
              placeholder={placeholderText || ''}
              className={inputStyles({
                label: Boolean(label),
              })}
            />
          )}
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            {isOpen ? <ChevronUpIcon className="w-5 h-5" /> : <ChevronDownIcon className="w-5 h-5" />}
          </div>
          {isOpen && (
            <div className={dropdownListContainer({ isOpen })}>
              {sortedOptions.length > 0 ? (
                sortedOptions.map((option, index) => (
                  <div
                    key={option.value}
                    className={optionStyles({
                      isSelected: selectedOption === option.value,
                      isFocused: focusedIndex === index,
                    })}
                    onClick={() => handleSelect(option.value)}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {showIcon && option.icon && <div className="mr-2 text-black">{option.icon}</div>}
                    {option.label}
                  </div>
                ))
              ) : (
                <div className={noItemsMessage({ isOpen })}>No items found</div>
              )}
            </div>
          )}
        </div>
        {selectedLabel && placeholder && <p className={placeholderStyles({ hasPlaceholder: Boolean(placeholder) })}>{placeholderText || ''}</p>}
        {label && <label className={labelStyles({ hasLabel: Boolean(label) })}>{label}</label>}
      </div>
    );
  }
);
