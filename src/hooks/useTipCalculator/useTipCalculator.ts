import { useCallback, useEffect, useState } from "react";
import { useFormik } from "formik";
import { tipFormValidationSchema } from "../../schemas/validation";

export interface TipFormValues {
  bill?: number;
  people?: number;
  tip?: number;
}

interface TipResults {
  tipAmountPerPerson: number;
  totalPerPerson: number;
}

const useTipCalculator = () => {
  const formik = useFormik<TipFormValues>({
    initialValues: {
      bill: undefined,
      people: undefined,
      tip: undefined,
    },
    validationSchema: tipFormValidationSchema,
    validateOnMount: true,
    validateOnChange: true,
    onSubmit: (values) => {},
  });

  const [tipResults, setTipResults] = useState<TipResults>({
    tipAmountPerPerson: 0,
    totalPerPerson: 0,
  });

  const calculateTipResults = useCallback((values: TipFormValues) => {
    const { bill = 0, tip = 0, people = 0 } = values;

    const sanitizedBill = Math.max(bill, 0);
    const sanitizedTip = Math.max(tip, 0);
    const sanitizedPeople = Math.max(people, 0);

    //avoid division by zero
    if (sanitizedPeople === 0) {
      setTipResults({
        tipAmountPerPerson: 0,
        totalPerPerson: 0,
      });
      return;
    }

    const tipAmount = (sanitizedBill * (sanitizedTip / 100)) / sanitizedPeople;
    const totalPerPerson =
      (sanitizedBill + tipAmount * sanitizedPeople) / sanitizedPeople;

    setTipResults({
      tipAmountPerPerson: tipAmount,
      totalPerPerson: totalPerPerson,
    });
  }, []);

  const resetAll = useCallback(() => {
    setTipResults({
      tipAmountPerPerson: 0,
      totalPerPerson: 0,
    });
    formik.resetForm();
  }, [formik.resetForm]);

  useEffect(() => {
    if (formik.isValidating || !formik.isValid) return;
    calculateTipResults(formik.values);
  }, [formik.values, formik.isValid, formik.isValidating, calculateTipResults]);

  return {
    formik,
    tipResults,
    resetAll,
  };
};

export { useTipCalculator };
