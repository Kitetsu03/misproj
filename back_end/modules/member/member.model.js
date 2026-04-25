import mongoose from "mongoose";

const memberSchema = new mongoose.Schema(
  {
    // personal info
    first_name: String,
    last_name: String,
    middle_name: String,
    suffix: String,
    birth_date: Date,
    sex: {
      type: String,
      enum: ["Female", "Male"],
    },

    // contact
    contact_no: String,
    email: String,

    // address
    address: {
      province: String,
      city: String,
      barangay: String,
      sitio: String,
      house_no: String,
      postal_code: String,
    },

    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },

    is_enabled: {
      type: Boolean,
      default: false,
    },

    created_by: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    updated_by: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true },
);

const Member = mongoose.model("Member", memberSchema);
export default Member;
