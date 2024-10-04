
import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Code,
  Heading,
  Paragraph,
} from 'shadcn-ui'

const AutomationPage = () => {
  return (
    <div className="p-4">
      <Heading as="h1" size="2xl" className="font-bold mb-4">
        Automation
      </Heading>
      <Paragraph className="mb-6">
        Automate your workflows and boost productivity with our powerful
        automation tools.
      </Paragraph>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Task Automation</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Automate repetitive tasks, freeing up your time for more strategic
              work.
            </CardDescription>
            <Code className="mt-4">
              // Example of a task automation code
              // ...
            </Code>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Process Automation</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Streamline your processes and eliminate manual errors with
              automated workflows.
            </CardDescription>
            <Code className="mt-4">
              // Example of a process automation code
              // ...
            </Code>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default AutomationPage
