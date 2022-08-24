import React from "react";
import renderer from "react-test-renderer";
import { NativeBaseProvider } from "native-base";
import Footer from "./Footer";

it("expect to render footer", () => {
  const footerSnap = renderer
    .create(
      <NativeBaseProvider>
        <Footer />
      </NativeBaseProvider>
    )
    .toJSON();
  expect(footerSnap).toMatchSnapshot();
});
