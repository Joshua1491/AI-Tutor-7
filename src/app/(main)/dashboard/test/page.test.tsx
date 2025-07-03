import React from "react";
import { render, screen } from "@testing-library/react";
import { Topbar } from "../ui/Topbar";

describe("Dashboard page", () => {
  it("renders search input", () => {
    render(<Topbar />);
    expect(screen.getByPlaceholderText(/search/i)).toBeInTheDocument();
  });
});
