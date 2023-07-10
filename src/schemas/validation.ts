import * as Yup from "yup";

const tipFormValidationSchema = Yup.object({
  bill: Yup.number()
    .required("Required")
    .positive("Can't be negative")
    .typeError("Must be a number")
    .max(10000000, "Number is large")
    .moreThan(0, "Can't be Zero"),

  people: Yup.number()
    .required("Required")
    .positive("Can't be negative")
    .typeError("Must be a number")
    .max(10000000, "Number is large")
    .moreThan(0, "Can't be Zero")
    .integer("Must be an integer"),

  tip: Yup.number().typeError("Must be a number"),
});

export { tipFormValidationSchema };
