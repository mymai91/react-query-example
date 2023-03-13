import React from "react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login from "../components/Login";

const mockNavigate = jest.fn();
const mockMutation = jest.fn();

jest.mock("@tanstack/react-query", () => ({
  // useQuery: () => ({ isLoading: false, error: {}, data: [] }),
  useMutation: () => mockMutation,
}));

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

const server = setupServer(
  rest.post("/login", (req, res, ctx) => {
    return res(
      ctx.json({ id: 25, email: "my.maithi@gmail.com", name: "jany mai" })
    );
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

const setup = () => {
  const utils = render(<Login />);

  const emailInput = screen.getByTestId("login-email-input");
  const passwordInput = screen.getByTestId("login-password-input");
  const loginBtn = screen.getByTestId("login-submit-btn");

  return {
    emailInput,
    passwordInput,
    loginBtn,
    ...utils,
  };
};

test("loads and displays greeting", async () => {
  const { emailInput, passwordInput } = setup();

  fireEvent.change(emailInput, { target: { value: "mymai@gmail.com" } });
  expect(emailInput.value).toBe("mymai@gmail.com");
  fireEvent.change(passwordInput, { target: { value: "abcabc" } });
  expect(passwordInput.value).toBe("abcabc");
});
