import React from "react";
import renderer from "react-test-renderer";

import App from "./App";

it("expect to render App", () => {
  const AppSnap = renderer.create(<App />).toJSON();
  expect(AppSnap).toMatchSnapshot();
});
