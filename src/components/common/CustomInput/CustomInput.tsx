import { FieldInputProps, FieldMetaProps } from "formik";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  iconUrl: string;
  classNames?: string;
}

type CustomInputProps = Props &
  FieldInputProps<string> &
  FieldMetaProps<string>;

const CustomInput = (props: CustomInputProps) => {
  const hasError = props.touched && props.error;
  const className = hasError ? "ring-red-400 ring-2" : "ring-primary";

  return (
    <div className="flex w-full flex-col p-1">
      <div className="flex justify-between">
        <label className="mb-1 text-sm text-gray-500">{props.label}</label>

        {!!hasError && (
          <span className="text-sm text-red-400">{props.error}</span>
        )}
      </div>
      <div className="relative flex w-full items-center rounded-md">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
          <img src={props.iconUrl} alt="icon" />
        </div>
        <input
          className={`w-full rounded-md bg-neutral-100 !p-2 text-end text-neutral-900 outline-none ring-primary invalid:ring-2 invalid:ring-red-400 hover:ring-2 focus:ring-2 ${className} ${props.classNames}`}
          {...props}
          value={props.value ?? ""}
        />
      </div>
    </div>
  );
};

export default CustomInput;
