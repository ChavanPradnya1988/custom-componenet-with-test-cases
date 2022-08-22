import React from "react";
import {
  Modal,
  Button,
  HStack,
  NativeBaseProvider,
  CheckIcon,
  Heading,
  Box,
} from "native-base";
import { Text } from "native-base";

interface Iprops {
  heading: string;
  content: string;
}
const data: Array<Iprops> = [
  {
    heading: "Fixed Shift",
    content:
      "Add and assign single shift to those staff who have fixed work timing",
  },
  {
    heading: "Rotational Shift",
    content: "Add and assign shifts to those staff who have changing shifts",
  },
];

export default function App() {
  const [modalVisible, setModalVisible] = React.useState(false);
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  return (
    <NativeBaseProvider>
      <Modal
        isOpen={modalVisible}
        onClose={() => setModalVisible(false)}
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
      >
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>Month Calculation </Modal.Header>
          <Modal.Body>
            {data.map((data: any) => {
              return (
                <HStack
                  borderWidth="1"
                  borderColor="#E7EFF5"
                  mt="2"
                  key={data.heading}
                >
                  <Box p="5">
                    <Heading size="sm">{data.heading}</Heading>
                    <Text>{data.content}</Text>
                  </Box>
                  <Box p="5">
                    <CheckIcon
                      _hover={{
                        color: "coolGray.50",
                      }}
                      size="10"
                      color="#E7EFF5"
                    />
                  </Box>
                </HStack>
              );
            })}
          </Modal.Body>
          {/* <Modal.Footer> */}
          <Button.Group space={3} alignSelf="center" mb="2">
            <Button
              _hover={{
                _text: { color: "red" },
              }}
              px="10"
              variant="outline"
              colorScheme="blueGray"
              onPress={() => {
                setModalVisible(false);
              }}
            >
              Cancel
            </Button>
            <Button
              _hover={{
                bg: "red",
              }}
              _pressed={{
                bg: "green.500",
              }}
              px="10"
              backgroundColor="#0061E7"
              onPress={() => {
                setModalVisible(false);
              }}
            >
              Save
            </Button>
          </Button.Group>
          {/* </Modal.Footer> */}
        </Modal.Content>
      </Modal>
      <HStack space="4" justifyContent="center" alignItems="center">
        <Button
          onPress={() => {
            setModalVisible(!modalVisible);
          }}
        >
          Open Modal
        </Button>
      </HStack>
    </NativeBaseProvider>
  );
}

// import React from "react";
// import {
//   Box,
//   Heading,
//   Button,
//   Image,
//   Text,
//   Center,
//   HStack,
//   Stack,
//   NativeBaseProvider,
// } from "native-base";
// import RadioButton from "./components/radioButton";

// const Example = () => {
//   const data = [
//     {
//       label: "Fixed Shift",
//       value: "Fixed Shift",
//       desc: "Add and assign single shift so those staff who have fixed work type",
//     },
//   ];
//   return (
//     <Box alignItems="center">
//       <Box
//         maxW="80"
//         rounded="lg"
//         overflow="hidden"
//         borderColor="coolGray.200"
//         borderWidth="1"
//         _dark={{
//           borderColor: "coolGray.600",
//           backgroundColor: "gray.700",
//         }}
//         _web={{
//           shadow: 2,
//           borderWidth: 0,
//         }}
//         _light={{
//           backgroundColor: "gray.50",
//         }}
//       >
//         <Stack p="4" space={3}>
//           <Stack space={2}>
//             <Heading size="md" ml="-1">
//               Select Shift Type
//             </Heading>
//             <RadioButton data={data} />
//           </Stack>
//         </Stack>
//       </Box>
//     </Box>
//   );
// };

// export default () => {
//   return (
//     <NativeBaseProvider>
//       <Center flex={1} px="3">
//         <Example />
//       </Center>
//     </NativeBaseProvider>
//   );
// };

// import React from "react";
// import {
//   Checkbox,
//   Heading,
//   HStack,
//   VStack,
//   Text,
//   Box,
//   Center,
//   NativeBaseProvider,
// } from "native-base";
// import CheckBoxComponent from "./components/checkBox/CheckBox";
// import RadioButton from "./components/radioButton";
// import data from "./dummy";
// import checkBoxData from "./dummyData/CheckBox";

// export default () => {
//   return (
//     <NativeBaseProvider>
//       <Center flex={1} px="3">
//         {/* <RadioButton data={data} /> */}
//         <CheckBoxComponent data={checkBoxData} />
//       </Center>
//     </NativeBaseProvider>
//   );
// };
