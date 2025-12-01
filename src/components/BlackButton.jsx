import { useState } from "react";
import CreateNewUser from "./CreateNewUser";

function BlackButton({ val }) {
  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <button
        className="bg-black text-white px-5 py-2 rounded-lg shadow-md hover:bg-gray-800"
        onClick={handleClick}
      >
        {val}
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* backdrop */}
          <div
            className="absolute inset-0 bg-black opacity-50"
            onClick={handleClose}
          />

          {/* modal */}
          <div className="relative bg-white rounded-lg shadow-lg max-w-lg w-full mx-4 p-6">
            <CreateNewUser onClose={handleClose} />
            <div className="mt-4 text-right">
              <button
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                onClick={handleClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default BlackButton;
