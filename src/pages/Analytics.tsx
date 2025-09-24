import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { BarChart3, Filter, Users, Calendar, MapPin, User } from "lucide-react";

const Analytics = () => {
  const [filters, setFilters] = useState({
    diagnosis: "",
    duration: "",
    ageRange: "",
    gender: "",
    occupation: "",
    location: ""
  });

  // Mock analytics data
  const diagnosisData = [
    { name: "Contact Dermatitis", count: 45, percentage: 35 },
    { name: "Eczema", count: 32, percentage: 25 },
    { name: "Psoriasis", count: 20, percentage: 15 },
    { name: "Acne", count: 18, percentage: 14 },
    { name: "Fungal Infections", count: 14, percentage: 11 }
  ];

  const ageDistribution = [
    { ageGroup: "0-18", male: 12, female: 15 },
    { ageGroup: "19-35", male: 25, female: 28 },
    { ageGroup: "36-50", male: 20, female: 18 },
    { ageGroup: "51-65", male: 15, female: 12 },
    { ageGroup: "65+", male: 8, female: 10 }
  ];

  const genderData = [
    { name: "Female", value: 83, color: "#EC4899" },
    { name: "Male", value: 80, color: "#3B82F6" }
  ];

  const monthlyTrends = [
    { month: "Jan", patients: 45 },
    { month: "Feb", patients: 52 },
    { month: "Mar", patients: 48 },
    { month: "Apr", patients: 61 },
    { month: "May", patients: 55 },
    { month: "Jun", patients: 67 }
  ];

  const handleFilterChange = (field: string, value: string) => {
    setFilters(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const applyFilters = () => {
    console.log("Applying filters:", filters);
    // Here you would filter the data based on the selected criteria
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Analytics Dashboard</h1>
          <p className="text-muted-foreground">Comprehensive dermatology practice insights</p>
        </div>

        {/* Filters */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-primary flex items-center gap-2">
              <Filter className="h-5 w-5" />
              Data Filters
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
              <div>
                <Label htmlFor="diagnosis">Diagnosis</Label>
                <Select onValueChange={(value) => handleFilterChange("diagnosis", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Any" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="contact-dermatitis">Contact Dermatitis</SelectItem>
                    <SelectItem value="eczema">Eczema</SelectItem>
                    <SelectItem value="psoriasis">Psoriasis</SelectItem>
                    <SelectItem value="acne">Acne</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="duration">Duration</Label>
                <Select onValueChange={(value) => handleFilterChange("duration", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Any" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="acute">Acute (&lt; 1 week)</SelectItem>
                    <SelectItem value="subacute">Subacute (1-4 weeks)</SelectItem>
                    <SelectItem value="chronic">Chronic (&gt; 4 weeks)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="ageRange">Age Range</Label>
                <Select onValueChange={(value) => handleFilterChange("ageRange", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Any" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-18">0-18 years</SelectItem>
                    <SelectItem value="19-35">19-35 years</SelectItem>
                    <SelectItem value="36-50">36-50 years</SelectItem>
                    <SelectItem value="51-65">51-65 years</SelectItem>
                    <SelectItem value="65+">65+ years</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="gender">Gender</Label>
                <Select onValueChange={(value) => handleFilterChange("gender", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Any" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="M">Male</SelectItem>
                    <SelectItem value="F">Female</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="occupation">Occupation</Label>
                <Input
                  id="occupation"
                  placeholder="e.g., Homemaker"
                  value={filters.occupation}
                  onChange={(e) => handleFilterChange("occupation", e.target.value)}
                />
              </div>
              
              <div>
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  placeholder="e.g., Bangalore"
                  value={filters.location}
                  onChange={(e) => handleFilterChange("location", e.target.value)}
                />
              </div>
            </div>
            
            <div className="mt-4">
              <Button onClick={applyFilters} className="bg-primary hover:bg-primary/90">
                Apply Filters
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Key Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-primary">163</p>
                  <p className="text-sm text-muted-foreground">Total Patients</p>
                </div>
                <Users className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-primary">67</p>
                  <p className="text-sm text-muted-foreground">This Month</p>
                </div>
                <Calendar className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-primary">51%</p>
                  <p className="text-sm text-muted-foreground">Female Patients</p>
                </div>
                <User className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-primary">15</p>
                  <p className="text-sm text-muted-foreground">Avg Age Range</p>
                </div>
                <BarChart3 className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Diagnosis Distribution */}
          <Card>
            <CardHeader>
              <CardTitle className="text-primary">Top Diagnoses</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={diagnosisData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis 
                    dataKey="name" 
                    angle={-45}
                    textAnchor="end"
                    height={100}
                    fontSize={12}
                  />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="count" fill="hsl(var(--primary))" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Gender Distribution */}
          <Card>
            <CardHeader>
              <CardTitle className="text-primary">Gender Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={genderData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name}: ${value}`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {genderData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Age Distribution and Monthly Trends */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Age Distribution by Gender */}
          <Card>
            <CardHeader>
              <CardTitle className="text-primary">Age Distribution by Gender</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={ageDistribution}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="ageGroup" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="male" fill="#3B82F6" name="Male" />
                  <Bar dataKey="female" fill="#EC4899" name="Female" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Monthly Patient Trends */}
          <Card>
            <CardHeader>
              <CardTitle className="text-primary">Monthly Patient Trends</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={monthlyTrends}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="patients" fill="hsl(var(--success))" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Sample Query Result */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="text-primary">Sample Query Result</CardTitle>
          </CardHeader>
          <CardContent>
                <div className="bg-muted p-4 rounded-lg">
              <p className="text-sm font-medium mb-2">Query: &quot;How many females from Bangalore who are homemakers have contact dermatitis?&quot;</p>
              <p className="text-2xl font-bold text-primary">12 patients</p>
              <p className="text-sm text-muted-foreground mt-1">
                Representing 18% of contact dermatitis cases and 7% of total female patients
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Analytics;