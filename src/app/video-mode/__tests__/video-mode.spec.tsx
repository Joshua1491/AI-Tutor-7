import React from "react";
import { render, screen } from "@testing-library/react";
import VideoBank from "../_components/VideoBank";

describe("<VideoBank />", () => {
  it("renders fallback when no videos", () => {
    render(<VideoBank videos={[]} />);
    expect(screen.getByText(/no videos found/i)).toBeInTheDocument();
  });
});
