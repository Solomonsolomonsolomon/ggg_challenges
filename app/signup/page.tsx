"use client";

import { useChallenge } from "@/context/challengeContext";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import signupForms from "@/data/signupform";

const SignupPage = () => {
  const { challengeId } = useChallenge();
  const router = useRouter();
  const formConfig = signupForms[challengeId] || signupForms.default;

  // Redirect to home if no challenge is selected
  useEffect(() => {
    if (challengeId === "default") {
      router.push("/");
    }
  }, [challengeId, router]);

  const initialFormState = formConfig.fields.reduce(
    (acc, field) => ({ ...acc, [field.name]: "" }),
    {}
  );

  const [formData, setFormData] = useState<{ [key: string]: string }>(
    initialFormState
  );
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    formConfig.fields.forEach((field) => {
      const value = formData[field.name].trim();
      if (field.required && !value) {
        newErrors[field.name] = "This field is required";
      } else if (field.validate) {
        const valid = field.validate(value);
        if (valid !== true) newErrors[field.name] = valid as string;
      }
    });
    return newErrors;
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  const validationErrors = validate();
  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors);
    return;
  }

  setLoading(true);
  try {
    const res = await fetch("/api/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ challengeId, formData }),
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      throw new Error(errorData.message || "Submission failed. Try again.");
    }

    router.push("/thank-you");
  } catch (err) {
    console.error(err);
    alert((err as Error).message);
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="max-w-3xl mx-auto px-4 py-20 text-black">
      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="mb-6 text-[#800000] hover:text-[#9b0000] font-thin flex items-center gap-2"
      >
        &larr; Back
      </button>

      <h1 className="text-3xl md:text-4xl font-thin text-[#800000] mb-6 text-center">
        {formConfig.title}
      </h1>
      <p className="text-gray-700 mb-10 text-center font-thin">
        {formConfig.subtitle}
      </p>

      <form onSubmit={handleSubmit} className="grid gap-6">
        {formConfig.fields.map((field) => (
          <div key={field.name} className="flex flex-col">
            <label className="mb-2 font-thin text-gray-900">
              {field.label}{" "}
              {field.required && <span className="text-red-500">*</span>}
            </label>

            {field.options ? (
              <select
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                className={`px-4 py-2 border ${
                  errors[field.name] ? "border-red-500" : "border-gray-300"
                } rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-[#800000]`}
              >
                <option value="">Select a state</option>
                {field.options.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            ) : (
              <input
                type={field.type || "text"}
                name={field.name}
                placeholder={field.placeholder || ""}
                value={formData[field.name]}
                onChange={handleChange}
                className={`px-4 py-2 border ${
                  errors[field.name] ? "border-red-500" : "border-gray-300"
                } rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-[#800000]`}
              />
            )}

            {errors[field.name] && (
              <span className="text-red-500 text-sm mt-1">
                {errors[field.name]}
              </span>
            )}
          </div>
        ))}

        <button
          type="submit"
          disabled={loading}
          className="bg-[#800000] hover:bg-[#9b0000] text-white px-6 py-3 font-thin rounded shadow transition-all disabled:opacity-50"
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default SignupPage;
