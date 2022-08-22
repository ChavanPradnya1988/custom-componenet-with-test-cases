import React from "react";
import renderer from "react-test-renderer";
import { NativeBaseProvider } from "native-base";
import RadioButtonModal from "./RadioButtonModal";

it("expect to render radio button", () => {
  const radioButtonSnap = renderer
    .create(
      <NativeBaseProvider>
        <RadioButtonModal />
      </NativeBaseProvider>
    )
    .toJSON();
  expect(radioButtonSnap).toMatchSnapshot();
});
