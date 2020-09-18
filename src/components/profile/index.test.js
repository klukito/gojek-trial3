import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../../App";
import { Profile } from "./index"

test("renders follow button", () => {
    render(<Profile />);
    const linkElement = screen.getByText("Follow");
    expect(linkElement).toBeTruthy();
});

