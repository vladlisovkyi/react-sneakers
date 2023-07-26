import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Input from "../../UI/Input";
import { useAppSelector } from "../../app/hooks";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { clearCart } from "../../app/features/cart/cartSlice";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  city: string;
  phoneNumber: number;
  postalCode: number;
}
type CustomSubmitHandler = SubmitHandler<FormData>;

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, isSubmitting },
  } = useForm<FormData>({
    mode: "all",
  });
  const cart = useAppSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const onSubmit: CustomSubmitHandler = (data) => {
    console.log(data);
    toast.success("Purchase submitted successfully!", {
      position: "bottom-left",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
    dispatch(clearCart());
    reset();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="md:w-[460px] m-auto flex flex-col items-center"
      >
        <div className="grid grid-cols-1 xs:grid-cols-2 gap-4">
          <Input
            name="firstName"
            label="First Name"
            placeholder="Enter your first name"
            type="text"
            register={register}
            required={true}
            minLength={2}
            maxLength={30}
            error={errors.firstName}
            errorMessage={
              "This field is required and should be between 2 and 30 characters"
            }
          />
          <Input
            name="lastName"
            label="Last Name"
            placeholder="Enter your last name"
            type="text"
            register={register}
            required={true}
            minLength={2}
            maxLength={30}
            error={errors.lastName}
            errorMessage={
              "This field is required and should be between 2 and 30 characters"
            }
          />
          <Input
            name="email"
            label="Email"
            placeholder="Enter your email address"
            type="email"
            register={register}
            required={true}
            pattern={/^\S+@\S+$/i}
            error={errors.email}
            errorMessage={"Please enter a valid email address"}
          />

          <Input
            name="city"
            label="City"
            placeholder="Enter your city"
            type="text"
            register={register}
            required={true}
            error={errors.city}
            errorMessage={"Please enter a valid city"}
          />

          <Input
            name="phoneNumber"
            label="Phone Number"
            placeholder="Enter your phone number"
            type="tel"
            register={register}
            required={true}
            minLength={10}
            maxLength={10}
            error={errors.phoneNumber}
            errorMessage={"Must contain 10 characters"}
          />
          <Input
            name="postalCode"
            label="Postal Code"
            placeholder="Enter your postal code"
            type="text"
            register={register}
            required={true}
            error={errors.postalCode}
            errorMessage={"Please enter a valid postal code"}
          />
        </div>
        <button
          type="submit"
          disabled={!isValid || isSubmitting || !cart.length}
          className="px-8 py-2 rounded-xl bg-purple-400 hover:bg-purple-500 transition-colors duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
        <ToastContainer />
      </form>
    </>
  );
};

export default Form;
