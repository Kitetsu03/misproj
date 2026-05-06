import { generateTempPassword } from "../../utils/generatePassword.js";
import { sendTemporaryPassword } from "../../utils/sendEmail.js";
import User from "../account/user.model.js";
import Member from "./member.model.js";

const createMember = async (req, res) => {
  try {
    const existingUser = await User.findOne({
      username: req.body.email,
    });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists.",
      });
    }

    const member = await Member.create(req.body);

    const tempPassword = generateTempPassword();

    await User.create({
      member_id: member._id,
      username: req.body.email,
      passkey: tempPassword,
      role: "member",
      mustChangePassword: true,
    });

    let emailStatus = "sent";

    try {
      await sendTemporaryPassword(req.body.email, tempPassword);
    } catch (emailError) {
      console.error("Email failed:", emailError.message);
      emailStatus = "failed";
    }

    res.status(201).json({
      message: `Member added successfully. Email ${emailStatus}.`,
      member,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to create member.",
      error: error.message,
    });
  }
};

const getMembers = async (req, res) => {
  try {
    const members = await Member.find();
    res.json(members);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getMemberById = async (req, res) => {
  try {
    const member = await Member.findById(req.params.id);
    res.json(member);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateMember = async (req, res) => {
  try {
    const updated = await Member.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteMember = async (req, res) => {
  try {
    const member = await Member.findByIdAndDelete(req.params.id);

    if (member) {
      await User.findOneAndDelete({ member_id: member._id });
    }

    res.json({ message: "Member and user deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export { createMember, getMembers, getMemberById, updateMember, deleteMember };
