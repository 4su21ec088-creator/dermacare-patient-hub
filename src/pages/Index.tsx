import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UserPlus, Search, BarChart3, Users, Calendar, Stethoscope, FileText } from "lucide-react";

const Index = () => {
  const quickStats = [
    { label: "Total Patients", value: "163", icon: Users, color: "text-primary" },
    { label: "This Month", value: "67", icon: Calendar, color: "text-success" },
    { label: "Pending Reviews", value: "12", icon: FileText, color: "text-orange-500" },
    { label: "Active Cases", value: "45", icon: Stethoscope, color: "text-blue-500" }
  ];

  const recentPatients = [
    { name: "Sarah Johnson", phone: "9876543210", diagnosis: "Eczema", date: "2024-01-20" },
    { name: "Michael Chen", phone: "9876543211", diagnosis: "Psoriasis", date: "2024-01-19" },
    { name: "Emily Davis", phone: "9876543212", diagnosis: "Contact Dermatitis", date: "2024-01-18" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto p-6">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">
            Welcome to DermaClinic
          </h1>
          <p className="text-xl text-muted-foreground">
            Professional dermatology patient management system
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center pb-4">
              <UserPlus className="h-12 w-12 text-primary mx-auto mb-2" />
              <CardTitle className="text-primary">Add New Patient</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-4">
                Create comprehensive patient records with detailed examination forms
              </p>
              <Button asChild className="w-full bg-primary hover:bg-primary/90">
                <Link to="/add-patient">Start Registration</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center pb-4">
              <Search className="h-12 w-12 text-primary mx-auto mb-2" />
              <CardTitle className="text-primary">Search Patients</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-4">
                Find and view existing patient records by phone number
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link to="/search">Search Records</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center pb-4">
              <BarChart3 className="h-12 w-12 text-primary mx-auto mb-2" />
              <CardTitle className="text-primary">Analytics Dashboard</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-4">
                View practice insights and filter patient data by diagnosis
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link to="/analytics">View Analytics</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {quickStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                    </div>
                    <Icon className={`h-8 w-8 ${stat.color}`} />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Recent Patients */}
        <Card>
          <CardHeader>
            <CardTitle className="text-primary">Recent Patients</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentPatients.map((patient, index) => (
                <div key={index} className="flex items-center justify-between p-4 border border-medical-border rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{patient.name}</p>
                      <p className="text-sm text-muted-foreground">{patient.phone}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-primary">{patient.diagnosis}</p>
                    <p className="text-sm text-muted-foreground">{patient.date}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-4 text-center">
              <Button asChild variant="outline">
                <Link to="/search">View All Patients</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Database Integration Notice */}
        <Card className="mt-8 border-medical-border bg-medical-light/50">
          <CardContent className="pt-6">
            <div className="text-center">
              <Stethoscope className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-primary mb-2">
                Ready for Database Integration
              </h3>
              <p className="text-muted-foreground mb-4">
                This system is designed to work with Supabase for secure patient data storage, 
                search functionality, and comprehensive analytics.
              </p>
              <p className="text-sm text-muted-foreground">
                Currently running in demo mode with sample data.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
