import Group from "../models/groupModel.js";

export const createGroup = async (req, res) => {
  console.log("from server:", req.body);
  const { name, members } = req.body;
  try {
    const group = await Group.create({
      name,
      members,
    });
    res.status(200).json({ group, msg: "Success! Group added!" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
