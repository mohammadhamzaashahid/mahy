"use client";

import React, { useState } from "react";
import { FiUploadCloud, FiFileText } from "react-icons/fi";

export default function FileUploadField({ label, register, error }) {
  const [fileName, setFileName] = useState(null);

  return (
    <div>
      <label className="mb-1 block text-sm font-medium text-slate-700">
        {label}
      </label>

      <label
        className="
          relative
          flex
          cursor-pointer
          items-center
          justify-center
          gap-4
          rounded-lg
          border
          border-dashed
          border-slate-300
          bg-slate-50
          px-6
          py-6
          text-center
          transition
          hover:border-[#3F3C8F]
          hover:bg-slate-100
        "
      >
        <input
          type="file"
          className="absolute inset-0 cursor-pointer opacity-0"
          {...register("attachment")}
          onChange={(e) => {
            const file = e.target.files?.[0];
            setFileName(file ? file.name : null);
          }}
        />

        {!fileName ? (
          <>
            <FiUploadCloud className="text-2xl text-slate-500" />
            <div className="text-sm text-slate-600">
              <span className="font-medium text-[#3F3C8F]">
                Click to upload
              </span>{" "}
              or drag & drop
              <div className="mt-1 text-xs text-slate-500">
                PDF, JPG, PNG (max 5MB)
              </div>
            </div>
          </>
        ) : (
          <>
            <FiFileText className="text-xl text-[#3F3C8F]" />
            <div className="text-sm font-medium text-slate-700">
              {fileName}
            </div>
          </>
        )}
      </label>

      <div className="min-h-[18px] mt-1">
        {error && <p className="text-xs text-red-500">{error.message}</p>}
      </div>
    </div>
  );
}
