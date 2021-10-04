import React from "react";
import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Code,
  Box,
} from "native-base";
import NativeBaseIcon from "./components/NativeBaseIcon";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });

export default function App() {
  return (
    <NativeBaseProvider>
      <Center
        _dark={{ bg: "blueGray.900" }}
        _light={{ bg: "darkBlue.400" }}
        px={2}
        flex={1}
      >

        <VStack space={5} alignItems="center">
          <NativeBaseIcon />

          {/* <Heading size="lg">Welcome to NativeBase</Heading> */}
          {/* <HStack space={2} alignItems="center"> */}
            {/* <Text>Edit</Text>
            <Code>App.tsx</Code>
            <Text>and save to reload.</Text> */}
          {/* </HStack> */}
          {/* <Link href="https://docs.nativebase.io" isExternal>
            <Text color="primary.500" underline fontSize={"xl"}>
              Learn NativeBase
            </Text>
          </Link> */}
          <ToggleDarkMode />
        </VStack>
        <HStack space={2}>
        <Box
        bg="primary.500"
        p="12"
        rounded="xl"
        width="99%"
        _text={{
          fontSize: "md",
          fontWeight: "medium",
          color: "warmGray.50",
          letterSpacing: "lg",
        }}
      >
    <Text>Edit</Text>
      </Box>
      </ HStack>
      </Center>
    </NativeBaseProvider>
  );
}

// Color Switch Component
function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack space={2} alignItems="center">
      <Text>Dark</Text>
      <Switch
        isChecked={colorMode === "light" ? true : false}
        onToggle={toggleColorMode}
        aria-label={
          colorMode === "light" ? "switch to dark mode" : "switch to light mode"
        }
      />
      <Text>Light</Text>
    </HStack>
  );
}
