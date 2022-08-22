import React from "react";
import {
  Checkbox,
  Heading,
  HStack,
  VStack,
  Text,
  Box,
  Button,
} from "native-base";

const CheckBoxComponent = (props: any) => {
  console.log(props.data[0].name);
  const data = props.data;
  const [groupValue, setGroupValue] = React.useState([data[0].name]);
  return (
    <Box alignItems="center">
      <VStack space={2}>
        <HStack alignItems="baseline">
          <Heading fontSize="lg">Self Attendance Access</Heading>
        </HStack>
        <VStack>
          <Box>
            <Text>Location Only</Text>
          </Box>
        </VStack>
        {data.map((ele: any) => {
          return (
            <Checkbox.Group
              colorScheme="green"
              defaultValue={groupValue}
              accessibilityLabel="pick an item"
              onChange={(values) => {
                setGroupValue(values || []);
              }}
            >
              <Checkbox value={ele.name} my="1">
                {ele.name}
              </Checkbox>
            </Checkbox.Group>
          );
        })}
      </VStack>
    </Box>
  );
};

export default CheckBoxComponent;
