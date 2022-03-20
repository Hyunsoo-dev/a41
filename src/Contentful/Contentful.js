const contentful = require("contentful");

const client = contentful.createClient({
  // space: "wx3giiipzhrz",
  // accessToken: "lUlFHBlFhQmeCT_AjNIm51f422G0xb-pVA7XxeV9fNQ",
  space: process.env.REACT_APP_SPACE_ID,
  accessToken: process.env.REACT_APP_ACCESS_TOKEN,
});

export const getAllMemberInfo = async () => {
  const teams = await client.getEntries({ content_type: "team" });
  console.log("entires :", teams);
  return teams;
};

// 가지고 오려는 item의 sys.id === entryId
export const getMemberInfo = async (entryId) => {
  const member = await client.getEntry(entryId);
  console.log("member :", member);
  return member;
};
