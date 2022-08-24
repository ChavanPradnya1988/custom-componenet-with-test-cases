import React, { useState } from "react";
import { FormControl, Radio, Box, Text, VStack } from "native-base";

const RadioUi = (props: any) => {
  console.log(props);
  const [groupValue, setGroupValue] = React.useState(props.selected);
  const heading = props.data.heading;
  const description = props.data.desc;
  return (
    <Box>
      <FormControl isInvalid>
        <Radio.Group
          colorScheme="success"
          name="exampleGroup"
          accessibilityLabel="select"
          value={groupValue}
          onChange={(nextValue: any) => {
            setGroupValue(nextValue);
          }}
          m="2"
        >
          <Radio value={heading} m="2" size="sm">
            <VStack>
              <Text bold m="1">
                {heading}
              </Text>

              <Text fontSize="xs" m="1">
                {description}
              </Text>
            </VStack>
          </Radio>
        </Radio.Group>
      </FormControl>
    </Box>
  );
};

export default RadioUi;
