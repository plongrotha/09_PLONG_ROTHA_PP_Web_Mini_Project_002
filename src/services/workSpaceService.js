export const getAllWorkspaces = async () => {
  const res = await fetch(`${[process.env.NEXT_PUBLIC_AUTH_URL]}/workspaces`, {
    next: { tags: ["workspaces"] },
  });
  const workspaces = await res.json();
  return workspaces;
};
