const userSchema = new mongoose.Schema(
  {
    member_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Member",
    },

    username: {
      type: String,
      unique: true,
    },

    passkey: String,

    role: {
      type: String,
      enum: ["admin", "gatekeeper", "member"],
      required: true,
    },

    is_enabled: {
      type: Boolean,
      default: true,
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

const User = mongoose.model("User", userSchema);
export default User;
