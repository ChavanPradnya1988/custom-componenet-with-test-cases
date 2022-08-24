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

export default function AddShift(props: any) {
  const data = props.data;
  const [modalVisible, setModalVisible] = React.useState(false);
  const [shiftModalVisible, setShiftModalVisible] = React.useState(false);

  const [selected, setSelected] = useState(0);

  return (
    <>
      <Modal.Header>{data.title}</Modal.Header>
      <Modal.Body>
        {data.data.map((data: any) => {
          return (
            <Pressable
              key={data.heading}
              onPress={() => {
                setSelected(data.id);
              }}
            >
              {({ isHovered, isPressed }) => {
                const status = selected === data.id;
                return (
                  <HStack
                    borderWidth="2"
                    borderColor={status ? "#7098D5" : "#F1F0F1"}
                    mt="2"
                    key={data.id}
                  >
                    <RadioUi data={data} selected={data.id} />
                  </HStack>
                );
              }}
            </Pressable>
          );
        })}
      </Modal.Body>
      {/* <Modal.Footer> */}
      <Button.Group space={3} alignSelf="center" mb="2">
        <Button
          px="10"
          onPress={() => {
            setModalVisible(false);
            setShiftModalVisible(!shiftModalVisible);
          }}
        >
          Save & Continue
        </Button>
      </Button.Group>
      {/* </Modal.Footer> */}
    </>
  );
}
