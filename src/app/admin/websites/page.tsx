"use client"

const StartupTemplate = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-white shadow-md">
        <div className="container mx-auto py-4 px-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold">AI Legal Assistant</h1>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a href="#" className="hover:text-gray-800">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800">
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-bold py-2 px-4 rounded-md hover:bg-blue-600"
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
            <h2 className="text-4xl font-bold mb-4">
              Streamline Your Legal Workflow
            </h2>
            <p className="mb-6">
              Our AI-powered legal assistant helps you automate tasks, improve
              efficiency, and focus on what matters most - your clients.
            </p>
            <a
              href="#"
              className="font-bold py-2 px-4 rounded-md hover:bg-blue-600"
            >
              Learn More
            </a>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0">
            <img
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt="AI Legal Assistant Landing Page"
              className="rounded-md shadow-md"
            />
          </div>
        </div>
      </section>

      <section className="container mx-auto py-12">
        <h2 className="text-3xl font-bold mb-4 text-center">
          Pricing Plans
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="rounded-md shadow-md p-6 text-center">
            <h3 className="text-xl font-bold mb-2">
              Basic Plan
            </h3>
            <p className="mb-4">
              Ideal for solo practitioners and small firms. Includes core features
              like document review, contract analysis, and legal research.
            </p>
            <div className="font-bold text-2xl mb-4">$499 One-Time Payment</div>
            <button
              className="font-bold py-2 px-4 rounded-md hover:bg-blue-600"
            >
              Get Started
            </button>
          </div>
          <div className="rounded-md shadow-md p-6 text-center">
            <h3 className="text-xl font-bold mb-2">
              Pro Plan
            </h3>
            <p className="mb-4">
              Designed for larger firms. Includes all Basic Plan features plus
              advanced capabilities like legal drafting, automated case
              management, and client communication tools.
            </p>
            <div className="font-bold text-2xl mb-4">$999 One-Time Payment</div>
            <button
              className="font-bold py-2 px-4 rounded-md hover:bg-blue-600"
            >
              Get Started
            </button>
          </div>
        </div>
      </section>

      <section className="container mx-auto py-12">
        <h2 className="text-3xl font-bold mb-4 text-center">
          Testimonials
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="rounded-md shadow-md p-6">
            <p className="mb-4">
              "Since using this AI assistant, my productivity has skyrocketed! It
              handles tedious tasks, freeing up my time for more strategic
              work."
            </p>
            <div className="flex items-center">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt="Testimonial Avatar"
                className="w-10 h-10 rounded-full mr-4"
              />
              <div>
                <p className="font-bold">Sarah Johnson</p>
                <p>Solo Practitioner</p>
              </div>
            </div>
          </div>
          <div className="rounded-md shadow-md p-6">
            <p className="mb-4">
              "Our firm was struggling to keep up with the increasing workload.
              This AI solution has been a game-changer, allowing us to handle
              more cases efficiently."
            </p>
            <div className="flex items-center">
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc999470d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt="Testimonial Avatar"
                className="w-10 h-10 rounded-full mr-4"
              />
              <div>
                <p className="font-bold">David Miller</p>
                <p>Managing Partner, Law Firm</p>
              </div>
            </div>
          </div>
          <div className="rounded-md shadow-md p-6">
            <p className="mb-4">
              "The legal drafting feature has saved us countless hours. We can
              now produce high-quality documents with ease and accuracy."
            </p>
            <div className="flex items-center">
              <img
                src="https://images.unsplash.com/photo-1494790108372-5c68c6520b7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt="Testimonial Avatar"
                className="w-10 h-10 rounded-full mr-4"
              />
              <div>
                <p className="font-bold">Emily Brown</p>
                <p>Associate Attorney</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto py-12">
        <h2 className="text-3xl font-bold mb-4 text-center">
          See the Difference
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="rounded-md shadow-md p-6">
            <h3 className="text-xl font-bold mb-2">
              Without AI Legal Assistant
            </h3>
            <p className="mb-4">
              - Time-consuming manual tasks
              - Difficulty managing caseloads
              - Risk of errors in legal documents
              - Difficulty staying current on legal developments
              - Limited client communication tools
            </p>
          </div>
          <div className="rounded-md shadow-md p-6">
            <h3 className="text-xl font-bold mb-2">
              With AI Legal Assistant
            </h3>
            <p className="mb-4">
              - Automated tasks for increased efficiency
              - Streamlined case management system
              - Accurate and error-free legal documents
              - Access to up-to-date legal information
              - Improved client communication and engagement
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="container mx-auto text-center">
          <p className="text-sm">&copy; 2023 AI Legal Assistant. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default StartupTemplate;