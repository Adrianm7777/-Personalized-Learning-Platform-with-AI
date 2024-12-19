import React from "react";

const Home = () => (
  <div className="container mx-auto px-4 py-8">
    <section className="text-center py-12 bg-blue-600 text-white rounded-lg shadow-lg mb-12">
      <h1 className="text-4xl font-bold mb-4">
        Welcome to Your Personalized Learning Platform
      </h1>
      <p className="text-xl mb-6">
        Dive into interactive lessons tailored to your needs. Learn at your own
        pace and track your progress.
      </p>
      <a
        href="#learn-more"
        className="px-6 py-3 bg-yellow-500 text-black rounded-full text-lg font-semibold hover:bg-yellow-600 transition"
      >
        Start Learning Now
      </a>
    </section>

    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
      <div className="text-center bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-4">Interactive Lessons</h3>
        <p>
          Our platform adapts to your progress, offering lessons that evolve
          based on your skill level.
        </p>
      </div>
      <div className="text-center bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-4">Real-Time Feedback</h3>
        <p>
          Receive immediate feedback on your answers and suggestions for
          improvement to accelerate your learning.
        </p>
      </div>
      <div className="text-center bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-4">Track Your Progress</h3>
        <p>
          Visualize your learning journey with progress tracking tools that help
          you stay motivated.
        </p>
      </div>
    </section>

    <section className="bg-gray-100 py-12 rounded-lg shadow-lg mb-12">
      <h2 className="text-3xl text-center font-bold mb-8">Quick Stats</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-2xl font-semibold">Total Learners</h4>
          <p className="text-xl text-blue-600 mt-2">12,340</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-2xl font-semibold">Courses Available</h4>
          <p className="text-xl text-blue-600 mt-2">45+</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-2xl font-semibold">Active Users</h4>
          <p className="text-xl text-blue-600 mt-2">2,150</p>
        </div>
      </div>
    </section>

    <footer className="text-center py-8 bg-gray-800 text-white rounded-lg">
      <p>© 2024 Personalized Learning Platform. All rights reserved.</p>
      <p className="mt-2">
        <a href="#" className="text-yellow-500 hover:text-yellow-400">
          Privacy Policy
        </a>{" "}
        |{" "}
        <a href="#" className="text-yellow-500 hover:text-yellow-400">
          Terms of Service
        </a>
      </p>
    </footer>
  </div>
);

export default Home;
