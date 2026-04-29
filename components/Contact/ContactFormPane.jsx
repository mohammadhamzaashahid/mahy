"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { COUNTRIES, ENQUIRY_TYPES } from "../../config/contactOptions.js";
import React, { useState } from "react";
import SubmitButton from "./SubmitButton.jsx";
import { submitContactEnquiry } from "@/lib/api/contactEnquiry.api";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

const COUNTRY_VALUES = new Set(COUNTRIES.map(({ value }) => value));
const ENQUIRY_TYPE_VALUES = new Set(ENQUIRY_TYPES.map(({ value }) => value));
const COUNTRY_LABELS = new Map(COUNTRIES.map(({ value, label }) => [value, label]));
const nameRegex = /^[A-Za-z][A-Za-z\s'-]*$/;
const phoneFormatRegex = /^\+?[\d\s()-]+$/;

const emptyToUndefined = (value) =>
  typeof value === "string" && value.trim() === "" ? undefined : value;

const optionalTrimmedString = (max, message) =>
  z.preprocess(
    emptyToUndefined,
    z.string().trim().max(max, message).optional(),
  );

const schema = z.object({
  firstName: z
    .string()
    .trim()
    .min(1, "First name is required")
    .min(2, "First name must be at least 2 characters")
    .max(50, "First name is too long")
    .regex(
      nameRegex,
      "First name can only contain letters, spaces, apostrophes, or hyphens",
    ),
  lastName: z
    .string()
    .trim()
    .min(1, "Last name is required")
    .min(2, "Last name must be at least 2 characters")
    .max(50, "Last name is too long")
    .regex(
      nameRegex,
      "Last name can only contain letters, spaces, apostrophes, or hyphens",
    ),
  companyName: optionalTrimmedString(100, "Company name is too long"),
  companyWebsite: z.preprocess(
    emptyToUndefined,
    z
      .string()
      .trim()
      .url("Enter a valid URL, including https://")
      .max(200, "Website URL is too long")
      .optional(),
  ),
  businessEmail: z
    .string()
    .trim()
    .min(1, "Business email is required")
    .email("Enter a valid business email")
    .max(100, "Business email is too long"),
  mobileNumber: z
    .string()
    .trim()
    .min(1, "Mobile number is required")
    .refine((value) => phoneFormatRegex.test(value), {
      message: "Enter a valid mobile number",
    })
    .refine((value) => {
      const digits = value.replace(/\D/g, "");
      return digits.length >= 7 && digits.length <= 15;
    }, "Mobile number must contain 7 to 15 digits"),
  country: z
    .string()
    .min(1, "Country is required")
    .refine((value) => COUNTRY_VALUES.has(value), "Select a valid country"),
  enquiryType: z
    .string()
    .min(1, "Enquiry type is required")
    .refine(
      (value) => ENQUIRY_TYPE_VALUES.has(value),
      "Select a valid enquiry type",
    ),
  message: optionalTrimmedString(1000, "Message is too long"),
  agreed: z.literal(true, {
    error: "Please accept the agreement",
  }),
});

export default function ContactFormPane({ data, agreement, submit }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    mode: "onTouched",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // const { executeRecaptcha } = useGoogleReCaptcha();

  const onSubmit = async (values) => {
    setIsSubmitting(true);

    try {
      // if (!executeRecaptcha) {
      //   console.warn("reCAPTCHA not yet available");
      //   return;
      // }

      // const token = await executeRecaptcha("contact_form");

      const payload = {
        firstName: values.firstName,
        lastName: values.lastName,
        companyName: values.companyName || "",
        companyWebsite: values.companyWebsite || "",
        businessEmail: values.businessEmail,
        mobileNumber: values.mobileNumber,
        country: COUNTRY_LABELS.get(values.country) || values.country,
        enquiryType: values.enquiryType,
        message: values.message || "",
        agreed: values.agreed,
      };

      const response = await submitContactEnquiry(payload);
      toast.success(response?.message || "Enquiry submitted successfully.");
      reset();
    } catch (error) {
      toast.error(error.message || "Failed to submit enquiry.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar
        newestOnTop
        closeOnClick
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="light"
      />

      <form onSubmit={handleSubmit(onSubmit)} className="pt-4 max-w-3xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5">
          <Field label={data[0]} error={errors.firstName} required>
            <input autoComplete="given-name" {...register("firstName")} />
          </Field>

          <Field label={data[1]} error={errors.lastName} required>
            <input autoComplete="family-name" {...register("lastName")} />
          </Field>

          <Field label={data[2]} error={errors.companyName}>
            <input autoComplete="organization" {...register("companyName")} />
          </Field>

          <Field label={data[3]} error={errors.companyWebsite}>
            <input
              type="url"
              placeholder="https://example.com"
              {...register("companyWebsite")}
            />
          </Field>

          <Field label={data[4]} error={errors.businessEmail} required>
            <input
              type="email"
              autoComplete="email"
              {...register("businessEmail")}
            />
          </Field>

          <Field label={data[5]} error={errors.mobileNumber} required>
            <input
              type="tel"
              autoComplete="tel"
              placeholder="+971 55 123 4567"
              {...register("mobileNumber")}
            />
          </Field>
        </div>

        <div className="mt-6 space-y-5">
          <SelectField
            label={data[6]}
            error={errors.country}
            {...register("country")}
            options={COUNTRIES}
            autoComplete="country"
          />

          <SelectField
            label={data[7]}
            error={errors.enquiryType}
            {...register("enquiryType")}
            options={ENQUIRY_TYPES}
          />

          <Field label={data[8]}>
            <textarea rows={4} {...register("message")} />
          </Field>

          <div className="flex items-center gap-3">
            <input type="checkbox" {...register("agreed")} />
            <p className="text-sm text-slate-600">
              {agreement[0]} <span className="underline">{agreement[1]}</span>{" "}
              {agreement[2]} <span className="underline">{agreement[3]}</span>
            </p>
          </div>

          {errors.agreed && (
            <p className="text-sm text-red-500">{errors.agreed.message}</p>
          )}

          <SubmitButton label={submit} loading={isSubmitting} />
        </div>
      </form>
    </>
  );
}

export function Field({ label, error, required = false, children }) {
  const inputClass =
    "w-full h-12 rounded-md border border-slate-300 px-4 text-sm focus:border-black focus:outline-none";

  return (
    <div>
      <label className="mb-1 block text-sm font-medium text-slate-700">
        {label}
        {required && <span className="text-red-500"> *</span>}
      </label>

      {React.isValidElement(children) &&
        React.cloneElement(children, {
          className: `${inputClass} ${children.props.className || ""}`,
        })}

      <div className="min-h-[18px] mt-1">
        {error && <p className="text-xs text-red-500">{error.message}</p>}
      </div>
    </div>
  );
}

export function SelectField({ label, options, error, ...props }) {
  return (
    <div>
      <label className="mb-1 block text-sm font-medium text-slate-700">
        {label} <span className="text-red-500">*</span>
      </label>

      <select
        {...props}
        className="w-full h-12 rounded-md border border-slate-300 px-4 text-sm focus:border-black focus:outline-none"
      >
        <option value="">Select</option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>

      <div className="min-h-[18px] mt-1">
        {error && <p className="text-xs text-red-500">{error.message}</p>}
      </div>
    </div>
  );
}
