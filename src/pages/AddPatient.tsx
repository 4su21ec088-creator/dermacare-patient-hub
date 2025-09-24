import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";

const AddPatient = () => {
  const [patientData, setPatientData] = useState({
    // Basic Info
    name: "",
    age: "",
    gender: "",
    phone: "",
    fileNo: "",
    date: new Date().toISOString().split('T')[0],
    
    // Complaints & Duration
    complaints: "",
    duration: "",
    
    // History
    historyDetails: "",
    isItchy: false,
    whereStarted: "",
    howSpread: "",
    evolutionLesions: "",
    anatomicalSpread: "",
    
    // Treatments taken
    treatments: {
      gp: false,
      derm: false,
      ayurveda: false,
      unani: false,
      homeo: false,
      sidha: false,
      herbal: false,
      naturopathy: false,
      beautician: false,
      self: false,
      others: false,
      othersDetails: ""
    },
    
    // Investigations
    investigations: {
      dna: false,
      nad: false,
      na: false,
      nr: false,
      no: false,
      sbpr: false,
      sats: false
    },
    
    // Medical History
    provocativeFactors: "",
    relievingFactors: "",
    medicalIllnesses: "",
    surgicalIllnesses: "",
    vaccines: false,
    
    // Allergies
    allergies: {
      drug: false,
      drugDetails: "",
      food: false,
      foodDetails: "",
      others: false,
      othersDetails: ""
    },
    
    // Atopy
    atopy: {
      wheezing: false,
      sneezing: false
    },
    
    // Medications
    currentMedication: "",
    concomitantMedication: false,
    concomitantDetails: "",
    longTermMedication: {
      hp: false,
      dm: false,
      pt: false,
      ep: false,
      details: ""
    },
    
    // Family History
    familyHistory: {
      skinDisease: false,
      skinDiseaseDetails: "",
      similarDisease: false,
      similarDiseaseDetails: "",
      diabetes: false
    },
    
    // Social History
    socialHistory: {
      occupation: "",
      hobbies: "",
      exposure: "",
      riskSTD: false,
      riskSTDDetails: "",
      travel: ""
    },
    
    // Women-specific
    womenHistory: {
      maritalStatus: "",
      pregnant: false,
      breastfeeding: false,
      children: "",
      menstruating: false
    },
    
    // GPE
    gpe: {
      temperature: "",
      respiration: "",
      pulse: "",
      bp: "",
      height: "",
      weight: "",
      lymphNodes: false,
      lymphNodesDetails: "",
      hepatomegaly: false,
      splenomegaly: false
    },
    
    // Illness Syndromes
    acuteIllness: false,
    acuteIllnessDetails: "",
    chronicIllness: false,
    chronicIllnessDetails: "",
    
    // Systems Review
    systemsReview: {
      rs: false,
      rsDetails: "",
      cvs: false,
      cvsDetails: "",
      cns: false,
      cnsDetails: "",
      pa: false,
      paDetails: ""
    },
    
    // Dermatologic Examination - Basic Lesions
    basicLesions: {
      crust: false,
      eczemaAcute: false,
      eczemaSubacute: false,
      eczemaChronic: false,
      papule: false,
      pustule: false,
      macule: false,
      purpura: false,
      pits: false,
      patch: false,
      induration: false,
      infarction: false,
      infiltration: false,
      cyst: false,
      alopecia: false,
      atrophy: false,
      lichenification: false,
      erythema: false,
      edema: false,
      hypo: false,
      hyperkeratosis: false,
      diffuse: false,
      nailDystrophy: false,
      nailDiscoloration: false,
      nodule: false,
      sclerosis: false,
      telangiectasis: false,
      tumor: false,
      scar: ""
    },
    
    // Additional examination details
    exudation: false,
    excoriation: false,
    erosion: false,
    fissure: false,
    gangrene: false,
    scales: {
      type: "",
      adherence: "",
      amount: "",
      color: ""
    },
    
    // Special Procedures
    specialProcedures: {
      biopsy: false,
      gramsStain: false,
      kohMount: false,
      tzanckSmear: false,
      culture: false,
      phototest: false,
      photopatchTest: false,
      slitSmear: false,
      crushSmear: false,
      prickTest: false,
      shortContactPatch: false,
      urticariaTests: false,
      patchTest: false
    },
    
    // Diagnoses
    provisionalDiagnosis: "",
    differentialDiagnosis: ["", "", "", "", ""],
    histopathologicalDiagnosis: "",
    workingDiagnosis: "",
    finalDiagnosis: "",
    
    // Treatment
    treatmentPrescribed: ""
  });

  const { toast } = useToast();

  const handleInputChange = (field: string, value: any) => {
    setPatientData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleNestedChange = (parent: string, field: string, value: any) => {
    setPatientData(prev => {
      const parentObject = prev[parent as keyof typeof prev] as any;
      return {
        ...prev,
        [parent]: {
          ...parentObject,
          [field]: value
        }
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!patientData.name || !patientData.phone) {
      toast({
        title: "Missing Information",
        description: "Please fill in required fields: Name and Phone Number",
        variant: "destructive"
      });
      return;
    }
    
    // Here we would normally save to database
    toast({
      title: "Success",
      description: "Patient data saved successfully! Connect Supabase to enable database storage.",
    });
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Add New Patient</h1>
          <p className="text-muted-foreground">Complete dermatology patient examination form</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Information */}
          <Card>
            <CardHeader>
              <CardTitle className="text-primary">Basic Information</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Name *</Label>
                <Input
                  id="name"
                  value={patientData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="age">Age</Label>
                <Input
                  id="age"
                  type="number"
                  value={patientData.age}
                  onChange={(e) => handleInputChange("age", e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="gender">Gender</Label>
                <Select onValueChange={(value) => handleInputChange("gender", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="M">Male</SelectItem>
                    <SelectItem value="F">Female</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  value={patientData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="fileNo">File Number</Label>
                <Input
                  id="fileNo"
                  value={patientData.fileNo}
                  onChange={(e) => handleInputChange("fileNo", e.target.value)}
                  placeholder="Auto-generated"
                />
              </div>
              <div>
                <Label htmlFor="date">Date</Label>
                <Input
                  id="date"
                  type="date"
                  value={patientData.date}
                  onChange={(e) => handleInputChange("date", e.target.value)}
                />
              </div>
            </CardContent>
          </Card>

          {/* Complaints & Duration */}
          <Card>
            <CardHeader>
              <CardTitle className="text-primary">Complaints & Duration</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="complaints">Complaints</Label>
                <Textarea
                  id="complaints"
                  value={patientData.complaints}
                  onChange={(e) => handleInputChange("complaints", e.target.value)}
                  rows={3}
                />
              </div>
              <div>
                <Label htmlFor="duration">Duration</Label>
                <Input
                  id="duration"
                  value={patientData.duration}
                  onChange={(e) => handleInputChange("duration", e.target.value)}
                />
              </div>
            </CardContent>
          </Card>

          {/* History */}
          <Card>
            <CardHeader>
              <CardTitle className="text-primary">History</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="historyDetails">History Details</Label>
                <Textarea
                  id="historyDetails"
                  value={patientData.historyDetails}
                  onChange={(e) => handleInputChange("historyDetails", e.target.value)}
                  rows={3}
                />
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="isItchy"
                  checked={patientData.isItchy}
                  onCheckedChange={(checked) => handleInputChange("isItchy", checked)}
                />
                <Label htmlFor="isItchy">Itchy</Label>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="whereStarted">Where did it start?</Label>
                  <Input
                    id="whereStarted"
                    value={patientData.whereStarted}
                    onChange={(e) => handleInputChange("whereStarted", e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="howSpread">How has it spread?</Label>
                  <Input
                    id="howSpread"
                    value={patientData.howSpread}
                    onChange={(e) => handleInputChange("howSpread", e.target.value)}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Treatment Taken */}
          <Card>
            <CardHeader>
              <CardTitle className="text-primary">Treatment Taken</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {Object.entries({
                  gp: "GP",
                  derm: "Dermatologist",
                  ayurveda: "Ayurveda",
                  unani: "Unani",
                  homeo: "Homeopathy",
                  sidha: "Sidha",
                  herbal: "Herbal",
                  naturopathy: "Naturopathy",
                  beautician: "Beautician",
                  self: "Self Medication",
                  others: "Others"
                }).map(([key, label]) => (
                  <div key={key} className="flex items-center space-x-2">
                    <Checkbox
                      id={key}
                      checked={!!(patientData.treatments[key as keyof typeof patientData.treatments])}
                      onCheckedChange={(checked) => 
                        handleNestedChange("treatments", key, !!checked)
                      }
                    />
                    <Label htmlFor={key} className="text-sm">{label}</Label>
                  </div>
                ))}
              </div>
              
              {patientData.treatments.others && (
                <div className="mt-4">
                  <Label htmlFor="othersDetails">Other Treatment Details</Label>
                  <Input
                    id="othersDetails"
                    value={patientData.treatments.othersDetails}
                    onChange={(e) => handleNestedChange("treatments", "othersDetails", e.target.value)}
                  />
                </div>
              )}
            </CardContent>
          </Card>

          {/* Investigations */}
          <Card>
            <CardHeader>
              <CardTitle className="text-primary">Investigations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {Object.entries({
                  dna: "DNA - Details not available",
                  nad: "NAD - Nothing abnormal detected",
                  na: "NA - Not applicable", 
                  nr: "NR - Not relevant",
                  no: "NO - Not done",
                  sbpr: "SBPR - Suggested but patient refused",
                  sats: "SATS - Same as treatment suggested"
                }).map(([key, label]) => (
                  <div key={key} className="flex items-center space-x-2">
                    <Checkbox
                      id={key}
                      checked={patientData.investigations[key as keyof typeof patientData.investigations]}
                      onCheckedChange={(checked) => 
                        handleNestedChange("investigations", key, checked)
                      }
                    />
                    <Label htmlFor={key} className="text-sm">{label}</Label>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-between">
            <Button type="button" variant="outline">Save Draft</Button>
            <Button type="submit" className="bg-primary hover:bg-primary/90">
              Save Patient Record
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPatient;