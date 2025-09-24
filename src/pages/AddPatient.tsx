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
import { PatientIdentitySection } from "@/components/forms/PatientIdentitySection";
import { DermatologicExaminationSection } from "@/components/forms/DermatologicExaminationSection";
import { DiagnosisSection } from "@/components/forms/DiagnosisSection";
import { TreatmentSection } from "@/components/forms/TreatmentSection";

const AddPatient = () => {
  const [patientData, setPatientData] = useState({
    // Patient Identity
    name: "",
    age: "",
    sex: "",
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
      sats: false,
      investigationDetails: ""
    },
    
    // Medical History
    provocativeFactors: "",
    relievingFactors: "",
    medicalIllnesses: "",
    surgicalIllnesses: "",
    vaccines: false,
    vaccineDetails: "",
    
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
      travel: "",
      address: ""
    },
    
    // Women-specific
    womenHistory: {
      maritalStatus: "",
      pregnant: false,
      pregnantDetails: "",
      breastfeeding: false,
      breastfeedingDetails: "",
      children: "",
      childrenMale: "",
      childrenFemale: "",
      menstruating: false
    },
    
    // GPE
    gpe: {
      temperature: "",
      respiration: "",
      bodySurfaceArea: "",
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
    reviewOfFinalDiagnosis: [],
    
    // Treatment
    treatmentPrescribed: "",
    treatmentRecords: []
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
          {/* Patient Identity */}
          <PatientIdentitySection 
            data={patientData} 
            onChange={handleInputChange} 
          />

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
                  placeholder="e.g., 2 weeks, 3 months"
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
                  <Textarea
                    id="howSpread"
                    value={patientData.howSpread}
                    onChange={(e) => handleInputChange("howSpread", e.target.value)}
                    rows={2}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <div>
                  <Label htmlFor="evolutionLesions">Evolution of the basic lesions?</Label>
                  <Textarea
                    id="evolutionLesions"
                    value={patientData.evolutionLesions}
                    onChange={(e) => handleInputChange("evolutionLesions", e.target.value)}
                    rows={2}
                  />
                </div>
                <div>
                  <Label htmlFor="anatomicalSpread">Order of anatomical spread?</Label>
                  <Textarea
                    id="anatomicalSpread"
                    value={patientData.anatomicalSpread}
                    onChange={(e) => handleInputChange("anatomicalSpread", e.target.value)}
                    rows={2}
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
              <CardTitle className="text-primary">Investigations Undergone So Far</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
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
                      checked={!!patientData.investigations[key as keyof typeof patientData.investigations]}
                      onCheckedChange={(checked) => 
                        handleNestedChange("investigations", key, !!checked)
                      }
                    />
                    <Label htmlFor={key} className="text-sm">{label}</Label>
                  </div>
                ))}
              </div>
              <div>
                <Label htmlFor="investigationDetails">Investigation Details</Label>
                <Textarea
                  id="investigationDetails"
                  value={patientData.investigations.investigationDetails}
                  onChange={(e) => handleNestedChange("investigations", "investigationDetails", e.target.value)}
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>

          {/* Medical History */}
          <Card>
            <CardHeader>
              <CardTitle className="text-primary">Medical History</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="provocativeFactors">Provocative factors</Label>
                <Textarea
                  id="provocativeFactors"
                  value={patientData.provocativeFactors}
                  onChange={(e) => handleInputChange("provocativeFactors", e.target.value)}
                  rows={2}
                />
              </div>
              <div>
                <Label htmlFor="relievingFactors">Relieving factors</Label>
                <Textarea
                  id="relievingFactors"
                  value={patientData.relievingFactors}
                  onChange={(e) => handleInputChange("relievingFactors", e.target.value)}
                  rows={2}
                />
              </div>
              <div>
                <Label htmlFor="medicalIllnesses">Medical illnesses</Label>
                <Textarea
                  id="medicalIllnesses"
                  value={patientData.medicalIllnesses}
                  onChange={(e) => handleInputChange("medicalIllnesses", e.target.value)}
                  rows={2}
                />
              </div>
              <div>
                <Label htmlFor="surgicalIllnesses">Surgical illnesses, injuries, accident</Label>
                <Textarea
                  id="surgicalIllnesses"
                  value={patientData.surgicalIllnesses}
                  onChange={(e) => handleInputChange("surgicalIllnesses", e.target.value)}
                  rows={2}
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="vaccines"
                    checked={!!patientData.vaccines}
                    onCheckedChange={(checked) => handleInputChange("vaccines", !!checked)}
                  />
                  <Label htmlFor="vaccines">Vaccines, hyposensitisation</Label>
                </div>
                {patientData.vaccines && (
                  <Textarea
                    value={patientData.vaccineDetails}
                    onChange={(e) => handleInputChange("vaccineDetails", e.target.value)}
                    placeholder="Vaccine details..."
                    rows={2}
                  />
                )}
              </div>
            </CardContent>
          </Card>

          {/* Allergies */}
          <Card>
            <CardHeader>
              <CardTitle className="text-primary">History of Allergies</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {["drug", "food", "others"].map((allergyType) => (
                <div key={allergyType} className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id={`allergy${allergyType}`}
                      checked={!!patientData.allergies[allergyType as keyof typeof patientData.allergies]}
                      onCheckedChange={(checked) => 
                        handleNestedChange("allergies", allergyType, !!checked)
                      }
                    />
                    <Label htmlFor={`allergy${allergyType}`} className="capitalize">{allergyType} Allergy</Label>
                  </div>
                  {patientData.allergies[allergyType as keyof typeof patientData.allergies] && (
                    <Textarea
                      value={patientData.allergies[`${allergyType}Details` as keyof typeof patientData.allergies] as string}
                      onChange={(e) => handleNestedChange("allergies", `${allergyType}Details`, e.target.value)}
                      placeholder={`${allergyType} allergy details...`}
                      rows={2}
                    />
                  )}
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Atopy History */}
          <Card>
            <CardHeader>
              <CardTitle className="text-primary">History of Atopy</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="wheezing"
                    checked={patientData.atopy.wheezing}
                    onCheckedChange={(checked) => handleNestedChange("atopy", "wheezing", checked)}
                  />
                  <Label htmlFor="wheezing">Wheezing illness</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="sneezing"
                    checked={patientData.atopy.sneezing}
                    onCheckedChange={(checked) => handleNestedChange("atopy", "sneezing", checked)}
                  />
                  <Label htmlFor="sneezing">Sneezing illness</Label>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Medications */}
          <Card>
            <CardHeader>
              <CardTitle className="text-primary">Medications</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="currentMedication">Current medication (for skin disease)</Label>
                <Textarea
                  id="currentMedication"
                  value={patientData.currentMedication}
                  onChange={(e) => handleInputChange("currentMedication", e.target.value)}
                  rows={2}
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="concomitantMedication"
                    checked={!!patientData.concomitantMedication}
                    onCheckedChange={(checked) => handleInputChange("concomitantMedication", !!checked)}
                  />
                  <Label htmlFor="concomitantMedication">Concomitant medication (for other disease)</Label>
                </div>
                {patientData.concomitantMedication && (
                  <Textarea
                    value={patientData.concomitantDetails}
                    onChange={(e) => handleInputChange("concomitantDetails", e.target.value)}
                    placeholder="Concomitant medication details..."
                    rows={2}
                  />
                )}
              </div>
              <div className="space-y-2">
                <Label className="font-medium">Long term medication</Label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {Object.entries({
                    hp: "HP",
                    dm: "DM", 
                    pt: "PT",
                    ep: "EP"
                  }).map(([key, label]) => (
                    <div key={key} className="flex items-center space-x-2">
                      <Checkbox
                        id={`longTerm${key}`}
                        checked={!!patientData.longTermMedication[key as keyof typeof patientData.longTermMedication]}
                        onCheckedChange={(checked) => 
                          handleNestedChange("longTermMedication", key, !!checked)
                        }
                      />
                      <Label htmlFor={`longTerm${key}`}>{label}</Label>
                    </div>
                  ))}
                </div>
                <Textarea
                  value={patientData.longTermMedication.details}
                  onChange={(e) => handleNestedChange("longTermMedication", "details", e.target.value)}
                  placeholder="Long term medication details..."
                  rows={2}
                />
              </div>
            </CardContent>
          </Card>

          {/* Family History */}
          <Card>
            <CardHeader>
              <CardTitle className="text-primary">Family History</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="familySkinDisease"
                    checked={patientData.familyHistory.skinDisease}
                    onCheckedChange={(checked) => handleNestedChange("familyHistory", "skinDisease", checked)}
                  />
                  <Label htmlFor="familySkinDisease">Skin disease</Label>
                </div>
                {patientData.familyHistory.skinDisease && (
                  <Textarea
                    value={patientData.familyHistory.skinDiseaseDetails}
                    onChange={(e) => handleNestedChange("familyHistory", "skinDiseaseDetails", e.target.value)}
                    placeholder="Skin disease details..."
                    rows={2}
                  />
                )}
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="familySimilarDisease"
                    checked={patientData.familyHistory.similarDisease}
                    onCheckedChange={(checked) => handleNestedChange("familyHistory", "similarDisease", checked)}
                  />
                  <Label htmlFor="familySimilarDisease">Similar disease</Label>
                </div>
                {patientData.familyHistory.similarDisease && (
                  <Textarea
                    value={patientData.familyHistory.similarDiseaseDetails}
                    onChange={(e) => handleNestedChange("familyHistory", "similarDiseaseDetails", e.target.value)}
                    placeholder="Similar disease details..."
                    rows={2}
                  />
                )}
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="familyDiabetes"
                  checked={patientData.familyHistory.diabetes}
                  onCheckedChange={(checked) => handleNestedChange("familyHistory", "diabetes", checked)}
                />
                <Label htmlFor="familyDiabetes">Diabetes</Label>
              </div>
            </CardContent>
          </Card>

          {/* Social History */}
          <Card>
            <CardHeader>
              <CardTitle className="text-primary">Social History</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="occupation">Occupation</Label>
                  <Input
                    id="occupation"
                    value={patientData.socialHistory.occupation}
                    onChange={(e) => handleNestedChange("socialHistory", "occupation", e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="hobbies">Hobbies</Label>
                  <Input
                    id="hobbies"
                    value={patientData.socialHistory.hobbies}
                    onChange={(e) => handleNestedChange("socialHistory", "hobbies", e.target.value)}
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="exposure">Exposure / Physical contactants</Label>
                <Textarea
                  id="exposure"
                  value={patientData.socialHistory.exposure}
                  onChange={(e) => handleNestedChange("socialHistory", "exposure", e.target.value)}
                  rows={2}
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="riskSTD"
                    checked={patientData.socialHistory.riskSTD}
                    onCheckedChange={(checked) => handleNestedChange("socialHistory", "riskSTD", checked)}
                  />
                  <Label htmlFor="riskSTD">Risk of STD</Label>
                </div>
                {patientData.socialHistory.riskSTD && (
                  <Textarea
                    value={patientData.socialHistory.riskSTDDetails}
                    onChange={(e) => handleNestedChange("socialHistory", "riskSTDDetails", e.target.value)}
                    placeholder="STD risk details..."
                    rows={2}
                  />
                )}
              </div>
              <div>
                <Label htmlFor="travel">Travel</Label>
                <Textarea
                  id="travel"
                  value={patientData.socialHistory.travel}
                  onChange={(e) => handleNestedChange("socialHistory", "travel", e.target.value)}
                  rows={2}
                />
              </div>
              <div>
                <Label htmlFor="address">Address</Label>
                <Textarea
                  id="address"
                  value={patientData.socialHistory.address}
                  onChange={(e) => handleNestedChange("socialHistory", "address", e.target.value)}
                  rows={2}
                />
              </div>
            </CardContent>
          </Card>

          {/* Women-specific History */}
          {patientData.sex === "F" && (
            <Card>
              <CardHeader>
                <CardTitle className="text-primary">Women-specific History</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="maritalStatus">Marital Status</Label>
                  <Select onValueChange={(value) => handleNestedChange("womenHistory", "maritalStatus", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select marital status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Single">Single</SelectItem>
                      <SelectItem value="Married">Married</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="pregnant"
                      checked={patientData.womenHistory.pregnant}
                      onCheckedChange={(checked) => handleNestedChange("womenHistory", "pregnant", checked)}
                    />
                    <Label htmlFor="pregnant">Pregnant</Label>
                  </div>
                  {patientData.womenHistory.pregnant && (
                    <Input
                      value={patientData.womenHistory.pregnantDetails}
                      onChange={(e) => handleNestedChange("womenHistory", "pregnantDetails", e.target.value)}
                      placeholder="Pregnancy details..."
                    />
                  )}
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="breastfeeding"
                      checked={patientData.womenHistory.breastfeeding}
                      onCheckedChange={(checked) => handleNestedChange("womenHistory", "breastfeeding", checked)}
                    />
                    <Label htmlFor="breastfeeding">Breast feeding</Label>
                  </div>
                  {patientData.womenHistory.breastfeeding && (
                    <Input
                      value={patientData.womenHistory.breastfeedingDetails}
                      onChange={(e) => handleNestedChange("womenHistory", "breastfeedingDetails", e.target.value)}
                      placeholder="Breastfeeding details..."
                    />
                  )}
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="childrenMale">Children - Male</Label>
                    <Input
                      id="childrenMale"
                      type="number"
                      value={patientData.womenHistory.childrenMale}
                      onChange={(e) => handleNestedChange("womenHistory", "childrenMale", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="childrenFemale">Children - Female</Label> 
                    <Input
                      id="childrenFemale"
                      type="number"
                      value={patientData.womenHistory.childrenFemale}
                      onChange={(e) => handleNestedChange("womenHistory", "childrenFemale", e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="menstruating"
                    checked={patientData.womenHistory.menstruating}
                    onCheckedChange={(checked) => handleNestedChange("womenHistory", "menstruating", checked)}
                  />
                  <Label htmlFor="menstruating">Menstruating</Label>
                </div>
              </CardContent>
            </Card>
          )}

          {/* General Physical Examination */}
          <Card>
            <CardHeader>
              <CardTitle className="text-primary">General Physical Examination (GPE)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
                  <Label htmlFor="bodySurfaceArea">Body Surface Area</Label>
                  <Input
                    id="bodySurfaceArea"
                    value={patientData.gpe.bodySurfaceArea}
                    onChange={(e) => handleNestedChange("gpe", "bodySurfaceArea", e.target.value)}
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
                  <Label htmlFor="height">Height (cm)</Label>
                  <Input
                    id="height"
                    type="number"
                    value={patientData.gpe.height}
                    onChange={(e) => handleNestedChange("gpe", "height", e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="bp">Blood Pressure</Label>
                  <Input
                    id="bp"
                    value={patientData.gpe.bp}
                    onChange={(e) => handleNestedChange("gpe", "bp", e.target.value)}
                    placeholder="e.g., 120/80"
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
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="lymphNodes"
                    checked={patientData.gpe.lymphNodes}
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
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="hepatomegaly"
                    checked={patientData.gpe.hepatomegaly}
                    onCheckedChange={(checked) => handleNestedChange("gpe", "hepatomegaly", checked)}
                  />
                  <Label htmlFor="hepatomegaly">Hepatomegaly</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="splenomegaly"
                    checked={patientData.gpe.splenomegaly}
                    onCheckedChange={(checked) => handleNestedChange("gpe", "splenomegaly", checked)}
                  />
                  <Label htmlFor="splenomegaly">Splenomegaly</Label>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Illness Syndromes */}
          <Card>
            <CardHeader>
              <CardTitle className="text-primary">Illness Syndromes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="acuteIllness"
                    checked={patientData.acuteIllness}
                    onCheckedChange={(checked) => handleInputChange("acuteIllness", checked)}
                  />
                  <Label htmlFor="acuteIllness">Acute illness syndrome</Label>
                </div>
                {patientData.acuteIllness && (
                  <Textarea
                    value={patientData.acuteIllnessDetails}
                    onChange={(e) => handleInputChange("acuteIllnessDetails", e.target.value)}
                    placeholder="Fever, chills, headache, sweat, vomiting etc..."
                    rows={2}
                  />
                )}
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="chronicIllness"
                    checked={patientData.chronicIllness}
                    onCheckedChange={(checked) => handleInputChange("chronicIllness", checked)}
                  />
                  <Label htmlFor="chronicIllness">Chronic illness syndrome</Label>
                </div>
                {patientData.chronicIllness && (
                  <Textarea
                    value={patientData.chronicIllnessDetails}
                    onChange={(e) => handleInputChange("chronicIllnessDetails", e.target.value)}
                    placeholder="Fatigue, anorexia, weight loss, malaise..."
                    rows={2}
                  />
                )}
              </div>
            </CardContent>
          </Card>

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
                      checked={patientData.systemsReview[key as keyof typeof patientData.systemsReview]}
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
                      checked={patientData.specialProcedures[key as keyof typeof patientData.specialProcedures]}
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
              <div className="text-center p-8 border-2 border-dashed rounded-lg">
                <p className="text-muted-foreground">
                  Photo upload functionality will be available once Supabase is connected for file storage.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Diagnoses */}
          <DiagnosisSection 
            data={patientData}
            onChange={handleInputChange}
          />

          {/* Treatment */}
          <TreatmentSection 
            data={patientData}
            onChange={handleInputChange}
          />

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