"use server";

export async function registerUser(formData: FormData) {
  const username = formData.get("username");
  const email = formData.get("email");
  const password = formData.get("password");

  const response = await fetch("http://127.0.0.1:8000/api/users/register/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username,
      email,
      password,
    }),
  });

  if (!response.ok) {
    throw new Error("Registration failed. Please try again.");
  }
  return "Registration successful";
}
