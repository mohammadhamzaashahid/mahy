import { z } from "zod";
import {
  BUILDING_TYPES,
  BUSINESS_IMPACTS,
  CAR_BRANDS,
  CONTRACT_TYPES,
  FUEL_TYPES,
  PREFERRED_VISITS,
  PRODUCT_CATEGORIES,
  URGENCY_LEVELS,
  VEHICLE_TYPES,
} from "@/lib/serviceRequestFormConstants";

const MAX_PHONE_DIGITS = 15;
const phoneDigitsRegex = /^\d+$/;

const emptyToUndefined = (value) =>
  typeof value === "string" && value.trim() === "" ? undefined : value;

const optionalTrimmedString = (max, message) =>
  z.preprocess(
    emptyToUndefined,
    z.string().trim().max(max, message).optional(),
  );

const requiredTrimmedString = (fieldName, max = 100) =>
  z
    .string()
    .trim()
    .min(1, `${fieldName} required`)
    .max(max, `${fieldName} is too long`);

const optionValues = (options) => new Set(options.map(({ value }) => value));

const requiredSelect = (options, message) => {
  const values = optionValues(options);

  return z.preprocess(
    (value) => (value === undefined || value === null ? "" : value),
    z
      .string()
      .trim()
      .min(1, message)
      .refine((value) => values.has(value), message),
  );
};

const optionalSelect = (options, message) => {
  const values = optionValues(options);

  return z.preprocess(
    emptyToUndefined,
    z
      .string()
      .trim()
      .refine((value) => values.has(value), message)
      .optional(),
  );
};

const optionalEmail = z.preprocess(
  emptyToUndefined,
  z
    .string()
    .trim()
    .email("Enter a valid email")
    .max(100, "Email is too long")
    .optional(),
);

const mobileNumber = z
  .string()
  .trim()
  .min(1, "Mobile number required")
  .refine((value) => phoneDigitsRegex.test(value), {
    message: "Mobile number can only contain digits",
  })
  .refine(
    (value) => value.length >= 7 && value.length <= MAX_PHONE_DIGITS,
    "Mobile number must contain 7 to 15 digits",
  );

const optionalNonNegativeNumber = (fieldName, max) =>
  z
    .number({
      error: `${fieldName} must be a number`,
    })
    .min(0, `${fieldName} cannot be negative`)
    .max(max, `${fieldName} is too high`)
    .optional();

const isPastDate = (date) => {
  if (!(date instanceof Date)) return false;

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const selected = new Date(date);
  selected.setHours(0, 0, 0, 0);

  return selected < today;
};

const isFutureDate = (date) => {
  if (!(date instanceof Date)) return false;

  const today = new Date();
  today.setHours(23, 59, 59, 999);

  return date > today;
};

const optionalFutureOrTodayDate = (message) =>
  z
    .date()
    .optional()
    .refine((date) => !date || !isPastDate(date), { message });

const optionalPastOrTodayDate = (message) =>
  z
    .date()
    .optional()
    .refine((date) => !date || !isFutureDate(date), { message });

export const serviceRequestFormSchema = z
  .object({
    customerType: z.enum(["organization", "person"]),
    contactPerson: optionalTrimmedString(80, "Contact person is too long"),
    companyName: optionalTrimmedString(100, "Company name is too long"),
    mobileCountryCode: z.string().trim().min(1, "Country code required"),
    mobileNumber,
    email: optionalEmail,

    contractType: optionalSelect(CONTRACT_TYPES, "Select a valid contract type"),
    contractExpiry: optionalFutureOrTodayDate(
      "Contract expiry cannot be in the past",
    ),

    siteName: requiredTrimmedString("Site name", 100),
    siteAddress: requiredTrimmedString("Site address", 500),
    locationPin: optionalTrimmedString(300, "Location pin is too long"),
    buildingType: requiredSelect(BUILDING_TYPES, "Building type required"),

    productCategory: requiredSelect(
      PRODUCT_CATEGORIES,
      "Product category required",
    ),
    brand: requiredTrimmedString("Brand", 80),
    model: optionalTrimmedString(80, "Model is too long"),
    installationDate: optionalPastOrTodayDate(
      "Installation date cannot be in the future",
    ),
    warrantyStatus: z.boolean().optional(),
    assetTag: optionalTrimmedString(80, "Asset tag is too long"),


    pumpSymptoms: z.string().optional(),
    pumpObservedSigns: z.string().optional(),
    suctionPressure: optionalNonNegativeNumber("Suction pressure", 1000),
    dischargePressure: optionalNonNegativeNumber("Discharge pressure", 1000),
    flowRate: optionalNonNegativeNumber("Flow rate", 100000),
    voltageAvailable: optionalNonNegativeNumber("Voltage available", 1000),
    phase: z.string().optional(),
    pumpRecentService: z.boolean().optional(),
    pumpPowerIssue: z.boolean().optional(),
    pumpSuspectedArea: z.string().optional(),

    acSymptoms: z.string().optional(),
    acErrorCode: optionalTrimmedString(60, "Error code is too long"),
    compressorRunning: z.boolean().optional(),
    fanRunning: z.boolean().optional(),
    airflowWeak: z.boolean().optional(),
    roomTemp: optionalNonNegativeNumber("Room temperature", 80),
    setTemp: optionalNonNegativeNumber("Set temperature", 80),
    acFaultArea: z.string().optional(),

    vehicleType: z.string().optional(),
    plateNumber: optionalTrimmedString(20, "Plate number is too long"),
    carBrand: z.string().optional(),
    carModel: optionalTrimmedString(80, "Model is too long"),
    carYear: z
      .number()
      .int("Year must be a whole number")
      .min(1900, "Enter a valid year")
      .max(new Date().getFullYear() + 1, "Year cannot be that far in the future")
      .optional(),
    mileage: optionalNonNegativeNumber("Mileage", 2000000),
    fuelType: z.string().optional(),
    transmission: z.string().optional(),
    vinNumber: z.preprocess(
      emptyToUndefined,
      z
        .string()
        .trim()
        .length(17, "VIN Number must be 17 characters")
        .regex(/^[A-HJ-NPR-Z0-9]+$/i, "Enter a valid VIN Number")
        .optional(),
    ),

    carSymptoms: z.string().optional(),
    carObservedSigns: z.string().optional(),

    engineStarts: z.boolean().optional(),
    engineTemperature: optionalNonNegativeNumber("Engine temperature", 200),
    batteryVoltage: optionalNonNegativeNumber("Battery voltage", 100),
    fuelLevel: z
      .number({
        error: "Fuel level must be a number",
      })
      .min(0, "Fuel level cannot be below 0")
      .max(100, "Fuel level cannot be above 100")
      .optional(),
    carRecentService: z.boolean().optional(),
    accidentHistory: z.boolean().optional(),

    noiseLocation: z.string().optional(),
    performanceIssues: z.string().optional(),
    carSuspectedArea: z.string().optional(),

    carErrorCode: optionalTrimmedString(60, "Error code is too long"),
    warningLights: z.string().optional(),

    problemDescription: optionalTrimmedString(
      1500,
      "Problem description is too long",
    ),

    uploadPhotos: z.any().optional(),
    uploadVideo: z.any().optional(),
    voiceNote: z.any().optional(),
    errorScreenshot: z.any().optional(),

    urgency: requiredSelect(URGENCY_LEVELS, "Urgency required"),
    businessImpact: requiredSelect(BUSINESS_IMPACTS, "Business Impact required"),
    preferredVisit: requiredSelect(PREFERRED_VISITS, "Preferred Visit required"),
    additionalNotes: optionalTrimmedString(1000, "Additional notes are too long"),
  })
  .superRefine((data, ctx) => {
    const isPerson = data.customerType === "person";
    const isOrganization = data.customerType === "organization";
    const isPump = data.productCategory === "pump";
    const isAC = data.productCategory === "ac";
    const isCar = data.productCategory === "car";
    const isOther = !isPump && !isAC && !isCar;

    // Contact Person required for Person type
    if (isPerson) {
      if (!data.contactPerson || data.contactPerson.trim().length < 1) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Contact person is required",
          path: ["contactPerson"],
        });
      }
    }

    // Company Name required for Organization type
    if (isOrganization) {
      if (!data.companyName || data.companyName.trim().length < 1) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Company name is required",
          path: ["companyName"],
        });
      }
    }

    // Car-specific required fields
    if (isCar) {
      if (!data.vehicleType) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Vehicle type is required",
          path: ["vehicleType"],
        });
      } else if (!optionValues(VEHICLE_TYPES).has(data.vehicleType)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Select a valid vehicle type",
          path: ["vehicleType"],
        });
      }
      if (!data.plateNumber) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Plate number is required",
          path: ["plateNumber"],
        });
      }
      if (!data.carBrand) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Car brand is required",
          path: ["carBrand"],
        });
      } else if (!optionValues(CAR_BRANDS).has(data.carBrand)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Select a valid car brand",
          path: ["carBrand"],
        });
      }
      if (!data.carModel) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Model is required",
          path: ["carModel"],
        });
      }
      if (!data.carYear) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Year is required",
          path: ["carYear"],
        });
      }
      if (!data.fuelType) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Fuel type is required",
          path: ["fuelType"],
        });
      } else if (!optionValues(FUEL_TYPES).has(data.fuelType)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Select a valid fuel type",
          path: ["fuelType"],
        });
      }
    }

    // Problem Description required for non-Pump, non-AC, non-Car products
    if ((isOther || isCar)) {
      if (!data.problemDescription || data.problemDescription.trim().length < 1) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Problem description is required",
          path: ["problemDescription"],
        });
      }
    }
  });
