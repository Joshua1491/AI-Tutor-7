import React from "react";
import { render, screen } from "@testing-library/react";
import ExamCategoryModal from "../_components/ExamCategoryModal";
import { describe, it, vi } from "vitest";

const categories = [
  { id: "eng", name: "Engineering", gradient: "from-blue-500 to-indigo-500" },
];

describe("<ExamCategoryModal />", () => {
  it("renders header text", () => {
    render(
      <ExamCategoryModal
        open
        categories={categories}
        onSelect={vi.fn()}
        onClose={() => {}}
      />,
    );

    expect(screen.getByText(/choose exam category/i)).toBeInTheDocument();
  });
});
