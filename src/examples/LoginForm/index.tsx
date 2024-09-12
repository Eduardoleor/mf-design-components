import { Box, Button, Input, Stack } from "@/components";

export const LoginForm = () => {
  return (
    <Box className="px-8 py-12 border border-gray-300 rounded-xl">
      <Stack>
        <Input
          type="text"
          id="username"
          placeholder="Username"
          className="mb-4"
        />

        <Input id="password" type="password" placeholder={"Password"} />

        <Button type="submit" variant={"solid"} className="mt-10">
          Login
        </Button>
      </Stack>
    </Box>
  );
};
