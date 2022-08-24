import * as React from "react";
import {
  Modal,
  Button,
  Input,
  FormControl,
  HStack,
  Center,
  NativeBaseProvider,
} from "native-base";

export default (props: any) => {
  const modalVisible1 = props.isOpen;
  const [modalVisible, setModalVisible] = React.useState(modalVisible1);
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
          {/* <Modal.Header>{props.title}</Modal.Header> */}
          <Modal.Body {...props} />
          {/* <Modal.Footer> */}
          {/* <Button.Group space={2}>
              <Button
                variant="ghost"
                colorScheme="blueGray"
                onPress={() => {
                  setModalVisible(false);
                }}
              >
                Cancel
              </Button>
              <Button
                onPress={() => {
                  setModalVisible(false);
                }}
              >
                Save
              </Button>
            </Button.Group> */}
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
};
