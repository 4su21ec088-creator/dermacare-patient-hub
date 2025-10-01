import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UserPlus, Search, BarChart3, Users, Calendar, Stethoscope, FileText } from "lucide-react";

const Index = () => {
  const quickStats = [
    { label: "Total Patients", value: "0", icon: Users, color: "text-primary" },
    { label: "This Month", value: "0", icon: Calendar, color: "text-success" },
    { label: "Pending Reviews", value: "0", icon: FileText, color: "text-orange-500" },
    { label: "Active Cases", value: "0", icon: Stethoscope, color: "text-blue-500" }
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

        {/* System Ready Notice */}
        <Card className="border-medical-border bg-medical-light/50">
          <CardContent className="pt-6">
            <div className="text-center">
              <Stethoscope className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-primary mb-2">
                System Ready for Patient Registration
              </h3>
              <p className="text-muted-foreground mb-4">
                Start adding patient records using the comprehensive dermatology case file form. 
                All data will be stored securely once database integration is enabled.
              </p>
              <Button asChild className="bg-primary hover:bg-primary/90">
                <Link to="/add-patient">Add Your First Patient</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
