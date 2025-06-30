
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Users, CheckCircle, AlertCircle } from "lucide-react";

const trainingPrograms = [
  {
    id: 1,
    schoolName: "Riverside Elementary",
    programType: "Digital Literacy Training",
    startDate: "2024-01-15",
    endDate: "2024-02-15",
    progress: 85,
    trainer: "Alice Johnson",
    participants: 25,
    status: "In Progress",
    phase: "Module 4 of 5",
    nextSession: "2024-01-20"
  },
  {
    id: 2,
    schoolName: "Oak Hill Middle School",
    programType: "STEM Teaching Methods",
    startDate: "2024-01-10",
    endDate: "2024-02-10",
    progress: 65,
    trainer: "Bob Smith",
    participants: 18,
    status: "In Progress",
    phase: "Module 3 of 5",
    nextSession: "2024-01-18"
  },
  {
    id: 3,
    schoolName: "Sunset High School",
    programType: "Educational Technology",
    startDate: "2024-01-05",
    endDate: "2024-02-05",
    progress: 100,
    trainer: "Carol Davis",
    participants: 32,
    status: "Completed",
    phase: "Completed",
    nextSession: "N/A"
  },
  {
    id: 4,
    schoolName: "Maple Grove Academy",
    programType: "Classroom Management",
    startDate: "2024-01-20",
    endDate: "2024-02-20",
    progress: 25,
    trainer: "David Wilson",
    participants: 15,
    status: "Just Started",
    phase: "Module 1 of 4",
    nextSession: "2024-01-22"
  }
];

export function TrainingStatus() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed": return "bg-green-100 text-green-800";
      case "In Progress": return "bg-blue-100 text-blue-800";
      case "Just Started": return "bg-yellow-100 text-yellow-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getProgressColor = (progress: number) => {
    if (progress >= 80) return "bg-green-500";
    if (progress >= 50) return "bg-blue-500";
    if (progress >= 20) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Training Status</h1>
          <p className="text-gray-600 mt-1">Monitor progress of all ongoing training programs</p>
        </div>
        <Button className="bg-green-600 hover:bg-green-700">
          <CheckCircle className="w-4 h-4 mr-2" />
          Generate Report
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <Clock className="w-4 h-4 text-blue-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Active Programs</p>
                <p className="text-2xl font-bold text-gray-900">3</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-4 h-4 text-green-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Completed</p>
                <p className="text-2xl font-bold text-gray-900">1</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                <Users className="w-4 h-4 text-purple-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Total Participants</p>
                <p className="text-2xl font-bold text-gray-900">90</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                <AlertCircle className="w-4 h-4 text-orange-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Avg Progress</p>
                <p className="text-2xl font-bold text-gray-900">69%</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Training Programs List */}
      <div className="space-y-4">
        {trainingPrograms.map((program) => (
          <Card key={program.id} className="hover:shadow-lg transition-shadow duration-200">
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-lg font-semibold text-gray-900">
                    {program.schoolName}
                  </CardTitle>
                  <p className="text-sm text-gray-600 mt-1">{program.programType}</p>
                </div>
                <Badge className={`${getStatusColor(program.status)} text-xs`}>
                  {program.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-700">Progress</p>
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>{program.phase}</span>
                      <span className="font-medium">{program.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full transition-all duration-300 ${getProgressColor(program.progress)}`}
                        style={{ width: `${program.progress}%` }}
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-700">Details</p>
                  <div className="space-y-1 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Users className="w-3 h-3 mr-2" />
                      {program.participants} participants
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 mr-2" />
                      {program.startDate} - {program.endDate}
                    </div>
                    <p>Trainer: {program.trainer}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-700">Next Action</p>
                  <div className="text-sm text-gray-600">
                    <p>Next session: {program.nextSession}</p>
                    <div className="flex gap-2 mt-2">
                      <Button size="sm" variant="outline" className="text-xs">
                        View Details
                      </Button>
                      <Button size="sm" className="text-xs bg-blue-600 hover:bg-blue-700">
                        Update Progress
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
