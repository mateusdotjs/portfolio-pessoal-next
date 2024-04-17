import { ComponentProps } from "react";

type TextareaProps = ComponentProps<"textarea"> & {
  label: string;
  error: string | null;
};

const Textarea = ({
  id,
  label,
  onChange,
  onBlur,
  value,
  error,
}: TextareaProps) => {
  return (
    <div>
      <label className="mb-1 block text-lg text-neutral-200" htmlFor={id}>
        {label}:
      </label>
      <textarea
        className="h-52 w-full md:w-96 rounded-md border-[1px]
      border-neutral-700 bg-neutral-800 py-2 pl-2 text-base text-neutral-200
      outline-none transition duration-200 hover:border-indigo-400
      hover:bg-neutral-700"
        id={id}
        placeholder={"Your " + label}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      />
      {error && <p className="text-red-300">{error}</p>}
    </div>
  );
};

export default Textarea;
