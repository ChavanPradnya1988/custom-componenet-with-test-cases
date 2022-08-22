import React from "react";
import renderer from "react-test-renderer";
import { NativeBaseProvider } from "native-base";
import RadioUi from "./RadioUi";

it("expect to render radio button", () => {
  const radioButtonUiSnap = renderer
    .create(
      <NativeBaseProvider>
        <RadioUi />
      </NativeBaseProvider>
    )
    .toJSON();
  expect(radioButtonUiSnap).toMatchSnapshot();
});
