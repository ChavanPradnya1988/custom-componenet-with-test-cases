import React from "react";
import renderer from "react-test-renderer";
import { NativeBaseProvider } from "native-base";
import CheckBoxComponent from "../checkBox/CheckBox";
import checkBoxData from "../../dummyData/CheckBox";

it("expect to render CheckBox", () => {
  const CheckBoxComponentSnap = renderer
    .create(
      <NativeBaseProvider>
        <CheckBoxComponent data={checkBoxData} />
      </NativeBaseProvider>
    )
    .toJSON();
  expect(CheckBoxComponentSnap).toMatchSnapshot();
});
