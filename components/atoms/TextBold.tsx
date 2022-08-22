import { FormControl } from "native-base";
import React from "react";

export default function TextBold(props: any) {
  return (
    <FormControl.Label
      _text={{
        fontSize: "sm",
        bold: true,
      }}
      {...props}
    />
  );
}
