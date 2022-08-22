import React, { useState } from "react";
import {
  Modal,
  Button,
  HStack,
  NativeBaseProvider,
  Pressable,
  Heading,
  Box,
} from "native-base";

import RadioUi from "../RadioUI/RadioUi";

interface Iprops {
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
      heading: "Fixed Shift",
      desc: "Add and assign single shift to those staff who have fixed work timing",
    },
    {
      heading: "Rotational Shift",
      desc: "Add and assign shifts to those staff who have changing shifts",
    },
  ],
};

export default function RadioButtonModal() {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [radio, setRadio] = useState(true);
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
          <Modal.Header>{data.title}</Modal.Header>
          <Modal.Body>
            {data.data.map((data: any) => {
              const [selected, setSelected] = useState(false);
              return (
                <Pressable
                  key={data.heading}
                  onPress={() => {
                    setSelected(!selected);
                  }}
                >
                  {({ isHovered, isPressed }) => {
                    return (
                      <HStack
                        borderWidth="1"
                        borderColor={
                          isPressed || selected ? "#7098D5" : "#F1F0F1"
                        }
                        mt="2"
                        key={data.label}
                      >
                        <RadioUi data={data} />
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
              Save & Continue
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
          m="10"
        >
          Open Modal
        </Button>
      </HStack>
    </NativeBaseProvider>
  );
}
