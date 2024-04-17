import { ComponentProps } from "react";

type InputProps = ComponentProps<"input"> & {
  label: string;
  error: string | null;
};

const Input = ({
  id,
  label,
  type,
  onChange,
  onBlur,
  value,
  error,
}: InputProps) => {
  return (
    <div>
      <label className="mb-1 block text-lg text-neutral-200" htmlFor={id}>
        {label}:
      </label>
      <input
        className="mb-1 block w-full rounded-md border-[1px]
        border-neutral-700 bg-neutral-800 py-2 pl-2 text-base text-neutral-200
        outline-none transition duration-200 hover:border-indigo-400 hover:bg-neutral-700
        md:w-96"
        id={id}
        type={type}
        placeholder={"Your " + label}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      />
      {error && <p className="text-red-300">{error}</p>}
    </div>
  );
};

export default Input;
