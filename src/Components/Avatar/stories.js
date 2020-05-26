import React from "react";
import { storiesOf } from "@storybook/react";
import Avatar from ".";

storiesOf("Components|Avatar", module)
  .add("Avatar cursor pointer", () => (
    <Avatar
      src={
        "https://via.placeholder.com/200x200"
      }
      cursorPointer
      onEvent={e => {

      }}
    />
  ))

