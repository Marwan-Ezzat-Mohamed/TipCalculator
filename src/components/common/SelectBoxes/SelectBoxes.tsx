import { InputHTMLAttributes, memo } from "react";
import isEqual from "lodash.isequal";

interface SelectValue<T> {
  value: NonNullable<T>;
  text: string;
}

interface Props<T extends string | number | undefined> {
  values: SelectValue<T>[];
  selectedValue: SelectValue<T>["value"] | undefined;
  setSelectedValue: (value: SelectValue<T>["value"]) => void;
  inputProps?: React.DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > & {
    classNames?: string;
    error?: string;
  };
}

const SelectBoxes = <T extends string | number | undefined>({
  values,
  inputProps = undefined,
  selectedValue,
  setSelectedValue,
}: Props<T>) => {
  const className = inputProps?.error ? "ring-red-400 ring-2" : "ring-primary";
  return (
    <div className="grid h-auto w-full grid-cols-1 gap-4 xs:grid-cols-2 sm:grid-cols-3">
      {values.map(({ value, text }) => (
        <span
          key={`${value}`}
          className={`flex h-12 w-full cursor-pointer items-center justify-center rounded-md p-3 py-2 text-center hover:bg-primary hover:text-neutral-900 mobile:text-2xl desktop:text-xl  ${
            selectedValue === value
              ? "bg-primary text-neutral-900"
              : "bg-neutral-900 text-white"
          }              `}
          onClick={() => setSelectedValue(value)}
        >
          {text}
        </span>
      ))}
      {inputProps && (
        <input
          className={`w-full rounded-md bg-neutral-100 !p-2 text-end text-neutral-900 outline-none ring-primary invalid:ring-2 invalid:ring-red-400 hover:ring-2 focus:ring-2 ${className} ${inputProps.classNames}`}
          {...inputProps}
          value={inputProps.value ?? ""}
        />
      )}
    </div>
  );
};

export default memo(SelectBoxes, isEqual) as typeof SelectBoxes;
