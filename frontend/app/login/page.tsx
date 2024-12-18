import { loginUser } from "../actions/auth";

const page = () => {
  async function handleSubmit(formData: FormData) {
    "use server";
    try {
      const token = await loginUser(formData);
      console.log("Access token:", token.access);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
      console.error("An unknown error occurred");
    }
  }
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form
        action={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-96"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <input
          name="username"
          placeholder="Username"
          className="w-full p-2 mb-4 border rounded"
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-4 border rounded"
          required
        />
        <button
          type="submit"
          className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default page;
