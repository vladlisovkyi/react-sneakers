import React from "react";
import {
  FieldError,
  DeepMap,
} from "react-hook-form";


interface IInput {
  name: string;
  label: string;
  placeholder: string;
  register: any;
  required?: boolean;
  type: string;
  pattern?: RegExp;
  minLength?: number;
  maxLength?: number;
  error?: DeepMap<any, FieldError> | FieldError;
  errorMessage?: string;
}

const Input: React.FC<IInput> = ({
  name,
  label,
  placeholder,
  register,
  required,
  pattern,
  type,
  minLength,
  maxLength,
  error,
  errorMessage,
}) => {
  return (
    <div className="relative pb-8">
      <label className="block mb-2 text-sm">{label}</label>
      <input
        type={type}
        className={`w-full px-4 py-2 outline-none rounded-xl border-2 border-gray-200 bg-transparent focus:border-purple-500 ${
          error && "border-red-500"
        }`}
        placeholder={placeholder}
        {...register(name, {
          required: required && "This field is required",
          pattern: pattern && {
            value: pattern,
            message: "Please enter a valid value",
          },
          minLength: minLength && {
            value: minLength,
            message: `Minimum length is ${minLength}`,
          },
          maxLength: maxLength && {
            value: maxLength,
            message: `Maximum length is ${maxLength}`,
          },
        })}
      />
      {error && (
        <span className="absolute  left-0 mt-12 text-red-500 text-xs">
          {errorMessage}
        </span>
      )}
    </div>
  );
};

export default Input;
