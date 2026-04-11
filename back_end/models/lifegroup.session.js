const lifeGroupSessionSchema = new mongoose.Schema(
  {
    lifegroup_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "LifeGroup",
    },

    session_date: {
      type: Date,
      required: true,
    },

    created_by: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true },
);

const LifeGroupSession = mongoose.model(
  "LifeGroupSession",
  lifeGroupSessionSchema,
);
export default LifeGroupSession;
