
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, AlertCircle, CheckCircle, Plus, Filter } from "lucide-react";

const followUps = [
  {
    id: 1,
    school: "Riverside Elementary",
    contact: "Sarah Johnson",
    type: "Progress Check",
    priority: "High",
    dueDate: "2024-01-18",
    status: "Pending",
    description: "Follow up on digital literacy training progress and address any technical issues",
    lastUpdate: "2024-01-15"
  },
  {
    id: 2,
    school: "Oak Hill Middle School",
    contact: "Michael Chen",
    type: "Implementation Review",
    priority: "Medium",
    dueDate: "2024-01-20",
    status: "Scheduled",
    description: "Review STEM training implementation and gather feedback from teachers",
    lastUpdate: "2024-01-12"
  },
  {
    id: 3,
    school: "Sunset High School",
    contact: "Emma Rodriguez",
    type: "Technical Support",
    priority: "High",
    dueDate: "2024-01-16",
    status: "Overdue",
    description: "Resolve technical issues with new educational software installation",
    lastUpdate: "2024-01-10"
  },
  {
    id: 4,
    school: "Maple Grove Academy",
    contact: "David Thompson",
    type: "Feedback Collection",
    priority: "Low",
    dueDate: "2024-01-22",
    status: "Pending",
    description: "Collect feedback on completed teacher development program",
    lastUpdate: "2024-01-08"
  },
  {
    id: 5,
    school: "Pine Valley Elementary",
    contact: "Lisa Parker",
    type: "Contract Renewal",
    priority: "Medium",
    dueDate: "2024-01-25",
    status: "In Progress",
    description: "Discuss contract renewal for next academic year",
    lastUpdate: "2024-01-14"
  }
];

export function FollowUps() {
  const [filterStatus, setFilterStatus] = useState("All");
  const [filterPriority, setFilterPriority] = useState("All");

  const filteredFollowUps = followUps.filter(followUp => {
    const matchesStatus = filterStatus === "All" || followUp.status === filterStatus;
    const matchesPriority = filterPriority === "All" || followUp.priority === filterPriority;
    return matchesStatus && matchesPriority;
  });

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High": return "bg-red-100 text-red-800";
      case "Medium": return "bg-yellow-100 text-yellow-800";
      case "Low": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed": return "bg-green-100 text-green-800";
      case "In Progress": return "bg-blue-100 text-blue-800";
      case "Scheduled": return "bg-purple-100 text-purple-800";
      case "Overdue": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Completed":
        return <CheckCircle className="w-4 h-4 text-green-600" />;
      case "Overdue":
        return <AlertCircle className="w-4 h-4 text-red-600" />;
      case "In Progress":
        return <Clock className="w-4 h-4 text-blue-600" />;
      default:
        return <Calendar className="w-4 h-4 text-gray-600" />;
    }
  };

  const isOverdue = (dueDate: string) => {
    return new Date(dueDate) < new Date() && Date.now() > new Date(dueDate).getTime();
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Follow-ups</h1>
          <p className="text-gray-600 mt-1">Track and manage all scheduled follow-ups</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="w-4 h-4 mr-2" />
          Schedule Follow-up
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <AlertCircle className="w-5 h-5 text-red-600" />
              <div>
                <p className="text-sm font-medium text-gray-600">Overdue</p>
                <p className="text-2xl font-bold text-red-600">1</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-yellow-600" />
              <div>
                <p className="text-sm font-medium text-gray-600">Due Today</p>
                <p className="text-2xl font-bold text-yellow-600">2</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <Calendar className="w-5 h-5 text-blue-600" />
              <div>
                <p className="text-sm font-medium text-gray-600">This Week</p>
                <p className="text-2xl font-bold text-blue-600">4</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <div>
                <p className="text-sm font-medium text-gray-600">Completed</p>
                <p className="text-2xl font-bold text-green-600">0</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <div className="flex gap-4">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-gray-500" />
          <span className="text-sm font-medium text-gray-700">Status:</span>
          {["All", "Pending", "Scheduled", "In Progress", "Overdue", "Completed"].map((status) => (
            <Button
              key={status}
              variant={filterStatus === status ? "default" : "outline"}
              onClick={() => setFilterStatus(status)}
              className="text-xs"
            >
              {status}
            </Button>
          ))}
        </div>
      </div>

      <div className="flex gap-4">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-gray-700">Priority:</span>
          {["All", "High", "Medium", "Low"].map((priority) => (
            <Button
              key={priority}
              variant={filterPriority === priority ? "default" : "outline"}
              onClick={() => setFilterPriority(priority)}
              className="text-xs"
            >
              {priority}
            </Button>
          ))}
        </div>
      </div>

      {/* Follow-ups List */}
      <div className="space-y-4">
        {filteredFollowUps.map((followUp) => (
          <Card key={followUp.id} className={`hover:shadow-lg transition-shadow duration-200 ${
            followUp.status === "Overdue" ? "border-l-4 border-red-500" : ""
          }`}>
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-lg font-semibold text-gray-900">
                    {followUp.school}
                  </CardTitle>
                  <p className="text-sm text-gray-600 mt-1">{followUp.contact} • {followUp.type}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge className={`${getPriorityColor(followUp.priority)} text-xs`}>
                    {followUp.priority}
                  </Badge>
                  <Badge className={`${getStatusColor(followUp.status)} text-xs`}>
                    {followUp.status}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-gray-700">{followUp.description}</p>
              
              <div className="flex items-center justify-between text-sm text-gray-600">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    Due: {followUp.dueDate}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    Updated: {followUp.lastUpdate}
                  </div>
                </div>
                <div className="flex items-center">
                  {getStatusIcon(followUp.status)}
                </div>
              </div>

              <div className="flex gap-2 pt-2">
                <Button size="sm" variant="outline" className="text-xs">
                  Reschedule
                </Button>
                <Button size="sm" variant="outline" className="text-xs">
                  Add Note
                </Button>
                <Button size="sm" className="text-xs bg-green-600 hover:bg-green-700">
                  Mark Complete
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredFollowUps.length === 0 && (
        <div className="text-center py-12">
          <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600">No follow-ups found matching your criteria</p>
        </div>
      )}
    </div>
  );
}
