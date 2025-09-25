import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import { PatientIdentitySection } from "@/components/forms/PatientIdentitySection";
import { HistorySection } from "@/components/forms/HistorySection";
import { FamilyHistorySection } from "@/components/forms/FamilyHistorySection";
import { SocialHistorySection } from "@/components/forms/SocialHistorySection";
import { IllnessSyndromeSection } from "@/components/forms/IllnessSyndromeSection";
import { DermatologicExaminationSection } from "@/components/forms/DermatologicExaminationSection";
import { DiagnosisSection } from "@/components/forms/DiagnosisSection";
import { TreatmentSection } from "@/components/forms/TreatmentSection";

const AddPatient = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [patientData, setPatientData] = useState({
    // Patient Identity
    name: "",
    age: "",
    sex: "",
    phone: "",
    fileNo: "",
    date: "",
    
    // Complaints & Duration
    complaints: "",
    duration: "",
    
    // History
    history: {},
    
    // Family History
    familyHistory: {},
    
    // Social History
    socialHistory: {},
    
    // General Physical Examination
    gpe: {
      temperature: "",
      respiration: "",
      bodyArea: "",
      pulse: "",
      height: "",
      bp: "",
      weight: "",
      lymphNodes: false,
      lymphNodesDetails: "",
      hepatomegaly: false,
      splenomegaly: false
    },
    
    // Illness Syndromes
    acuteIllness: {},
    chronicIllness: {},
    
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
    
    // Dermatologic Examination
    dermatologicExam: {},
    
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
      patchTest: false,
      procedureNotes: ""
    },
    
    // Clinical Photographs
    clinicalPhotos: [],
    
    // Diagnoses
    provisionalDiagnosis: "",
    differentialDiagnosis: [],
    histopathologicalDiagnosis: "",
    workingDiagnosis: "",
    finalDiagnosis: [],
    reviewFinalDiagnosis: [],
    
    // Treatment
    treatmentPrescribed: "",
    treatmentRecords: []
  });

  const handleInputChange = (field: string, value: any) => {
    setPatientData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleNestedChange = (section: string, field: string, value: any) => {
    setPatientData(prev => ({
      ...prev,
      [section]: {
        ...(prev[section as keyof typeof prev] as any),
        [field]: value
      }
    }));
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
          {/* Patient Identity */}
          <PatientIdentitySection 
            data={patientData} 
            onChange={handleInputChange} 
          />

          {/* Complaints */}
          <Card>
            <CardHeader>
              <CardTitle className="text-primary">Complaints</CardTitle>
            </CardHeader>
            <CardContent>
              <div>
                <Label htmlFor="complaints">Complaints</Label>
                <Textarea
                  id="complaints"
                  value={patientData.complaints}
                  onChange={(e) => handleInputChange("complaints", e.target.value)}
                  rows={4}
                  placeholder="Patient's main complaints..."
                />
              </div>
            </CardContent>
          </Card>

          {/* Duration */}
          <Card>
            <CardHeader>
              <CardTitle className="text-primary">Duration</CardTitle>
            </CardHeader>
            <CardContent>
              <div>
                <Label htmlFor="duration">Duration</Label>
                <Input
                  id="duration"
                  value={patientData.duration}
                  onChange={(e) => handleInputChange("duration", e.target.value)}
                  placeholder="Duration of symptoms (e.g., 2 weeks, 3 months)"
                />
              </div>
            </CardContent>
          </Card>

          {/* History */}
          <HistorySection 
            data={patientData} 
            onChange={handleInputChange}
            onNestedChange={handleNestedChange}
          />

          {/* Family History */}
          <FamilyHistorySection 
            data={patientData} 
            onChange={handleInputChange}
            onNestedChange={handleNestedChange}
          />

          {/* Social History */}
          <SocialHistorySection 
            data={patientData} 
            onChange={handleInputChange}
            onNestedChange={handleNestedChange}
          />

          {/* General Physical Examination */}
          <Card>
            <CardHeader>
              <CardTitle className="text-primary">General Physical Examination (GPE)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <Label htmlFor="temperature">Temperature (°C)</Label>
                  <Input
                    id="temperature"
                    type="number"
                    step="0.1"
                    value={patientData.gpe.temperature}
                    onChange={(e) => handleNestedChange("gpe", "temperature", e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="respiration">Respiration</Label>
                  <Input
                    id="respiration"
                    type="number"
                    value={patientData.gpe.respiration}
                    onChange={(e) => handleNestedChange("gpe", "respiration", e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="pulse">Pulse</Label>
                  <Input
                    id="pulse"
                    type="number"
                    value={patientData.gpe.pulse}
                    onChange={(e) => handleNestedChange("gpe", "pulse", e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="bp">Blood Pressure</Label>
                  <Input
                    id="bp"
                    value={patientData.gpe.bp}
                    onChange={(e) => handleNestedChange("gpe", "bp", e.target.value)}
                    placeholder="120/80"
                  />
                </div>
                <div>
                  <Label htmlFor="height">Height (cm)</Label>
                  <Input
                    id="height"
                    type="number"
                    value={patientData.gpe.height}
                    onChange={(e) => handleNestedChange("gpe", "height", e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="weight">Weight (kg)</Label>
                  <Input
                    id="weight"
                    type="number"
                    step="0.1"
                    value={patientData.gpe.weight}
                    onChange={(e) => handleNestedChange("gpe", "weight", e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="bodyArea">Body Surface Area</Label>
                  <Input
                    id="bodyArea"
                    value={patientData.gpe.bodyArea}
                    onChange={(e) => handleNestedChange("gpe", "bodyArea", e.target.value)}
                  />
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="lymphNodes"
                      checked={!!patientData.gpe.lymphNodes}
                      onCheckedChange={(checked) => handleNestedChange("gpe", "lymphNodes", checked)}
                    />
                    <Label htmlFor="lymphNodes">Lymph Nodes</Label>
                  </div>
                  {patientData.gpe.lymphNodes && (
                    <Textarea
                      value={patientData.gpe.lymphNodesDetails}
                      onChange={(e) => handleNestedChange("gpe", "lymphNodesDetails", e.target.value)}
                      placeholder="Lymph nodes details..."
                      rows={2}
                    />
                  )}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="hepatomegaly"
                      checked={!!patientData.gpe.hepatomegaly}
                      onCheckedChange={(checked) => handleNestedChange("gpe", "hepatomegaly", checked)}
                    />
                    <Label htmlFor="hepatomegaly">Hepatomegaly</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="splenomegaly"
                      checked={!!patientData.gpe.splenomegaly}
                      onCheckedChange={(checked) => handleNestedChange("gpe", "splenomegaly", checked)}
                    />
                    <Label htmlFor="splenomegaly">Splenomegaly</Label>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Acute & Chronic Illness Syndrome */}
          <IllnessSyndromeSection 
            data={patientData} 
            onChange={handleInputChange}
            onNestedChange={handleNestedChange}
          />

          {/* Systems Review */}
          <Card>
            <CardHeader>
              <CardTitle className="text-primary">Systems Review</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {Object.entries({
                rs: "Respiratory System (RS)",
                cvs: "Cardiovascular System (CVS)",
                cns: "Central Nervous System (CNS)",
                pa: "Per Abdomen (PA)"
              }).map(([key, label]) => (
                <div key={key} className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id={key}
                      checked={!!patientData.systemsReview[key as keyof typeof patientData.systemsReview]}
                      onCheckedChange={(checked) => handleNestedChange("systemsReview", key, checked)}
                    />
                    <Label htmlFor={key}>{label}</Label>
                  </div>
                  {patientData.systemsReview[key as keyof typeof patientData.systemsReview] && (
                    <Textarea
                      value={patientData.systemsReview[`${key}Details` as keyof typeof patientData.systemsReview] as string}
                      onChange={(e) => handleNestedChange("systemsReview", `${key}Details`, e.target.value)}
                      placeholder={`${label} details...`}
                      rows={2}
                    />
                  )}
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Dermatologic Examination */}
          <DermatologicExaminationSection 
            data={patientData} 
            onChange={handleInputChange}
            onNestedChange={handleNestedChange}
          />

          {/* Special Procedures */}
          <Card>
            <CardHeader>
              <CardTitle className="text-primary">Special Procedures</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {Object.entries({
                  biopsy: "Biopsy",
                  gramsStain: "Gram's stain",
                  kohMount: "KOH Mount",
                  tzanckSmear: "Tzanck smear",
                  culture: "Culture",
                  phototest: "Phototest",
                  photopatchTest: "Photopatch test",
                  slitSmear: "Slit smear",
                  crushSmear: "Crush smear",
                  prickTest: "Prick test",
                  shortContactPatch: "Short contact patch test",
                  patchTest: "Patch test",
                  urticariaTests: "Tests for urticarias"
                }).map(([key, label]) => (
                  <div key={key} className="flex items-center space-x-2">
                    <Checkbox
                      id={key}
                      checked={!!patientData.specialProcedures[key as keyof typeof patientData.specialProcedures]}
                      onCheckedChange={(checked) => 
                        handleNestedChange("specialProcedures", key, checked)
                      }
                    />
                    <Label htmlFor={key} className="text-sm">{label}</Label>
                  </div>
                ))}
              </div>
              <div>
                <Label htmlFor="procedureNotes">Procedure Notes</Label>
                <Textarea
                  id="procedureNotes"
                  value={patientData.specialProcedures.procedureNotes}
                  onChange={(e) => handleNestedChange("specialProcedures", "procedureNotes", e.target.value)}
                  rows={3}
                  placeholder="Additional procedure notes..."
                />
              </div>
            </CardContent>
          </Card>

          {/* Clinical Photographs */}
          <Card>
            <CardHeader>
              <CardTitle className="text-primary">Clinical Photographs</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">Upload clinical photographs with dates and captions</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map((num) => (
                    <div key={num} className="border rounded-lg p-4 space-y-2">
                      <Label className="font-medium">Photo {num}</Label>
                      <Input
                        type="file"
                        accept="image/*"
                        className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-primary-foreground hover:file:bg-primary/90"
                      />
                      <Input
                        type="date"
                        placeholder="Photo date"
                      />
                      <Input
                        placeholder="Caption"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Diagnosis */}
          <DiagnosisSection 
            data={patientData} 
            onChange={handleInputChange}
          />

          {/* Treatment */}
          <TreatmentSection 
            data={patientData} 
            onChange={handleInputChange}
          />

          {/* Submit Button */}
          <div className="flex gap-4">
            <Button type="submit" size="lg" className="flex-1">
              Save Patient Data
            </Button>
            <Button 
              type="button" 
              variant="outline" 
              size="lg"
              onClick={() => navigate("/")}
            >
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPatient;