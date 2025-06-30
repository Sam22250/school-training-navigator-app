
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { Trophy, Star, TrendingUp, Calendar, Users, Award, Download, Share } from "lucide-react";

const successStories = [
  {
    id: 1,
    school: "Riverside Elementary",
    program: "Digital Literacy Training",
    completedDate: "2024-01-10",
    duration: "6 weeks",
    participants: 25,
    satisfactionScore: 4.8,
    achievements: ["100% completion rate", "Improved digital skills by 85%", "Teacher confidence increased by 90%"],
    testimonial: "The training program transformed our teaching approach completely. Our teachers now feel confident using digital tools in their classrooms.",
    contact: "Sarah Johnson"
  },
  {
    id: 2,
    school: "Maple Grove Academy",
    program: "Classroom Management",
    completedDate: "2024-01-05",
    duration: "4 weeks",
    participants: 15,
    satisfactionScore: 4.6,
    achievements: ["Reduced classroom disruptions by 70%", "Improved student engagement by 60%", "Enhanced teaching effectiveness"],
    testimonial: "The classroom management techniques we learned have made a significant difference in our daily teaching experience.",
    contact: "David Thompson"
  },
  {
    id: 3,
    school: "Sunset High School",
    program: "Educational Technology Integration",
    completedDate: "2023-12-20",
    duration: "8 weeks",
    participants: 32,
    satisfactionScore: 4.9,
    achievements: ["Seamless tech integration", "Student performance improved by 40%", "Innovative teaching methods adopted"],
    testimonial: "This program equipped our staff with cutting-edge technology skills that have revolutionized our curriculum delivery.",
    contact: "Emma Rodriguez"
  }
];

const yearlyData = [
  { year: '2020', completed: 12, satisfaction: 4.2 },
  { year: '2021', completed: 18, satisfaction: 4.4 },
  { year: '2022', completed: 25, satisfaction: 4.6 },
  { year: '2023', completed: 32, satisfaction: 4.7 },
  { year: '2024', completed: 15, satisfaction: 4.8 }
];

const monthlyTrend = [
  { month: 'Jan', implementations: 8 },
  { month: 'Feb', implementations: 12 },
  { month: 'Mar', implementations: 15 },
  { month: 'Apr', implementations: 10 },
  { month: 'May', implementations: 18 },
  { month: 'Jun', implementations: 22 }
];

export function SuccessfulImplementation() {
  const renderStars = (score: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < Math.floor(score) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Success Stories</h1>
          <p className="text-gray-600 mt-1">Celebrate achievements and track implementation success</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export Report
          </Button>
          <Button className="bg-green-600 hover:bg-green-700">
            <Share className="w-4 h-4 mr-2" />
            Share Success
          </Button>
        </div>
      </div>

      {/* Success Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <Trophy className="w-8 h-8 text-green-600" />
              <div>
                <p className="text-sm font-medium text-green-800">Total Success</p>
                <p className="text-2xl font-bold text-green-900">89</p>
                <p className="text-xs text-green-600">Programs completed</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <Users className="w-8 h-8 text-blue-600" />
              <div>
                <p className="text-sm font-medium text-blue-800">Participants</p>
                <p className="text-2xl font-bold text-blue-900">2,340</p>
                <p className="text-xs text-blue-600">Total trained</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200">
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <Star className="w-8 h-8 text-yellow-600" />
              <div>
                <p className="text-sm font-medium text-yellow-800">Avg Rating</p>
                <p className="text-2xl font-bold text-yellow-900">4.7</p>
                <p className="text-xs text-yellow-600">Out of 5.0</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-8 h-8 text-purple-600" />
              <div>
                <p className="text-sm font-medium text-purple-800">Success Rate</p>
                <p className="text-2xl font-bold text-purple-900">94%</p>
                <p className="text-xs text-purple-600">Completion rate</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Yearly Success Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={yearlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="completed" fill="#10B981" name="Completed Programs" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Monthly Implementation Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyTrend}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="implementations" stroke="#3B82F6" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Success Stories */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 flex items-center">
          <Award className="w-6 h-6 mr-2 text-yellow-600" />
          Featured Success Stories
        </h2>
        
        {successStories.map((story) => (
          <Card key={story.id} className="hover:shadow-lg transition-shadow duration-200 border-l-4 border-green-500">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {story.school}
                  </CardTitle>
                  <p className="text-gray-600 mt-1">{story.program}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex items-center">
                    {renderStars(story.satisfactionScore)}
                    <span className="ml-2 text-sm font-medium text-gray-700">
                      {story.satisfactionScore}
                    </span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center text-gray-600">
                  <Calendar className="w-4 h-4 mr-2" />
                  Completed: {story.completedDate}
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="w-4 h-4 mr-2" />
                  Duration: {story.duration}
                </div>
                <div className="flex items-center text-gray-600">
                  <Users className="w-4 h-4 mr-2" />
                  Participants: {story.participants}
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900">Key Achievements:</h4>
                <ul className="space-y-1">
                  {story.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">Testimonial:</h4>
                <p className="text-blue-800 italic">"{story.testimonial}"</p>
                <p className="text-sm text-blue-600 mt-2">- {story.contact}</p>
              </div>

              <div className="flex gap-2 pt-2">
                <Button size="sm" variant="outline" className="text-xs">
                  View Full Report
                </Button>
                <Button size="sm" variant="outline" className="text-xs">
                  Share Story
                </Button>
                <Button size="sm" className="text-xs bg-green-600 hover:bg-green-700">
                  Use as Template
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
