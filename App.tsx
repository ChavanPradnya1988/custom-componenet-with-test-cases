import React from "react";
import {
  Checkbox,
  Heading,
  HStack,
  VStack,
  Text,
  Box,
  Center,
  NativeBaseProvider,
} from "native-base";
import CheckBoxComponent from "./components/checkBox/CheckBox";
import RadioButton from "./components/radioButton";
import data from "./dummy";
import checkBoxData from "./dummyData/CheckBox";
import RadioButtonModal from "./components/RadioButtonModal/RadioButtonModal";
import Footer from "./components/footer/Footer";
import DemoModal from "./components/demoModal/demoModal";

export default () => {
  const [modalVisible, setModalVisible] = React.useState(false);

  return (
    <NativeBaseProvider>
      {/* <Center flex={1} px="3"> */}
      {/* <RadioButton data={data} />
        <CheckBoxComponent data={checkBoxData} /> */}
      <DemoModal isOpen={modalVisible}>
        {/* <CheckBoxComponent data={checkBoxData} /> */}
        <RadioButtonModal />
      </DemoModal>

      {/* <RadioButtonModal /> */}
      {/* </Center> */}
      <Footer />
    </NativeBaseProvider>
  );
};
