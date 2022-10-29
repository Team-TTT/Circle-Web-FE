import { fireEvent, getByTestId, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ProjectsPage from "../pages/ProjectsPage";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useOutletContext: () => [, , , jest.fn, true],
  useNavigate: jest.fn,
}));

jest.mock("react-markdown", () => function Mock({ children }) {
  return <div>{children}</div>
});

describe("ProjectDetailPage", () => {
  it("프로젝트 추가하기 버튼이 있어야 합니다.", () => {
    render(<ProjectsPage />, { wrapper: BrowserRouter });
    expect(screen.getByTestId("project-create-button")).toBeInTheDocument();
  });
});
