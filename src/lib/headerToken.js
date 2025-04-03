const { auth } = require("@/auth");

const headerToken = async () => {
  const session = await auth();
  console.log("headerToken", session?.user?.token);
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${session?.user?.token}`,
  };
};

export default headerToken;
