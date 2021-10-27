import { orgMembers } from "../../utils/Const/teamMembers";

// Get Routes
export const getRoutes = (Routs) => {
  return Routs;
};

// Get Org Member

export const getMember = (id) => {
  let member = orgMembers.filter((e) => e.id === id);
  return member[0];
};
