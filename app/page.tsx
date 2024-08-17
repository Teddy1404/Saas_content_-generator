"use client"
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleStarted = () => {
    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Hero Section */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">AI Content Generator</h1>
        </div>
      </header>

      <main className="flex-grow">
        <section className="bg-white py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Generate High-Quality Content in Seconds
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Our AI-driven platform helps you create content that engages and converts.
            </p>
            <button 
              className="bg-blue-500 text-white py-2 px-6 rounded-lg text-lg hover:bg-blue-600"
              onClick={handleStarted}
            >
              Get Started
            </button>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Fast & Easy</h3>
                <p className="text-gray-600">
                  Create content quickly with our easy-to-use AI-powered tools.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">High Quality</h3>
                <p className="text-gray-600">
                  Generate content that resonates with your audience.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Affordable</h3>
                <p className="text-gray-600">
                  Get premium content at a fraction of the cost.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">Choose Your Plan</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Free Plan */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Free Plan</h3>
                <p className="text-gray-600 mb-4">$0 / month</p>
                <ul className="text-gray-600 mb-8">
                  <li className="mb-2">Basic Features</li>
                  <li className="mb-2">Limited Content</li>
                  <li className="mb-2">Email Support</li>
                </ul>
                <button 
                  className="bg-blue-500 text-white py-2 px-6 rounded-lg text-lg hover:bg-blue-600"
                  onClick={handleStarted}
                >
                  Get Started
                </button>
              </div>

              {/* Premium Plan */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Premium Plan</h3>
                <p className="text-gray-600 mb-4">$49 / month</p>
                <ul className="text-gray-600 mb-8">
                  <li className="mb-2">All Basic Features</li>
                  <li className="mb-2">Unlimited Content</li>
                  <li className="mb-2">Priority Support</li>
                </ul>
                <button 
                  className="bg-green-500 text-white py-2 px-6 rounded-lg text-lg hover:bg-green-600"
                  onClick={handleStarted}
                >
                  Get Premium
                </button>
              </div>

              {/* Enterprise Plan */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Enterprise Plan</h3>
                <p className="text-gray-600 mb-4">Contact Us for Pricing</p>
                <ul className="text-gray-600 mb-8">
                  <li className="mb-2">Custom Solutions</li>
                  <li className="mb-2">Dedicated Support</li>
                  <li className="mb-2">Advanced Features</li>
                </ul>
                <button className="bg-gray-500 text-white py-2 px-6 rounded-lg text-lg hover:bg-gray-600">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 py-6">
        <div className="container mx-auto text-center text-white">
          <p>&copy; 2024 AI Content Generator. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
