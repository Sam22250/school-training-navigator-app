
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Phone, Mail, MapPin, Search, Plus, MessageCircle } from "lucide-react";

const contacts = [
  {
    id: 1,
    name: "Sarah Johnson",
    title: "Principal",
    school: "Riverside Elementary",
    email: "sarah.johnson@riverside.edu",
    phone: "(555) 123-4567",
    location: "Downtown District",
    role: "Primary Contact",
    lastContact: "2024-01-15",
    status: "Active"
  },
  {
    id: 2,
    name: "Michael Chen",
    title: "Vice Principal",
    school: "Oak Hill Middle School",
    email: "m.chen@oakhill.edu",
    phone: "(555) 234-5678",
    location: "Northside District",
    role: "Secondary Contact",
    lastContact: "2024-01-12",
    status: "Active"
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    title: "IT Coordinator",
    school: "Sunset High School",
    email: "e.rodriguez@sunset.edu",
    phone: "(555) 345-6789",
    location: "Westside District",
    role: "Technical Contact",
    lastContact: "2024-01-10",
    status: "Active"
  },
  {
    id: 4,
    name: "David Thompson",
    title: "Curriculum Director",
    school: "Maple Grove Academy",
    email: "d.thompson@maple.edu",
    phone: "(555) 456-7890",
    location: "Eastside District",
    role: "Program Contact",
    lastContact: "2024-01-08",
    status: "Active"
  },
  {
    id: 5,
    name: "Lisa Parker",
    title: "Assistant Principal",
    school: "Pine Valley Elementary",
    email: "l.parker@pinevalley.edu",
    phone: "(555) 567-8901",
    location: "Southside District",
    role: "Primary Contact",
    lastContact: "2024-01-05",
    status: "Inactive"
  }
];

export function Contacts() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRole, setFilterRole] = useState("All");

  const filteredContacts = contacts.filter(contact => {
    const matchesSearch = contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         contact.school.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         contact.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterRole === "All" || contact.role === filterRole;
    return matchesSearch && matchesFilter;
  });

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('');
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case "Primary Contact": return "bg-green-100 text-green-800";
      case "Secondary Contact": return "bg-blue-100 text-blue-800";
      case "Technical Contact": return "bg-purple-100 text-purple-800";
      case "Program Contact": return "bg-orange-100 text-orange-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Contacts</h1>
          <p className="text-gray-600 mt-1">Manage your school contacts and relationships</p>
        </div>
        <Button className="bg-green-600 hover:bg-green-700">
          <Plus className="w-4 h-4 mr-2" />
          Add Contact
        </Button>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search contacts by name, school, or title..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex gap-2">
          {["All", "Primary Contact", "Secondary Contact", "Technical Contact", "Program Contact"].map((role) => (
            <Button
              key={role}
              variant={filterRole === role ? "default" : "outline"}
              onClick={() => setFilterRole(role)}
              className="text-sm whitespace-nowrap"
            >
              {role}
            </Button>
          ))}
        </div>
      </div>

      {/* Contacts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredContacts.map((contact) => (
          <Card key={contact.id} className="hover:shadow-lg transition-all duration-200 hover:scale-105">
            <CardHeader className="pb-4">
              <div className="flex items-start space-x-3">
                <Avatar className="w-12 h-12">
                  <AvatarFallback className="bg-blue-100 text-blue-700 font-semibold">
                    {getInitials(contact.name)}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <CardTitle className="text-lg font-semibold text-gray-900">
                    {contact.name}
                  </CardTitle>
                  <p className="text-sm text-gray-600">{contact.title}</p>
                  <p className="text-sm font-medium text-blue-600">{contact.school}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <Mail className="w-4 h-4 mr-2" />
                  <span className="truncate">{contact.email}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Phone className="w-4 h-4 mr-2" />
                  {contact.phone}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="w-4 h-4 mr-2" />
                  {contact.location}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <Badge className={`${getRoleColor(contact.role)} text-xs`}>
                  {contact.role}
                </Badge>
                <Badge variant={contact.status === "Active" ? "default" : "secondary"} className="text-xs">
                  {contact.status}
                </Badge>
              </div>

              <div className="text-xs text-gray-500">
                Last contact: {contact.lastContact}
              </div>

              <div className="flex gap-2 pt-2">
                <Button size="sm" variant="outline" className="flex-1 text-xs">
                  <Mail className="w-3 h-3 mr-1" />
                  Email
                </Button>
                <Button size="sm" variant="outline" className="flex-1 text-xs">
                  <Phone className="w-3 h-3 mr-1" />
                  Call
                </Button>
                <Button size="sm" className="flex-1 text-xs bg-blue-600 hover:bg-blue-700">
                  <MessageCircle className="w-3 h-3 mr-1" />
                  Message
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredContacts.length === 0 && (
        <div className="text-center py-12">
          <Contact className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600">No contacts found matching your criteria</p>
        </div>
      )}
    </div>
  );
}
