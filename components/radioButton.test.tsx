import React from "react";
import renderer from "react-test-renderer";
import { NativeBaseProvider } from "native-base";
import RadioButton from "./radioButton";
import data from "../dummy";

it("expect to render radio button", () => {
  const radioButtonSnap = renderer
    .create(
      <NativeBaseProvider>
        <RadioButton data={data} />
      </NativeBaseProvider>
    )
    .toJSON();
  expect(radioButtonSnap).toMatchSnapshot();
});
