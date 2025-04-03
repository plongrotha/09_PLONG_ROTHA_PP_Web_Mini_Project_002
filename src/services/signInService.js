export const signInService = async (user) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_AUTH_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  const signInUser = await res.json();
  return signInUser;
};
