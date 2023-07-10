import * as Yup from "yup";

const tipFormValidationSchema = Yup.object({
  bill: Yup.number()
    .required("Required")
    .positive("Can't be negative")
    .typeError("Must be a number")
    .max(10000000, "Number is large")
    .moreThan(0, "Must be greater than 0"),

  people: Yup.number()
    .required("Required")
    .positive("Can't be negative")
    .typeError("Must be a number")
    .max(10000000, "Number is large")
    .min(1, "Must be at least 1")
    .integer("Must be an integer"),

  tip: Yup.number()
    .positive("Can't be negative")
    .typeError("Must be a number")
    .max(100, "Can't be more than 100"),
});

export { tipFormValidationSchema };
