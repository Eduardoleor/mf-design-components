import { Box, Button, Input, Stack, Dropdown, Text } from '@/components';
import { UserIcon } from '@heroicons/react/20/solid';

export const LoginForm = () => {
  return (
    <Box className="px-8 py-12 border border-gray-300 rounded-xl">
      <Stack>
        <Text className="mb-3">Welcome! Please enter your credentials</Text>
        <Input type="text" id="username" placeholder="Username" className="mb-4" />
        <Input id="password" type="password" placeholder="Password" />
        <Dropdown
          options={[
            { value: '1', label: 'Juan Perez', icon: <UserIcon className="w-4 h-4 text-gray-500" /> },
            { value: '2', label: 'Maria Gonzalez', icon: <UserIcon className="w-4 h-4 text-gray-500" /> },
            { value: '3', label: 'Carlos Martinez', icon: <UserIcon className="w-4 h-4 text-gray-500" /> },
          ]}
          placeholder="Select a person"
          label="User"
          isSortable={true}
          showIcon={true}
        />
        <Button type="submit" variant="solid" className="mt-10">
          Login
        </Button>
      </Stack>
    </Box>
  );
};
