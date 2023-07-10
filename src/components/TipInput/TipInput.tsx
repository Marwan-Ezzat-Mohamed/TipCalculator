import DollarIcon from "../../assets/icon-dollar.svg";
import PersonIcon from "../../assets/icon-person.svg";
import SelectBoxes from "../common/SelectBoxes/SelectBoxes";
import CustomInput from "../common/CustomInput";
import { FormikProps } from "formik";
import { TipFormValues } from "../../hooks/useTipCalculator/useTipCalculator";

interface Props extends FormikProps<TipFormValues> {}

const tipValues = [5, 10, 15, 25, 50];

function TipInput(props: Props) {
  const { values, getFieldProps, getFieldMeta, setFieldValue } = props;

  const setTipValue = (value: number, isCustom: boolean) => {
    setFieldValue("isCustom", isCustom);
    setFieldValue("tip", value);
  };

  return (
    <form className="flex h-full w-full flex-col justify-between space-y-4 p-2 mobile:w-full">
      <CustomInput
        type="number"
        step="any"
        label="Bill"
        iconUrl={DollarIcon}
        placeholder="0"
        {...getFieldProps("bill")}
        {...getFieldMeta("bill")}
      />

      <div className="flex w-full flex-col ">
        <p className="pb-3 text-sm text-neutral-600">Select Tip %</p>
        <SelectBoxes
          values={tipValues.map((value) => ({
            value,
            text: `${value}%`,
          }))}
          selectedValue={values.tip}
          setSelectedValue={(value) => setTipValue(value, false)}
          inputProps={{
            type: "number",
            placeholder: "Custom",
            step: "any",
            classNames: "placeholder:text-center placeholder:text-neutral-900",
            ...getFieldProps("tip"),
            ...getFieldMeta("tip"),
          }}
        />
      </div>

      <CustomInput
        type="number"
        step="any"
        label="Number of People"
        iconUrl={PersonIcon}
        placeholder="0"
        {...getFieldProps("people")}
        {...getFieldMeta("people")}
      />
    </form>
  );
}

export default TipInput;
