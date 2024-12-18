import { registerUser } from "../actions/auth";

const Page = () => {
  async function handleSubmit(formData: FormData) {
    "use server";
    try {
      const message = await registerUser(formData);
      console.log(message);
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        console.error("An unknown error occurred");
      }
    }
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form
        action={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-96"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
        <input
          name="username"
          placeholder="Username"
          className="w-full p-2 mb-4 border rounded"
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
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
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Page;
