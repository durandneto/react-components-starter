import React from "react";
import { storiesOf } from "@storybook/react";
import Color from ".";

storiesOf("Colors|All", module).add("All Colors", () => {

  const div = document.createElement('DIV')
  Object.entries(Color).forEach(([key, value]) => {
    div.innerHTML +=  `<span
      style='height: 50px; width: 50px; background-color: ${value}; color: #222; padding: 8px; margin: 8px; display:inline-table;'
    >
      ${key}
    </span>`
  })

  return <div dangerouslySetInnerHTML={{__html: div.innerHTML}} />
});