import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";

import GetData from "./GetData.js";

describe("<GetData />", () => {
  it("renders without crashing using ReactDOM", () => {
    const div = document.createElement("div");
    ReactDOM.render(<GetData />, div);
    ReactDOM.unmountComponentAtNode(div); 
  });
 
  it("renders without crashing", () => {
    render(<GetData />);
  });

  it("renders Name", () => {
    const app = render(<GetData />);

    app.getByText(/Name/i);
  });

});
