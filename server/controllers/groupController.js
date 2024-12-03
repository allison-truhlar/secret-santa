import Group from "../models/groupModel.js";

export const createGroup = async (req, res) => {
  console.log("from server:", req.body);
  const { name, members } = req.body;

  let receivers = [];

  const assignments = members.map((member, index) => {
    let randIndex = index;
    let receiver = null;
    while (randIndex == index || receivers.includes(receiver)) {
      randIndex = Math.floor(Math.random() * members.length);
      console.log("receiver: ", members[randIndex].name);
      receiver = members[randIndex].name;
    }
    receivers.push(receiver);
    return { giver: member.name, receiver: receiver };
  });

  const year = new Date().getFullYear();
  const matches = [{ year, assignments }];

  try {
    const group = await Group.create({
      name,
      members,
      matches,
    });
    res.status(200).json({ group, msg: "Success! Group added!" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
