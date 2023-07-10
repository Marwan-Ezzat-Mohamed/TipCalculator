import { renderHook, act } from "@testing-library/react-hooks";
import { useTipCalculator } from "./useTipCalculator";
import { waitFor } from "@testing-library/react";

describe("useTipCalculator", () => {
  test("calculates tip results correctly", async () => {
    const { result } = renderHook(() => useTipCalculator());

    act(() => {
      result.current.formik.setValues({
        bill: 100,
        tip: 20,
        people: 4,
      });
    });
    await waitFor(() => {
      expect(result.current.tipResults.tipAmountPerPerson).toBe(5);
      expect(result.current.tipResults.totalPerPerson).toBe(30);
    });

    act(() => {
      result.current.formik.setValues({
        bill: 100,
        tip: 10,
        people: 1,
      });
    });

    await waitFor(() => {
      expect(result.current.tipResults.tipAmountPerPerson).toBe(10);
      expect(result.current.tipResults.totalPerPerson).toBe(110);
    });
  });

  test("sets tip results to zero when people is zero", async () => {
    const { result } = renderHook(() => useTipCalculator());

    act(() => {
      result.current.formik.setValues({
        bill: 100,
        tip: 20,
        people: 0,
      });
    });

    await waitFor(() => {
      expect(result.current.tipResults.tipAmountPerPerson).toBe(0);
      expect(result.current.tipResults.totalPerPerson).toBe(0);
    });
  });

  test("resets all values correctly", async () => {
    const { result } = renderHook(() => useTipCalculator());

    act(() => {
      result.current.formik.setValues({
        bill: 100,
        tip: 20,
        people: 4,
      });
    });

    act(() => {
      result.current.resetAll();
    });

    await waitFor(() => {
      expect(result.current.tipResults.tipAmountPerPerson).toBe(0);
      expect(result.current.tipResults.totalPerPerson).toBe(0);
      expect(result.current.formik.values).toEqual({});
    });
  });
});
