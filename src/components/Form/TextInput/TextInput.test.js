import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import TextInput from "./TextInput";

describe("<TextInput />", () => {
  test("textinput fire onchange event", () => {
    const text = "My name";
    const mockOnClick = jest.fn();
    render(
      <TextInput
        label="Test"
        name="nameTest"
        type="text"
        value=""
        aria-label="nameTest"
        onChange={mockOnClick}
      />
    );
    const input = screen.getByRole("textbox", { name: /Test/i });

    user.type(input, text);

    expect(mockOnClick).toHaveBeenCalledTimes(text.length);
  });
});
