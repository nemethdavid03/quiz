import React from 'react'

const AutomationPage = () => {
    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold mb-4">Automation</h1>
            <p className="text-lg mb-6">
                Automate your workflows and boost productivity with our powerful automation tools. 
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-xl font-bold mb-2">Task Automation</h2>
                    <p className="text-gray-600">
                        Automate repetitive tasks, freeing up your time for more strategic work.
                    </p>
                </div>
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-xl font-bold mb-2">Process Automation</h2>
                    <p className="text-gray-600">
                        Streamline your processes and eliminate manual errors with automated workflows.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AutomationPage 
