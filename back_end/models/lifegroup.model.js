const lifeGroupSchema = new mongoose.Schema({
  lifegroup_name: String,

  leader_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Member",
  },
});

const LifeGroup = mongoose.model("LifeGroup", lifeGroupSchema);

// junction
const lifeGroupMemberSchema = new mongoose.Schema({
  lifegroup_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "LifeGroup",
  },
  member_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Member",
  },
});

const LifeGroupMember = mongoose.model(
  "LifeGroupMember",
  lifeGroupMemberSchema,
);
export default { LifeGroupMember, LifeGroup };
