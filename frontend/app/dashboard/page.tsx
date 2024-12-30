import Recommendations from "@/components/recommendation/Recommendations";

const Dashboard = () => {
  const userId = "1";
  const topic = "math";

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-6">
          Dashboard
        </h1>
        <div className="border-t border-gray-200 pt-4">
          <h2 className="text-xl font-semibold text-gray-600 mb-4">
            Your Recommendations
          </h2>
          <Recommendations userId={userId} topic={topic} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
