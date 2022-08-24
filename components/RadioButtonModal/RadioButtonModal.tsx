import React, { useState } from "react";
import {
  Modal,
  Button,
  HStack,
  NativeBaseProvider,
  Pressable,
  Input,
  Box,
  Text,
  Select,
  CheckIcon,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

import RadioUi from "../RadioUI/RadioUi";
import DemoModal from "../demoModal/demoModal";
import AddShift from "../AddShiftModalData/addShift";

interface Iprops {
  id: number;
  heading: string;
  desc: string;
}
[];

interface dataProps {
  title: string;
  data: Iprops[];
}

const data: dataProps = {
  title: "Select Shift Type ",
  data: [
    {
      id: 1,
      heading: "Fixed Shift",
      desc: "Add and assign single shift to those staff who have fixed work timing",
    },
    {
      id: 2,
      heading: "Rotational Shift",
      desc: "Add and assign shifts to those staff who have changing shifts",
    },
  ],
};

export default function RadioButtonModal() {
  // const [modalVisible, setModalVisible] = React.useState(false);
  // const [shiftModalVisible, setShiftModalVisible] = React.useState(false);
  // const [service, setService] = React.useState("");
  // const [selected, setSelected] = useState(0);
  // const initialRef = React.useRef(null);
  // const finalRef = React.useRef(null);
  return (
    <>
      <AddShift data={data} />

      {/* Shift Modal */}
      {/* <Modal
        isOpen={shiftModalVisible}
        onClose={() => setShiftModalVisible(false)}
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
      >
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>Add Fixed Shift</Modal.Header>
          <Modal.Body m="2">
            <Box>
              <Text fontSize="xs">Shift Name</Text>
              <Input placeholder="Shift Name" w="100%" />
            </Box>
            <HStack>
              <Box>
                <Text fontSize="xs" color="#ABA4A3">
                  Start Time
                </Text>
                <Select
                  selectedValue={service}
                  minWidth="40"
                  accessibilityLabel="Select Time"
                  placeholder="Start Time"
                  _selectedItem={{
                    bg: "teal.600",
                    endIcon: (
                      <MaterialIcons
                        name="watch-later"
                        size={24}
                        color="black"
                      />
                    ),
                  }}
                  mt={1}
                  onValueChange={(itemValue) => setService(itemValue)}
                >
                  <Select.Item label="UX Research" value="ux" />
                </Select>
              </Box>
              <Box>
                <Text fontSize="xs" color="#ABA4A3">
                  End Time
                </Text>
                <Select
                  selectedValue={service}
                  minWidth="40"
                  accessibilityLabel="Select Time"
                  placeholder="End Time"
                  _selectedItem={{
                    bg: "teal.600",
                    endIcon: (
                      <MaterialIcons
                        name="watch-later"
                        size={24}
                        color="black"
                      />
                    ),
                  }}
                  mt={1}
                  onValueChange={(itemValue) => setService(itemValue)}
                >
                  <Select.Item label="UX Research" value="ux" />
                </Select>
              </Box>
            </HStack>
          </Modal.Body>
          {/* <Modal.Footer> */}
      {/* <Button.Group space={3} alignSelf="center" mb="2">
            <Button
              px="10"
              onPress={() => {
                // setModalVisible(false);
                setShiftModalVisible(false);
              }}
            >
              Save & Continue
            </Button>
          </Button.Group>
          {/* </Modal.Footer> */}
      {/* </Modal.Content>
      </Modal> */}
      {/* Save and Continue */}
    </>
  );
}
