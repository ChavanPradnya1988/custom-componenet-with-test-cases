import React, { useState } from "react";
import { FormControl, Radio, Box, Text, VStack } from "native-base";
import TextBold from "./atoms/TextBold";

const RadioButton = (props: any) => {
  const data = props.data;
  const [groupValue, setGroupValue] = React.useState("");
  return (
    <Box>
      <FormControl isInvalid>
        <TextBold>Manual Attendance</TextBold>

        {data.map((q: any) => {
          return (
            <Radio.Group
              colorScheme="success"
              name="exampleGroup"
              accessibilityLabel="select prize"
              value={groupValue}
              onChange={(nextValue: any) => {
                setGroupValue(nextValue);
              }}
              m="2"
            >
              <Radio value={q.value} m="2" size="sm">
                <VStack>
                  <Text bold m="1">
                    {q.label}
                  </Text>

                  <Text fontSize="xs" m="1">
                    {q.desc}
                  </Text>
                </VStack>
              </Radio>
            </Radio.Group>
          );
        })}
      </FormControl>
    </Box>
  );
};

export default RadioButton;
