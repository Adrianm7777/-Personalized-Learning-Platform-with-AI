"use server";

export async function registerUser(formData: FormData): Promise<string> {
  const username = formData.get("username");
  const email = formData.get("email");
  const password = formData.get("password");
  if (!username || !email || !password) {
    throw new Error("All fields are required.");
  }

  const response = await fetch("http://127.0.0.1:8000/api/users/register/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, email, password }),
  });

  if (!response.ok) {
    throw new Error("Registration failed. Please try again.");
  }

  return "Registration successful";
}

export async function loginUser(formData: FormData) {
  const username = formData.get("username");
  const password = formData.get("password");

  const response = await fetch("http://127.0.0.1:8000/api/token/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });

  if (!response.ok) {
    throw new Error("Invalid credentials");
  }
  const data = response.json();
  return data;
}
