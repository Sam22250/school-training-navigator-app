
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Users, MapPin, Calendar, Phone, Mail, Search } from "lucide-react";

const schools = [
  {
    id: 1,
    name: "Riverside Elementary School",
    location: "Downtown District",
    students: 450,
    contact: "Sarah Johnson",
    phone: "(555) 123-4567",
    email: "sarah.johnson@riverside.edu",
    status: "Active",
    programType: "Digital Literacy",
    lastContact: "2024-01-15"
  },
  {
    id: 2,
    name: "Oak Hill Middle School",
    location: "Northside District",
    students: 680,
    contact: "Michael Chen",
    phone: "(555) 234-5678",
    email: "m.chen@oakhill.edu",
    status: "In Progress",
    programType: "STEM Training",
    lastContact: "2024-01-12"
  },
  {
    id: 3,
    name: "Sunset High School",
    location: "Westside District",
    students: 1200,
    contact: "Emma Rodriguez",
    phone: "(555) 345-6789",
    email: "e.rodriguez@sunset.edu",
    status: "Pending",
    programType: "Teacher Development",
    lastContact: "2024-01-10"
  },
  {
    id: 4,
    name: "Maple Grove Academy",
    location: "Eastside District",
    students: 320,
    contact: "David Thompson",
    phone: "(555) 456-7890",
    email: "d.thompson@maple.edu",
    status: "Completed",
    programType: "Digital Literacy",
    lastContact: "2024-01-08"
  }
];

export function SchoolsList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");

  const filteredSchools = schools.filter(school => {
    const matchesSearch = school.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         school.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === "All" || school.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active": return "bg-green-100 text-green-800";
      case "In Progress": return "bg-yellow-100 text-yellow-800";
      case "Pending": return "bg-red-100 text-red-800";
      case "Completed": return "bg-blue-100 text-blue-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Schools Directory</h1>
          <p className="text-gray-600 mt-1">Manage and track all partner schools</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Users className="w-4 h-4 mr-2" />
          Add School
        </Button>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search schools by name or location..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex gap-2">
          {["All", "Active", "In Progress", "Pending", "Completed"].map((status) => (
            <Button
              key={status}
              variant={filterStatus === status ? "default" : "outline"}
              onClick={() => setFilterStatus(status)}
              className="text-sm"
            >
              {status}
            </Button>
          ))}
        </div>
      </div>

      {/* Schools Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSchools.map((school) => (
          <Card key={school.id} className="hover:shadow-lg transition-all duration-200 hover:scale-105">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <CardTitle className="text-lg font-semibold text-gray-900 leading-tight">
                  {school.name}
                </CardTitle>
                <Badge className={`${getStatusColor(school.status)} text-xs`}>
                  {school.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center text-sm text-gray-600">
                <MapPin className="w-4 h-4 mr-2" />
                {school.location}
              </div>
              
              <div className="flex items-center text-sm text-gray-600">
                <Users className="w-4 h-4 mr-2" />
                {school.students} students
              </div>

              <div className="border-t pt-3">
                <p className="text-sm font-medium text-gray-900">{school.contact}</p>
                <div className="flex items-center text-xs text-gray-500 mt-1">
                  <Phone className="w-3 h-3 mr-1" />
                  {school.phone}
                </div>
                <div className="flex items-center text-xs text-gray-500 mt-1">
                  <Mail className="w-3 h-3 mr-1" />
                  {school.email}
                </div>
              </div>

              <div className="border-t pt-3">
                <div className="flex justify-between items-center text-xs text-gray-500 mb-2">
                  <span>Program: {school.programType}</span>
                  <span>Last contact: {school.lastContact}</span>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1 text-xs">
                    View Details
                  </Button>
                  <Button size="sm" className="flex-1 text-xs bg-blue-600 hover:bg-blue-700">
                    Contact
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredSchools.length === 0 && (
        <div className="text-center py-12">
          <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600">No schools found matching your criteria</p>
        </div>
      )}
    </div>
  );
}
