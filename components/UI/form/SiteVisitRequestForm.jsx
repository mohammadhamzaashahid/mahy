"use client";

import React from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { FormSection } from "@/components/form/FormSection";
import { InputField, TextareaField } from "@/components/form/InputField";
import { DatePickerField } from "@/components/form/DatePickerField";
import { FileUploadField } from "@/components/form/FileUploadField";
import { FormField } from "@/components/form/FormField";
import {
  AnimatedGroup,
  AnimatedGroupItem,
} from "@/components/form/AnimatedField";
import { TimePickerField } from "./TimePickerField";
import { useCreateSiteVisit } from "@/lib/hooks/useCreateSiteVisit";

const SECTORS = [
  "Trading & Distribution",
  "Engineering",
  "Manufacturing",
  "Logistics",
  "Energy",
  "Hospitality",
  "Automotive",
  "Other",
];

const PREFERRED_VISIT_TIME_SLOTS = [
  {
    value: "08_10",

    label: "08:00 AM To 10:00 AM",
  },

  {
    value: "10_12",

    label: "10:00 AM To 12:00 PM",
  },

  {
    value: "12_14",

    label: "12:00 PM To 02:00 PM",
  },

  {
    value: "14_16",

    label: "02:00 PM To 04:00 PM",
  },

  {
    value: "16_18",

    label: "04:00 PM To 06:00 PM",
  },
];
const COUNTRIES = ["UAE", "KSA", "Oman", "Qatar", "Bahrain", "Kuwait", "Other"];

const SITE_TYPES = [
  "Residential",
  "Commercial",
  "Industrial",
  "Infrastructure",
];

const NATURE_OF_REQUIREMENT = [
  "Inspection",
  "Survey",
  "Installation",
  "Maintenance",
  "Repair",
  "Consultation",
];

const URGENCY_LEVELS = ["Normal", "High", "Critical"];

const HEAR_ABOUT = [
  "Google",
  "Social Media",
  "Referral",
  "Existing Client",
  "Other",
];

const phoneDigitsRegex = /^\d+$/;
const MAX_PHONE_DIGITS = 15;

const emptyToUndefined = (value) =>
  typeof value === "string" && value.trim() === "" ? undefined : value;

const optionalTrimmedString = (max, message) =>
  z.preprocess(
    emptyToUndefined,
    z.string().trim().max(max, message).optional(),
  );

const phoneNumberSchema = (fieldName, { required = false } = {}) => {
  const addPhoneValidation = (schema) =>
    schema
      .refine((value) => phoneDigitsRegex.test(value), {
        message: `${fieldName} can only contain digits`,
      })
      .refine((value) => {
        return value.length >= 7 && value.length <= MAX_PHONE_DIGITS;
      }, `${fieldName} must contain 7 to 15 digits`);

  const stringSchema = z.string().trim();

  if (required) {
    return addPhoneValidation(stringSchema.min(1, `${fieldName} is required`));
  }

  return z.preprocess(
    emptyToUndefined,
    addPhoneValidation(stringSchema).optional(),
  );
};

const isPastDate = (date) => {
  if (!(date instanceof Date)) return false;

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const selected = new Date(date);
  selected.setHours(0, 0, 0, 0);

  return selected < today;
};

const limitPhoneDigits = (value) =>
  String(value || "")
    .replace(/\D/g, "")
    .slice(0, MAX_PHONE_DIGITS);

const getSubmitErrorMessage = (error, fallback) =>
  error?.response?.data?.message ||
  error?.response?.data?.error ||
  error?.data?.message ||
  error?.message ||
  fallback;

const getFirstFormErrorMessage = (formErrors) => {
  for (const error of Object.values(formErrors || {})) {
    if (!error) continue;
    if (typeof error.message === "string") return error.message;

    if (typeof error === "object") {
      const nestedMessage = getFirstFormErrorMessage(error);
      if (nestedMessage) return nestedMessage;
    }
  }

  return "Please correct the highlighted fields.";
};

const toastContainerStyle = {
  zIndex: 20000,
  top: "5.5rem",
};

const schema = z.object({
  companyName: z
    .string()
    .trim()
    .min(1, "Company Name is required")
    .max(100, "Company Name is too long"),
  sector: z.string().optional(),
  companyAddress: optionalTrimmedString(250, "Company address is too long"),
  city: optionalTrimmedString(80, "City is too long"),
  country: z.string().optional(),

  // Contact Person
  contactPerson: z
    .string()
    .trim()
    .min(1, "Contact Person is required")
    .max(80, "Contact Person is too long"),
  jobTitle: optionalTrimmedString(80, "Job title is too long"),
  emailAddress: z
    .string()
    .trim()
    .min(1, "Email Address is required")
    .email("Enter a valid email")
    .max(100, "Email Address is too long"),
  mobileNumber: phoneNumberSchema("Mobile Number", { required: true }),
  alternativeContactNumber: phoneNumberSchema("Alternative Contact Number"),
  // Site Details
  siteLocation: z
    .string()
    .trim()
    .min(1, "Site Location is required")
    .max(250, "Site Location is too long"),
  typeOfSite: z.string().optional(),
  natureOfRequirement: z.array(z.string()).optional(),
  // natureOfRequirement: z.string().optional(),

  preferredVisitDate: z
    .date({
      error: "Preferred Visit Date is required",
    })
    .refine((date) => !isPastDate(date), {
      message: "Preferred Visit Date cannot be in the past",
    }),
  // preferredVisitTime: z.preprocess(
  //   emptyToUndefined,
  //   z
  //     .object({
  //       hours: z.number(),
  //       minutes: z.number(),
  //       seconds: z.number(),
  //       formatted: z.string(),
  //     })
  //     .optional(),
  // ),
  preferredVisitTime: z
    .enum(["08_10", "10_12", "12_14", "14_16", "16_18"])
    .optional()
    .or(z.literal("")),

  urgencyLevel: z.enum(["Normal", "High", "Critical"]).optional(),

  // Technical Information
  briefDescription: z
    .string()
    .trim()
    .min(1, "Brief Description is required")
    .max(1000, "Brief Description is too long"),
  existingSystem: optionalTrimmedString(1000, "Existing System is too long"),
  safetyRequirements: optionalTrimmedString(
    1000,
    "Safety Requirements is too long",
  ),
  attachFile: z.any().optional(),

  // Consent & Submission
  howDidYouHear: z.string().optional(),
  consent: z.literal(true, { error: "Consent is required" }),
});

const defaultValues = {
  companyName: "",
  sector: "",
  companyAddress: "",
  city: "",
  country: "",

  contactPerson: "",
  jobTitle: "",
  emailAddress: "",
  mobileNumber: "",
  alternativeContactNumber: "",

  siteLocation: "",
  typeOfSite: "",
  natureOfRequirement: [],
  // natureOfRequirement: "",

  preferredVisitDate: undefined,
  preferredVisitTime: "",
  urgencyLevel: "Normal",

  briefDescription: "",
  existingSystem: "",
  safetyRequirements: "",
  attachFile: null,

  howDidYouHear: "",
  consent: false,
};

export default function SiteVisitRequestForm() {
  const {
    control,
    register,
    handleSubmit,
    reset,
    setError,
    clearErrors,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues,
    mode: "onChange",
  });

  // const selectedNature = watch("natureOfRequirement") || [];
  const createMutation = useCreateSiteVisit();
  const mobileNumberField = register("mobileNumber");
  const alternativeContactNumberField = register("alternativeContactNumber");

  const selectedNature = watch("natureOfRequirement") || [];
  const natureToggle = (item) => {
    const current = new Set(selectedNature);
    if (current.has(item)) {
      current.delete(item);
    } else {
      current.add(item);
    }
    setValue("natureOfRequirement", Array.from(current), {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    });
  };

  const onInvalid = (formErrors) => {
    toast.error(getFirstFormErrorMessage(formErrors));
  };

  const onSubmit = async (values) => {
    try {
      const formData = new FormData();

      Object.entries(values).forEach(([key, value]) => {
        if (value === undefined || value === null || key === "attachFile")
          return;

        if (key === "preferredVisitDate" && value instanceof Date) {
          formData.append(key, value.toISOString());
        } else if (typeof value === "object") {
          formData.append(key, JSON.stringify(value));
        } else {
          formData.append(key, value);
        }
      });

      if (values.attachFile instanceof File) {
        formData.append("attachFile", values.attachFile);
      }

      await createMutation.mutateAsync(formData);

      toast.success("Site visit request submitted successfully.");
      reset(defaultValues);
    } catch (error) {
      toast.error(
        getSubmitErrorMessage(error, "Failed to submit site visit request."),
      );
    }
  };

  // const natureToggle = (item) => {
  //   const current = new Set(selectedNature);
  //   if (current.has(item)) current.delete(item);
  //   else current.add(item);
  //   setValue("natureOfRequirement", Array.from(current), {
  //     shouldValidate: true,
  //   });
  // };

  const selectClass =
    "w-full h-10 mt-1 bg-gray-50 border border-gray-200 rounded-md px-3 text-sm outline-none focus:ring-2 focus:ring-black/10 focus:border-gray-300";

  const boxClass =
    "w-full mt-1 bg-gray-50 border border-gray-200 rounded-md px-3 py-2 text-sm";

  return (
    <section className="w-full bg-white">
      <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar
        newestOnTop
        closeOnClick
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="light"
        style={toastContainerStyle}
      />

      <div className="max-w-6xl mx-auto px-6 sm:px-10 py-12">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-[26px] sm:text-[32px] font-semibold text-gray-900">
            Site Visit Request
          </h1>
          {/* <p className="mt-2 text-[12px] sm:text-[13px] text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Please provide the details below. Our team will review your request
            and contact you to confirm the visit.
          </p> */}
        </div>

        {/* Form Card */}
        <div className="mt-10 rounded-2xl border border-gray-200 bg-white shadow-sm">
          <form
            onSubmit={handleSubmit(onSubmit, onInvalid)}
            className="p-6 sm:p-8 space-y-10"
          >
            <AnimatedGroup className="space-y-10">
              {/* Company Information */}
              <AnimatedGroupItem>
                <FormSection title="Company Information">
                  <InputField
                    label="Company Name"
                    required
                    placeholder="Enter company name"
                    {...register("companyName")}
                    error={errors.companyName?.message}
                  />

                  <FormField label="Sector" error={errors.sector?.message}>
                    <select className={selectClass} {...register("sector")}>
                      <option value="">Select sector</option>
                      {SECTORS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </FormField>

                  <TextareaField
                    label="Company Address"
                    placeholder="Full address"
                    rows={4}
                    className="md:col-span-2 lg:col-span-3"
                    {...register("companyAddress")}
                    error={errors.companyAddress?.message}
                  />

                  <InputField
                    label="City"
                    placeholder="Enter city"
                    {...register("city")}
                    error={errors.city?.message}
                  />

                  <FormField label="Country" error={errors.country?.message}>
                    <select className={selectClass} {...register("country")}>
                      <option value="">Select country</option>
                      {COUNTRIES.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </FormField>
                </FormSection>
              </AnimatedGroupItem>

              {/* Contact Person */}
              <AnimatedGroupItem>
                <FormSection title="Contact Person">
                  <InputField
                    label="Contact Person"
                    required
                    placeholder="Full name"
                    {...register("contactPerson")}
                    error={errors.contactPerson?.message}
                  />

                  <InputField
                    label="Job Title"
                    placeholder="e.g., Manager, Engineer"
                    {...register("jobTitle")}
                    error={errors.jobTitle?.message}
                  />

                  <InputField
                    label="Email Address"
                    type="email"
                    required
                    placeholder="name@company.com"
                    {...register("emailAddress")}
                    error={errors.emailAddress?.message}
                  />

                  <InputField
                    label="Mobile Number"
                    type="tel"
                    required
                    inputMode="numeric"
                    maxLength={MAX_PHONE_DIGITS}
                    placeholder="e.g., 971551234567"
                    {...mobileNumberField}
                    onChange={(event) => {
                      event.target.value = limitPhoneDigits(event.target.value);
                      mobileNumberField.onChange(event);
                    }}
                    error={errors.mobileNumber?.message}
                  />

                  <InputField
                    label="Alternative Contact Number"
                    type="tel"
                    inputMode="numeric"
                    maxLength={MAX_PHONE_DIGITS}
                    placeholder="Optional"
                    {...alternativeContactNumberField}
                    onChange={(event) => {
                      event.target.value = limitPhoneDigits(event.target.value);
                      alternativeContactNumberField.onChange(event);
                    }}
                    error={errors.alternativeContactNumber?.message}
                  />
                </FormSection>
              </AnimatedGroupItem>

              {/* Site Details */}
              <AnimatedGroupItem>
                <FormSection title="Site Details">
                  <TextareaField
                    label="Site Location"
                    required
                    placeholder="Enter site location"
                    rows={4}
                    className="md:col-span-2 lg:col-span-3"
                    {...register("siteLocation")}
                    error={errors.siteLocation?.message}
                  />

                  <FormField
                    label="Type of Site"
                    error={errors.typeOfSite?.message}
                  >
                    <select className={selectClass} {...register("typeOfSite")}>
                      <option value="">Select site type</option>
                      {SITE_TYPES.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </FormField>

                  {/* Nature of Requirement (Multi-select Dropdown) */}
                  {/* <FormField
                    label="Nature of Requirement"
                    error={errors.natureOfRequirement?.message}
                    className="md:col-span-2 lg:col-span-2"
                  >
                    <div className={boxClass}>
                      <div className="flex flex-wrap gap-2 mb-2">
                        {selectedNature.length ? (
                          selectedNature.map((tag) => (
                            <span
                              key={tag}
                              className="inline-flex items-center rounded-full border border-gray-200 bg-white px-2 py-0.5 text-xs text-gray-700"
                            >
                              {tag}
                            </span>
                          ))
                        ) : (
                          <span className="text-xs text-gray-400">
                            Select one or more
                          </span>
                        )}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {NATURE_OF_REQUIREMENT.map((item) => {
                          const checked = selectedNature.includes(item);
                          return (
                            <label
                              key={item}
                              className="flex items-center gap-2 rounded-md border border-gray-200 bg-white px-3 py-2 cursor-pointer hover:bg-gray-50"
                            >
                              <input
                                type="checkbox"
                                checked={checked}
                                onChange={() => natureToggle(item)}
                                className="h-4 w-4"
                              />
                              <span className="text-sm text-gray-700">
                                {item}
                              </span>
                            </label>
                          );
                        })}
                      </div>
                    </div>
                  </FormField> */}

                  {/* <FormField
                    label="Nature of Requirement"
                    error={errors.natureOfRequirement?.message}
                    className="md:col-span-2 lg:col-span-2"
                  >
                    <div className={boxClass}>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {NATURE_OF_REQUIREMENT.map((item) => (
                          <label
                            key={item}
                            className="flex items-center gap-2 rounded-md border border-gray-200 bg-white px-3 py-2 cursor-pointer hover:bg-gray-50"
                          >
                            <input
                              type="radio"
                              value={item}
                              {...register("natureOfRequirement")}
                              className="h-4 w-4"
                            />
                            <span className="text-sm text-gray-700">
                              {item}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </FormField> */}

                  <FormField
                    label="Nature of Requirement"
                    error={errors.natureOfRequirement?.message}
                    className="md:col-span-2 lg:col-span-2"
                  >
                    <div className={boxClass}>
                      <div className="flex flex-wrap gap-2 mb-2">
                        {selectedNature.length ? (
                          selectedNature.map((tag) => (
                            <span
                              key={tag}
                              className="inline-flex items-center rounded-full border border-gray-200 bg-white px-2 py-0.5 text-xs text-gray-700"
                            >
                              {tag}
                            </span>
                          ))
                        ) : (
                          <span className="text-xs text-gray-400">
                            Select one or more
                          </span>
                        )}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {NATURE_OF_REQUIREMENT.map((item) => {
                          const checked = selectedNature.includes(item);

                          return (
                            <label
                              key={item}
                              className="flex items-center gap-2 rounded-md border border-gray-200 bg-white px-3 py-2 cursor-pointer hover:bg-gray-50"
                            >
                              <input
                                type="checkbox"
                                checked={checked}
                                onChange={() => natureToggle(item)}
                                className="h-4 w-4"
                              />
                              <span className="text-sm text-gray-700">
                                {item}
                              </span>
                            </label>
                          );
                        })}
                      </div>
                    </div>
                  </FormField>
                  {/* Preferred Visit Date */}
                  <Controller
                    control={control}
                    name="preferredVisitDate"
                    render={({ field }) => (
                      <DatePickerField
                        label="Preferred Visit Date"
                        required
                        value={field.value}
                        onChange={(date) => {
                          field.onChange(date);

                          if (isPastDate(date)) {
                            setError("preferredVisitDate", {
                              type: "manual",
                              message:
                                "Preferred Visit Date cannot be in the past",
                            });
                            return;
                          }

                          clearErrors("preferredVisitDate");
                        }}
                        error={errors.preferredVisitDate?.message}
                      />
                    )}
                  />

                  {/* <FormField
                    label="Preferred Visit Time"
                    error={errors.preferredVisitTime?.message}
                  >
                    <input
                      type="time"
                      className={selectClass}
                      {...register("preferredVisitTime")}
                    />
                  </FormField> */}

                  {/* <Controller
                    control={control}
                    name="preferredVisitTime"
                    render={({ field }) => (
                      <TimePickerField
                        label="Preferred Visit Time"
                        value={field.value}
                        onChange={field.onChange}
                        error={errors.preferredVisitTime?.message}
                      />
                    )}
                  /> */}

                  <FormField
                    label="Preferred Visit Time"
                    error={errors.preferredVisitTime?.message}
                  >
                    <select
                      className={selectClass}
                      {...register("preferredVisitTime")}
                    >
                      <option value="">Select preferred time slot</option>

                      {PREFERRED_VISIT_TIME_SLOTS.map((slot) => (
                        <option key={slot.value} value={slot.value}>
                          {slot.label}
                        </option>
                      ))}
                    </select>
                  </FormField>

                  {/* Urgency Level */}
                  <FormField
                    label="Urgency Level"
                    error={errors.urgencyLevel?.message}
                  >
                    <div className="mt-1 flex flex-wrap gap-3">
                      {URGENCY_LEVELS.map((lvl) => (
                        <label
                          key={lvl}
                          className="flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-3 py-2 cursor-pointer hover:bg-gray-100"
                        >
                          <input
                            type="radio"
                            value={lvl}
                            {...register("urgencyLevel")}
                            className="h-4 w-4"
                            defaultChecked={lvl === "Normal"}
                          />
                          <span className="text-sm text-gray-700">{lvl}</span>
                        </label>
                      ))}
                    </div>
                  </FormField>
                </FormSection>
              </AnimatedGroupItem>

              {/* Technical Information */}
              <AnimatedGroupItem>
                <FormSection title="Technical Information">
                  <TextareaField
                    label="Brief Description of Requirement"
                    required
                    placeholder="Describe what you need (required)"
                    rows={5}
                    className="md:col-span-2 lg:col-span-3"
                    {...register("briefDescription")}
                    error={errors.briefDescription?.message}
                  />

                  <TextareaField
                    label="Existing System"
                    placeholder="Optional"
                    rows={4}
                    className="md:col-span-2 lg:col-span-3"
                    {...register("existingSystem")}
                    error={errors.existingSystem?.message}
                  />

                  <TextareaField
                    label="Safety Requirements"
                    placeholder="Optional"
                    rows={4}
                    className="md:col-span-2 lg:col-span-3"
                    {...register("safetyRequirements")}
                    error={errors.safetyRequirements?.message}
                  />

                  <Controller
                    control={control}
                    name="attachFile"
                    render={({ field }) => (
                      <FileUploadField
                        label="Attach Files"
                        value={field.value}
                        onChange={field.onChange}
                        accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                        error={errors.attachFile?.message}
                      />
                    )}
                  />
                </FormSection>
              </AnimatedGroupItem>

              {/* Consent & Submission */}
              <AnimatedGroupItem>
                <FormSection title="Consent & Submission">
                  <FormField
                    label="How did you hear about us?"
                    error={errors.howDidYouHear?.message}
                  >
                    <select
                      className={selectClass}
                      {...register("howDidYouHear")}
                    >
                      <option value="">Select an option (optional)</option>
                      {HEAR_ABOUT.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </FormField>

                  <FormField
                    label="Consent"
                    required
                    error={errors.consent?.message}
                    className="md:col-span-2 lg:col-span-3"
                  >
                    <label className="mt-2 flex items-start gap-3 rounded-xl border border-gray-200 bg-gray-50 p-4 cursor-pointer">
                      <input
                        type="checkbox"
                        {...register("consent")}
                        className="mt-1 h-4 w-4"
                      />
                      <span className="text-sm text-gray-700 leading-relaxed">
                        I agree to be contacted by MAHY Khoory Group.
                      </span>
                    </label>
                  </FormField>

                  <div className="md:col-span-2 lg:col-span-3 flex items-center justify-center gap-3 pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="b-base inline-flex h-11 items-center justify-center rounded-xl px-6 text-sm font-semibold text-white shadow-sm transition-opacity disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {isSubmitting ? "Submitting..." : "Request Site Visit"}
                    </button>
                  </div>
                </FormSection>
              </AnimatedGroupItem>
            </AnimatedGroup>
          </form>
        </div>
      </div>
    </section>
  );
}
