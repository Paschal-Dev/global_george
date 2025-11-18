"use client";
import { useSnackbar } from "notistack";
import React, { useEffect, useState } from "react";

const initialFormData = {
  fullName: "",
  dob: "",
  gender: "",
  nationality: "",
  contact: "",
  email: "",
  address: "",
  investmentType: "",
  amount: "",
  investmentDate: "",
  idType: "",
  idNumber: "",
  nextOfKin: {
    fullName: "",
    dob: "",
    gender: "",
    nationality: "",
    contact: "",
    email: "",
    address: "",
    relationshipToInvestor: "",
    bankName: "",
    accountNumber: "",
    idType: "",
    idNumber: "",
  },
};

export default function InvestmentForm({
  open,
  close,
}: {
  open: boolean;
  close: () => void;
}) {
  const { enqueueSnackbar } = useSnackbar();
  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if ((event.target as HTMLElement).id === "backdrop") {
      close();
    }
  };

  // Lock/unlock body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Clean up on unmount
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [open]);

  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isPolicyChecked, setIsPolicyChecked] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNextOfKinChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      nextOfKin: {
        ...prev.nextOfKin,
        [name]: value,
      },
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/investment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        enqueueSnackbar("Thank you for your interest in investing with us!", {
          variant: "success",
        });
        setFormData(initialFormData);
        close();
      } else {
        let errorMessage = "Failed to send investment interest.";
        const text = await res.text();
        if (text) {
          const errorData = JSON.parse(text);
          errorMessage = errorData.message || errorMessage;
        }
        enqueueSnackbar(errorMessage, {
          variant: "error",
        });
      }
    } catch {
      enqueueSnackbar("An unexpected error occurred. Try again later.", {
        variant: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  /* eslint-disable @typescript-eslint/no-unused-vars */
  const {
    investmentType,
    amount,
    investmentDate,
    nextOfKin,
    idType,
    idNumber,
    ...others
  } = formData;
  /* eslint-enable @typescript-eslint/no-unused-vars */

  const isFormValid = Object.values(others).every((val) => val.trim() !== "");

  return (
    <div
      id="backdrop"
      onClick={handleBackdropClick}
      className={`fixed top-0 left-0 z-50 flex h-screen w-full items-center justify-center bg-black/40 transition-transform duration-500 ease-in-out ${
        open ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="z-50 flex max-h-[90%] w-[90%] flex-col gap-8 overflow-y-auto rounded-3xl bg-white text-left shadow-xl max-md:py-2 md:flex-row md:p-6 lg:w-[80%] lg:p-10 xl:max-w-5xl">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-4xl rounded-2xl bg-white px-4 py-3"
        >
          <p className="text-primary text-xs font-bold md:text-sm">
            Secure Your Spot
          </p>
          <h2 className="text-dark-gray mt-2 text-lg font-bold md:text-2xl">
            Register Your Investment Interest
          </h2>

          <div className="my-6 rounded-2xl border-[0.5px] border-gray-300 p-4 text-sm md:text-base">
            <div className="w-full">
              <div className="grid grid-cols-1 gap-x-6 gap-y-4 text-left md:grid-cols-2">
                <div>
                  <label className="text-dark-gray mb-1 block text-sm font-medium">
                    Full Name
                  </label>
                  <input
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="focus:ring-primary-light text-dark-gray placeholder:text-dark-gray w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-dark-gray mb-1 block text-sm font-medium">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    className="focus:ring-primary-light text-dark-gray placeholder:text-dark-gray w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-dark-gray mb-1 block text-sm font-medium">
                    Gender
                  </label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="focus:ring-primary-light text-dark-gray placeholder:text-dark-gray w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:outline-none"
                  >
                    <option value="">Select</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>

                <div>
                  <label className="text-dark-gray mb-1 block text-sm font-medium">
                    Nationality
                  </label>
                  <input
                    name="nationality"
                    value={formData.nationality}
                    onChange={handleChange}
                    className="focus:ring-primary-light text-dark-gray placeholder:text-dark-gray w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-dark-gray mb-1 block text-sm font-medium">
                    Phone Number
                  </label>
                  <input
                    name="contact"
                    value={formData.contact}
                    onChange={(e) => {
                      const value = e.target.value;
                      const numericValue = value.replace(/(?!^\+)\D/g, "");
                      setFormData((prev) => ({
                        ...prev,
                        contact: numericValue,
                      }));
                    }}
                    className="focus:ring-primary-light text-dark-gray placeholder:text-dark-gray w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-dark-gray mb-1 block text-sm font-medium">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="focus:ring-primary-light text-dark-gray placeholder:text-dark-gray w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-dark-gray mb-1 block text-sm font-medium">
                    Identification type (e.g Passport, ID)
                  </label>
                  <input
                    name="idType"
                    value={formData.idType}
                    onChange={handleChange}
                    className="focus:ring-primary-light text-dark-gray placeholder:text-dark-gray w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-dark-gray mb-1 block text-sm font-medium">
                    Identification Number
                  </label>
                  <input
                    name="idNumber"
                    value={formData.idNumber}
                    onChange={handleChange}
                    className="focus:ring-primary-light text-dark-gray placeholder:text-dark-gray w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:outline-none"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="text-dark-gray mb-1 block text-sm font-medium">
                    Address
                  </label>
                  <input
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="focus:ring-primary-light text-dark-gray placeholder:text-dark-gray w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-dark-gray mb-1 block text-sm font-medium">
                    Investment Type
                  </label>
                  <input
                    name="investmentType"
                    value={formData.investmentType}
                    onChange={handleChange}
                    className="focus:ring-primary-light text-dark-gray placeholder:text-dark-gray w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:outline-none"
                  />
                </div>

                <div className="text-dark-gray relative">
                  <label className="mb-1 block text-sm font-medium">
                    Amount to Invest
                  </label>
                  <input
                    type="text"
                    name="amount"
                    value={formData.amount}
                    onChange={(e) => {
                      const value = e.target.value;
                      const numericValue = value.replace(/\D/g, ""); // removes non-digits
                      setFormData((prev) => ({
                        ...prev,
                        amount: numericValue,
                      }));
                    }}
                    className="focus:ring-primary-light text-dark-gray placeholder:text-dark-gray w-full rounded-lg border border-gray-300 px-3 py-2 pl-8 focus:ring-2 focus:outline-none"
                  />
                  <span className="absolute top-[33px] left-3">₦</span>
                </div>

                <div className="md:col-span-2">
                  <label className="text-dark-gray mb-1 block text-sm font-medium">
                    Date of Investment
                  </label>
                  <input
                    type="date"
                    name="investmentDate"
                    value={formData.investmentDate}
                    onChange={handleChange}
                    className="focus:ring-primary-light text-dark-gray placeholder:text-dark-gray w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:outline-none"
                  />
                </div>
              </div>

              <div className="col-span-2">
                <p className="text-dark-gray mt-6 font-semibold uppercase">
                  Next of kin information
                </p>

                <div className="mt-6 mb-3 grid gap-x-6 gap-y-4 md:grid-cols-2">
                  <div>
                    <label className="text-dark-gray mb-1 block text-sm font-medium">
                      Full Name
                    </label>
                    <input
                      name="fullName"
                      value={formData.nextOfKin.fullName}
                      onChange={handleNextOfKinChange}
                      className="focus:ring-primary-light text-dark-gray placeholder:text-dark-gray w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-dark-gray mb-1 block text-sm font-medium">
                      Date of Birth
                    </label>
                    <input
                      type="date"
                      name="dob"
                      value={formData.nextOfKin.dob}
                      onChange={handleNextOfKinChange}
                      className="focus:ring-primary-light text-dark-gray placeholder:text-dark-gray w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-dark-gray mb-1 block text-sm font-medium">
                      Gender
                    </label>
                    <select
                      name="gender"
                      value={formData.nextOfKin.gender}
                      onChange={handleNextOfKinChange}
                      className="focus:ring-primary-light text-dark-gray placeholder:text-dark-gray w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:outline-none"
                    >
                      <option value="">Select</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-dark-gray mb-1 block text-sm font-medium">
                      Nationality
                    </label>
                    <input
                      name="nationality"
                      value={formData.nextOfKin.nationality}
                      onChange={handleNextOfKinChange}
                      className="focus:ring-primary-light text-dark-gray placeholder:text-dark-gray w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-dark-gray mb-1 block text-sm font-medium">
                      Phone Number
                    </label>
                    <input
                      name="contact"
                      value={formData.nextOfKin.contact}
                      onChange={(e) => {
                        const value = e.target.value;
                        const numericValue = value.replace(/(?!^\+)\D/g, "");
                        setFormData((prev) => ({
                          ...prev,
                          nextOfKin: {
                            ...prev.nextOfKin,
                            contact: numericValue,
                          },
                        }));
                      }}
                      className="focus:ring-primary-light text-dark-gray placeholder:text-dark-gray w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-dark-gray mb-1 block text-sm font-medium">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.nextOfKin.email}
                      onChange={handleNextOfKinChange}
                      className="focus:ring-primary-light text-dark-gray placeholder:text-dark-gray w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-dark-gray mb-1 block text-sm font-medium">
                      Identification type (e.g Passport, ID)
                    </label>
                    <input
                      name="idType"
                      value={formData.nextOfKin.idType}
                      onChange={handleNextOfKinChange}
                      className="focus:ring-primary-light text-dark-gray placeholder:text-dark-gray w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-dark-gray mb-1 block text-sm font-medium">
                      Identification Number
                    </label>
                    <input
                      name="idNumber"
                      value={formData.nextOfKin.idNumber}
                      onChange={handleNextOfKinChange}
                      className="focus:ring-primary-light text-dark-gray placeholder:text-dark-gray w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-dark-gray mb-1 block text-sm font-medium">
                      Address
                    </label>
                    <input
                      name="address"
                      value={formData.nextOfKin.address}
                      onChange={handleNextOfKinChange}
                      className="focus:ring-primary-light text-dark-gray placeholder:text-dark-gray w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-dark-gray mb-1 block text-sm font-medium">
                      Relationship to investor
                    </label>
                    <input
                      name="relationshipToInvestor"
                      value={formData.nextOfKin.relationshipToInvestor}
                      onChange={handleNextOfKinChange}
                      className="focus:ring-primary-light text-dark-gray placeholder:text-dark-gray w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-dark-gray mb-1 block text-sm font-medium">
                      Bank name
                    </label>
                    <input
                      name="bankName"
                      value={formData.nextOfKin.bankName}
                      onChange={handleNextOfKinChange}
                      className="focus:ring-primary-light text-dark-gray placeholder:text-dark-gray w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:outline-none"
                    />
                  </div>

                  <div className="text-dark-gray relative">
                    <label className="mb-1 block text-sm font-medium">
                      Account number
                    </label>
                    <input
                      type="text"
                      name="accountNumber"
                      value={formData.nextOfKin.accountNumber}
                      onChange={(e) => {
                        const value = e.target.value;
                        const numericValue = value.replace(/\D/g, ""); // removes non-digits
                        setFormData((prev) => ({
                          ...prev,
                          nextOfKin: {
                            ...prev.nextOfKin,
                            accountNumber: numericValue,
                          },
                        }));
                      }}
                      className="focus:ring-primary-light text-dark-gray placeholder:text-dark-gray w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex space-x-2">
              <input
                type="checkbox"
                id="liquidation-policy"
                checked={isPolicyChecked}
                onChange={(e) => setIsPolicyChecked(e.target.checked)}
                className="accent-primary"
                style={{ transform: "scale(1.2)", marginRight: "8px" }}
              />
              <label className="text-dark-gray font-medium">
                I agree to the{" "}
                <a
                  href="/liquidation-policy"
                  target="_blank"
                  className="text-primary cursor-pointer font-semibold hover:underline"
                >
                  investment liquidation policy
                </a>
              </label>
            </div>

            <div className="text-end">
              <button
                disabled={!isFormValid || isSubmitting || !isPolicyChecked}
                type="submit"
                className="bg-primary mt-8 w-40 cursor-pointer self-end rounded-lg px-6 py-3 font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
