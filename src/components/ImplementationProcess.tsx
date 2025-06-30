
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, Circle, Clock, AlertTriangle, FileText } from "lucide-react";

const implementationSteps = [
  {
    id: 1,
    title: "Initial Assessment",
    description: "Evaluate school needs and current infrastructure",
    status: "completed",
    duration: "1-2 weeks"
  },
  {
    id: 2,
    title: "Planning & Design",
    description: "Create customized training program and timeline",
    status: "completed",
    duration: "1 week"
  },
  {
    id: 3,
    title: "Resource Preparation",
    description: "Prepare materials, equipment, and training resources",
    status: "in-progress",
    duration: "2 weeks"
  },
  {
    id: 4,
    title: "Staff Training",
    description: "Conduct comprehensive training sessions",
    status: "pending",
    duration: "3-4 weeks"
  },
  {
    id: 5,
    title: "Implementation",
    description: "Deploy the program with ongoing support",
    status: "pending",
    duration: "2-3 weeks"
  },
  {
    id: 6,
    title: "Evaluation & Feedback",
    description: "Assess results and gather feedback",
    status: "pending",
    duration: "1 week"
  }
];

const currentProjects = [
  {
    id: 1,
    school: "Riverside Elementary",
    program: "Digital Literacy",
    currentStep: 3,
    progress: 45,
    startDate: "2024-01-15",
    estimatedCompletion: "2024-03-15"
  },
  {
    id: 2,
    school: "Oak Hill Middle School",
    program: "STEM Training",
    currentStep: 4,
    progress: 65,
    startDate: "2024-01-10",
    estimatedCompletion: "2024-03-10"
  },
  {
    id: 3,
    school: "Maple Grove Academy",
    program: "Teacher Development",
    currentStep: 2,
    progress: 25,
    startDate: "2024-01-20",
    estimatedCompletion: "2024-03-20"
  }
];

export function ImplementationProcess() {
  const getStepIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case "in-progress":
        return <Clock className="w-5 h-5 text-blue-600" />;
      default:
        return <Circle className="w-5 h-5 text-gray-300" />;
    }
  };

  const getStepColor = (status: string) => {
    switch (status) {
      case "completed":
        return "border-green-200 bg-green-50";
      case "in-progress":
        return "border-blue-200 bg-blue-50";
      default:
        return "border-gray-200 bg-gray-50";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Implementation Process</h1>
          <p className="text-gray-600 mt-1">Track and manage implementation workflows</p>
        </div>
        <Button className="bg-purple-600 hover:bg-purple-700">
          <FileText className="w-4 h-4 mr-2" />
          Create Template
        </Button>
      </div>

      {/* Process Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Standard Implementation Workflow</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {implementationSteps.map((step, index) => (
              <div key={step.id} className={`flex items-start space-x-4 p-4 rounded-lg border-2 transition-all duration-200 ${getStepColor(step.status)}`}>
                <div className="flex-shrink-0 mt-1">
                  {getStepIcon(step.status)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-900">
                      Step {step.id}: {step.title}
                    </h3>
                    <Badge variant="outline" className="text-xs">
                      {step.duration}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Current Projects */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Active Implementation Projects</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {currentProjects.map((project) => (
              <div key={project.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-semibold text-gray-900">{project.school}</h3>
                    <p className="text-sm text-gray-600">{project.program}</p>
                  </div>
                  <Badge className="bg-blue-100 text-blue-800 text-xs">
                    Step {project.currentStep} of 6
                  </Badge>
                </div>

                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Overall Progress</span>
                      <span className="font-medium">{project.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                  </div>

                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Started: {project.startDate}</span>
                    <span>Est. Completion: {project.estimatedCompletion}</span>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button size="sm" variant="outline" className="text-xs">
                      View Timeline
                    </Button>
                    <Button size="sm" className="text-xs bg-blue-600 hover:bg-blue-700">
                      Update Status
                    </Button>
                    <Button size="sm" variant="outline" className="text-xs">
                      Generate Report
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
