import React, { useState } from "react";
import type { FormEvent } from "react";
import { Button } from "../ui/button";

const SCAddModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openModal = (): void => setIsOpen(true);
  const closeModal = (): void => setIsOpen(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // Handle your form data here (e.g., send to API)
    closeModal();
  };

  return (
    <>
      {/* Trigger Button */}
      <Button
        id="add"
        className="h-10 w-fit cursor-pointer rounded-sm border border-gray-300 bg-gray-200"
        variant="outline"
        size="sm"
        onClick={openModal}
      >
        <img className="h-8 w-8" src="/gificons/add.gif" alt="Add Button" />{" "}
        <p className="font-semibold">Add</p>
      </Button>

      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          {/* Modal Content */}
          <div className="w-full max-w-3xl rounded-md bg-white p-6 shadow-lg">
            <div className="">
              {/* Modal Header */}
              <div className="mb-4">
                <h2 className="text-lg font-semibold">
                  Add New Single Challan
                </h2>
              </div>
              <div>
                <button>X</button>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit}>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="grid gap-2">
                  <label htmlFor="TAN" className="font-bold">
                    TAN
                  </label>
                  <input
                    type="text"
                    id="TAN"
                    name="TAN"
                    placeholder="TAN"
                    className="rounded border px-3 py-2 focus:outline-none"
                  />
                </div>

                <div className="grid gap-2">
                  <label htmlFor="CIN" className="font-bold">
                    CIN
                  </label>
                  <input
                    type="text"
                    id="CIN"
                    name="CIN"
                    placeholder="CIN"
                    className="rounded border px-3 py-2 focus:outline-none"
                  />
                </div>

                <div className="grid gap-2">
                  <label htmlFor="Amount" className="font-bold">
                    Amount of Challan
                  </label>
                  <input
                    type="text"
                    id="Amount"
                    name="Amount"
                    placeholder="Amount of Challan"
                    className="rounded border px-3 py-2 focus:outline-none"
                  />
                </div>

                <div className="grid gap-2">
                  <label htmlFor="Balance" className="font-bold">
                    Available Balance
                  </label>
                  <input
                    type="text"
                    id="Balance"
                    name="Balance"
                    placeholder="Available Balance"
                    className="rounded border px-3 py-2 focus:outline-none"
                  />
                </div>
              </div>

              {/* Footer */}
              <div className="mt-6 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={closeModal}
                  className="cursor-pointer rounded border px-4 py-2 hover:bg-gray-100"
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="cursor-pointer rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default SCAddModal;
