import React from "react";
import {
  NativeBaseProvider,
  Box,
  Checkbox,
  Button,
  HStack,
  Center,
} from "native-base";

export default function Footer() {
  return (
    <>
      <Box bg="white">
        <Center flex={1}></Center>

        <HStack
          alignItems="center"
          shadow="6"
          p="5"
          // safeAreaTop
          justifyContent="space-around"
        >
          <Box>
            <Checkbox
              shadow={2}
              value="test"
              accessibilityLabel="This is a dummy checkbox"
              defaultIsChecked
            >
              Set to Default
            </Checkbox>
          </Box>
          <Box>
            <Button.Group space={3} alignItems="left" mb="2" mx="10">
              <Button px="10">Save</Button>
              <Button px="10">Cancel</Button>
            </Button.Group>
          </Box>
        </HStack>
      </Box>
    </>
  );
}
