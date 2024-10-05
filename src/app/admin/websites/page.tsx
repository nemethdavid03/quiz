"use client"

const StartupTemplate = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-white shadow-md">
        <div className="container mx-auto py-4 px-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">My Startup</h1>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600"
                >
                  Get Started
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="container mx-auto py-12">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Revolutionize Your Business
            </h2>
            <p className="text-gray-600 mb-6">
              Our platform empowers you to achieve your goals with ease.
            </p>
            <a
              href="#"
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600"
            >
              Learn More
            </a>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0">
            <img
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt="Startup Landing Page"
              className="rounded-md shadow-md"
            />
          </div>
        </div>
      </section>

      <section className="container mx-auto py-12 bg-gray-200">
        <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          Pricing Plans
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="bg-white rounded-md shadow-md p-6 text-center">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Free Plan
            </h3>
            <p className="text-gray-600 mb-4">
              Basic features for individual users.
            </p>
            <div className="font-bold text-gray-800 text-2xl mb-4">$0/month</div>
            <button
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600"
            >
              Get Started
            </button>
          </div>
          <div className="bg-white rounded-md shadow-md p-6 text-center">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Pro Plan
            </h3>
            <p className="text-gray-600 mb-4">
              Advanced features for growing businesses.
            </p>
            <div className="font-bold text-gray-800 text-2xl mb-4">$29/month</div>
            <button
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600"
            >
              Get Started
            </button>
          </div>
          <div className="bg-white rounded-md shadow-md p-6 text-center">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Enterprise Plan
            </h3>
            <p className="text-gray-600 mb-4">
              Complete solution for large enterprises.
            </p>
            <div className="font-bold text-gray-800 text-2xl mb-4">$99/month</div>
            <button
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600"
            >
              Get Started
            </button>
          </div>
        </div>
      </section>

      <section className="container mx-auto py-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          Testimonials
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="bg-white rounded-md shadow-md p-6">
            <p className="text-gray-600 mb-4">
              "This platform has revolutionized our business processes. We highly
              recommend it to anyone looking for a powerful and efficient
              solution."
            </p>
            <div className="flex items-center">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt="Testimonial Avatar"
                className="w-10 h-10 rounded-full mr-4"
              />
              <div>
                <p className="font-bold text-gray-800">John Doe</p>
                <p className="text-gray-600">CEO, Acme Corporation</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-md shadow-md p-6">
            <p className="text-gray-600 mb-4">
              "The user interface is intuitive and easy to use. I love how
              efficiently it helps me manage my tasks."
            </p>
            <div className="flex items-center">
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc999470d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt="Testimonial Avatar"
                className="w-10 h-10 rounded-full mr-4"
              />
              <div>
                <p className="font-bold text-gray-800">Jane Smith</p>
                <p className="text-gray-600">Marketing Manager, XYZ Company</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-md shadow-md p-6">
            <p className="text-gray-600 mb-4">
              "I've tried several other platforms, but this one is by far the best.
              It's incredibly feature-rich and has exceptional customer support."
            </p>
            <div className="flex items-center">
              <img
                src="https://images.unsplash.com/photo-1494790108372-5c68c6520b7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt="Testimonial Avatar"
                className="w-10 h-10 rounded-full mr-4"
              />
              <div>
                <p className="font-bold text-gray-800">Peter Jones</p>
                <p className="text-gray-600">Founder, ABC Enterprises</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto py-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          See the Difference
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="bg-red-100 rounded-md shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Without My Startup
            </h3>
            <p className="text-gray-600 mb-4">
              - Inefficient processes
              - Slow growth
              - Limited features
              - Manual tasks
              - Frustration
            </p>
          </div>
          <div className="bg-green-100 rounded-md shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              With My Startup
            </h3>
            <p className="text-gray-600 mb-4">
              - Streamlined workflows
              - Rapid growth
              - Powerful features
              - Automation
              - Success
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="container mx-auto text-center">
          <p className="text-sm">&copy; 2023 My Startup. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default StartupTemplate;