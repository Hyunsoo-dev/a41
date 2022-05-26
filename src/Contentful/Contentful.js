const contentful = require("contentful");

const client = contentful.createClient({
  space: process.env.REACT_APP_SPACE_ID,
  accessToken: process.env.REACT_APP_ACCESS_TOKEN,
});

export const getAllMemberInfo = async () => {
  const teams = await client.getEntries({ content_type: "team" });
  return teams;
};

// 가지고 오려는 item의 sys.id === entryId
export const getMemberInfo = async (entryId) => {
  const member = await client.getEntry(entryId, { content_type: "team" });
  // console.log("member :", member);
  return member;
};

export const getAllPortfolioInfo = async () => {
  const portfolio = await client.getEntries({ content_type: "portfolio" });
  // console.log(portfolio);
  return portfolio;
};

// 가지고 오려는 item의 sys.id === id in portfolio
export const getPortfolioInfo = async (id) => {
  const detail = await client.getEntry(id, { content_type: "portfolio" });
  // console.log("detail", detail);
  return detail;
};

// Get Stake
export const getAllStake = async () => {
  const stake = await client.getEntries({ content_type: "staking" });
  // console.log(stake);
  return stake;
};

export const getContents = async () => {
  const contents = await client.getEntries({ content_type: "content" });
  // console.log("contents :", contents);
  return contents;
};

export const getContent = async (entryId) => {
  const content = await client.getEntry(entryId, { content_type: "content" });
  return content;
};
