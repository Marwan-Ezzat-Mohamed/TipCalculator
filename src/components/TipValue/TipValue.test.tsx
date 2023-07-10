import { render, screen, fireEvent } from "@testing-library/react";
import TipValue from "./TipValue";

describe("TipValue", () => {
  const resetAllMock = jest.fn();

  beforeEach(() => {
    resetAllMock.mockClear();
  });

  it("renders tip amount and total per person values", () => {
    render(
      <TipValue
        tipAmountPerPerson={5}
        totalPerPerson={25}
        resetAll={resetAllMock}
      />
    );

    expect(screen.getByTestId("tip-amount-per-person-text")).toHaveTextContent(
      "$5.00"
    );
    expect(screen.getByTestId("total-per-person-text")).toHaveTextContent(
      "$25.00"
    );
  });

  it("renders disabled reset button when tip amount and total per person are 0", () => {
    render(
      <TipValue
        resetAll={resetAllMock}
        tipAmountPerPerson={0}
        totalPerPerson={0}
      />
    );

    expect(screen.getByTestId("reset-button")).toBeDisabled();
  });

  it("calls resetAll function when reset button is clicked", () => {
    render(
      <TipValue
        tipAmountPerPerson={5}
        totalPerPerson={25}
        resetAll={resetAllMock}
      />
    );

    const resetButton = screen.getByTestId("reset-button");
    // button should be enabled
    expect(resetButton).not.toBeDisabled();
    fireEvent.click(resetButton);

    expect(resetAllMock).toHaveBeenCalled();
  });
});
