import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Search, User, Phone, Calendar, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const SearchPatient = () => {
  const [searchPhone, setSearchPhone] = useState("");
  const [searchResults, setSearchResults] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  const { toast } = useToast();

  // Mock patient data for demonstration
  const mockPatientData = {
    name: "John Doe",
    age: "35",
    gender: "M",
    phone: "1234567890",
    fileNo: "PT001",
    date: "2024-01-15",
    complaints: "Rash on arms and legs, itching for 2 weeks",
    duration: "2 weeks",
    provisionalDiagnosis: "Contact dermatitis",
    finalDiagnosis: "Allergic contact dermatitis",
    treatmentPrescribed: "Topical corticosteroids, antihistamines"
  };

  const handleSearch = async () => {
    if (!searchPhone.trim()) {
      toast({
        title: "Missing Information",
        description: "Please enter a phone number to search",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      if (searchPhone === "1234567890") {
        setSearchResults(mockPatientData);
        toast({
          title: "Patient Found",
          description: "Patient record retrieved successfully",
        });
      } else {
        setSearchResults(null);
        toast({
          title: "No Results",
          description: "No patient found with this phone number",
          variant: "destructive"
        });
      }
      setIsLoading(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Search Patient</h1>
          <p className="text-muted-foreground">Find patient records by phone number</p>
        </div>

        {/* Search Section */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-primary flex items-center gap-2">
              <Search className="h-5 w-5" />
              Patient Search
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4 items-end">
              <div className="flex-1">
                <Label htmlFor="searchPhone">Phone Number</Label>
                <Input
                  id="searchPhone"
                  type="tel"
                  placeholder="Enter patient's phone number"
                  value={searchPhone}
                  onChange={(e) => setSearchPhone(e.target.value)}
                  onKeyPress={handleKeyPress}
                />
              </div>
              <Button 
                onClick={handleSearch}
                disabled={isLoading}
                className="bg-primary hover:bg-primary/90"
              >
                {isLoading ? "Searching..." : "Search"}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Search Results */}
        {searchResults && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-primary flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Patient Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-sm font-medium text-muted-foreground">Name</Label>
                    <p className="text-lg font-semibold">{searchResults.name}</p>
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-muted-foreground">Age</Label>
                    <p className="text-lg">{searchResults.age} years</p>
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-muted-foreground">Gender</Label>
                    <p className="text-lg">{searchResults.gender === 'M' ? 'Male' : 'Female'}</p>
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-muted-foreground">Phone</Label>
                    <p className="text-lg flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      {searchResults.phone}
                    </p>
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-muted-foreground">File Number</Label>
                    <p className="text-lg">{searchResults.fileNo}</p>
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-muted-foreground">Date</Label>
                    <p className="text-lg flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {searchResults.date}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-primary flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Medical Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label className="text-sm font-medium text-muted-foreground">Chief Complaints</Label>
                  <p className="text-base">{searchResults.complaints}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium text-muted-foreground">Duration</Label>
                  <p className="text-base">{searchResults.duration}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium text-muted-foreground">Provisional Diagnosis</Label>
                  <p className="text-base font-medium text-primary">{searchResults.provisionalDiagnosis}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium text-muted-foreground">Final Diagnosis</Label>
                  <p className="text-base font-medium text-success">{searchResults.finalDiagnosis}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium text-muted-foreground">Treatment Prescribed</Label>
                  <p className="text-base">{searchResults.treatmentPrescribed}</p>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-between">
              <Button variant="outline">
                View Full Record
              </Button>
              <Button className="bg-primary hover:bg-primary/90">
                Edit Patient
              </Button>
            </div>
          </div>
        )}

        {/* Demo Notice */}
        <Card className="mt-6 border-medical-border">
          <CardContent className="pt-6">
            <div className="text-center text-muted-foreground">
              <p className="text-sm">
                <strong>Demo Mode:</strong> Try searching with phone number "1234567890" to see sample data.
                <br />
                Connect to Supabase to enable real database functionality.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SearchPatient;