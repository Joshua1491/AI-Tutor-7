import { render, screen } from "@testing-library/react";
import { Topbar } from "../ui/Topbar";

describe("Dashboard page", () => {
  it("renders welcome message", () => {
    render(<Topbar />);
    expect(screen.getByText(/welcome back/i)).toBeInTheDocument();
  });
});
