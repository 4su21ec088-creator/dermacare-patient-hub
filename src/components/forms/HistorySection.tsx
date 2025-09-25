import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface HistorySectionProps {
  data: any;
  onChange: (field: string, value: any) => void;
  onNestedChange: (section: string, field: string, value: any) => void;
}

export const HistorySection = ({ data, onChange, onNestedChange }: HistorySectionProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-primary">History</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Itchy or Non-Itchy */}
        <div className="space-y-4">
          <Label className="text-base font-semibold">Itchy or Non-Itchy</Label>
          <div className="flex gap-6">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="itchy"
                checked={!!data.history?.itchy}
                onCheckedChange={(checked) => onNestedChange("history", "itchy", checked)}
              />
              <Label htmlFor="itchy">Itchy</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="nonItchy"
                checked={!!data.history?.nonItchy}
                onCheckedChange={(checked) => onNestedChange("history", "nonItchy", checked)}
              />
              <Label htmlFor="nonItchy">Non-Itchy</Label>
            </div>
          </div>
          {(data.history?.itchy || data.history?.nonItchy) && (
            <Textarea
              value={data.history?.itchyDetails || ""}
              onChange={(e) => onNestedChange("history", "itchyDetails", e.target.value)}
              placeholder="Details about itchy/non-itchy condition..."
              rows={2}
            />
          )}
        </div>

        {/* Where did it start */}
        <div>
          <Label htmlFor="whereStarted">Where did it start?</Label>
          <Input
            id="whereStarted"
            value={data.history?.whereStarted || ""}
            onChange={(e) => onNestedChange("history", "whereStarted", e.target.value)}
            placeholder="Location where condition started..."
          />
        </div>

        {/* How has it spread */}
        <div>
          <Label htmlFor="howSpread">How has it spread?</Label>
          <Textarea
            id="howSpread"
            value={data.history?.howSpread || ""}
            onChange={(e) => onNestedChange("history", "howSpread", e.target.value)}
            placeholder="Description of spread pattern..."
            rows={3}
          />
        </div>

        {/* Evolution of basic lesions */}
        <div>
          <Label htmlFor="evolutionLesions">Evolution of the basic lesions?</Label>
          <Textarea
            id="evolutionLesions"
            value={data.history?.evolutionLesions || ""}
            onChange={(e) => onNestedChange("history", "evolutionLesions", e.target.value)}
            placeholder="Evolution of lesions..."
            rows={3}
          />
        </div>

        {/* Order of anatomical spread */}
        <div>
          <Label htmlFor="anatomicalSpread">Order of anatomical spread?</Label>
          <Textarea
            id="anatomicalSpread"
            value={data.history?.anatomicalSpread || ""}
            onChange={(e) => onNestedChange("history", "anatomicalSpread", e.target.value)}
            placeholder="Order of anatomical spread..."
            rows={3}
          />
        </div>

        {/* Treatment Taken */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="treatmentTaken"
              checked={!!data.history?.treatmentTaken}
              onCheckedChange={(checked) => onNestedChange("history", "treatmentTaken", checked)}
            />
            <Label htmlFor="treatmentTaken" className="text-base font-semibold">Treatment Taken</Label>
          </div>
          
          {data.history?.treatmentTaken && (
            <>
              <Textarea
                value={data.history?.treatmentDetails || ""}
                onChange={(e) => onNestedChange("history", "treatmentDetails", e.target.value)}
                placeholder="General treatment details..."
                rows={2}
              />
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {Object.entries({
                  gp: "GP",
                  derm: "DERM",
                  ayurveda: "AYURVEDA",
                  unani: "UNANI",
                  homeo: "HOMEO",
                  sidha: "SIDHA",
                  herbal: "HERBAL",
                  naturopathy: "NATUROPATHY",
                  beautician: "BEAUTICIAN",
                  self: "SELF"
                }).map(([key, label]) => (
                  <div key={key} className="flex items-center space-x-2">
                    <Checkbox
                      id={key}
                      checked={!!data.history?.treatmentSources?.[key]}
                      onCheckedChange={(checked) => onNestedChange("history", `treatmentSources.${key}`, checked)}
                    />
                    <Label htmlFor={key} className="text-sm">{label}</Label>
                  </div>
                ))}
              </div>

              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="medicationOthers"
                    checked={!!data.history?.medicationOthers}
                    onCheckedChange={(checked) => onNestedChange("history", "medicationOthers", checked)}
                  />
                  <Label htmlFor="medicationOthers">MEDICATION, OTHERS - SPECIFY</Label>
                </div>
                {data.history?.medicationOthers && (
                  <Textarea
                    value={data.history?.medicationOthersDetails || ""}
                    onChange={(e) => onNestedChange("history", "medicationOthersDetails", e.target.value)}
                    placeholder="Specify other medications..."
                    rows={2}
                  />
                )}
              </div>
            </>
          )}
        </div>

        {/* Investigation Undergone So Far */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="investigationDone"
              checked={!!data.history?.investigationDone}
              onCheckedChange={(checked) => onNestedChange("history", "investigationDone", checked)}
            />
            <Label htmlFor="investigationDone" className="text-base font-semibold">Investigation Undergone So Far</Label>
          </div>
          
          {data.history?.investigationDone && (
            <>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
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
                      checked={!!data.history?.investigations?.[key]}
                      onCheckedChange={(checked) => onNestedChange("history", `investigations.${key}`, checked)}
                    />
                    <Label htmlFor={key} className="text-sm">{label}</Label>
                  </div>
                ))}
              </div>
              
              <div>
                <Label htmlFor="investigationDetails">Investigation Details</Label>
                <Textarea
                  id="investigationDetails"
                  value={data.history?.investigationDetails || ""}
                  onChange={(e) => onNestedChange("history", "investigationDetails", e.target.value)}
                  placeholder="Investigation details..."
                  rows={3}
                />
              </div>
            </>
          )}
        </div>

        {/* Provocative factors */}
        <div>
          <Label htmlFor="provocativeFactors">Provocative factors</Label>
          <Textarea
            id="provocativeFactors"
            value={data.history?.provocativeFactors || ""}
            onChange={(e) => onNestedChange("history", "provocativeFactors", e.target.value)}
            placeholder="Factors that worsen the condition..."
            rows={3}
          />
        </div>

        {/* Relieving factors */}
        <div>
          <Label htmlFor="relievingFactors">Relieving factors</Label>
          <Textarea
            id="relievingFactors"
            value={data.history?.relievingFactors || ""}
            onChange={(e) => onNestedChange("history", "relievingFactors", e.target.value)}
            placeholder="Factors that improve the condition..."
            rows={3}
          />
        </div>

        {/* Medical illnesses */}
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="medicalIllnesses"
              checked={!!data.history?.medicalIllnesses}
              onCheckedChange={(checked) => onNestedChange("history", "medicalIllnesses", checked)}
            />
            <Label htmlFor="medicalIllnesses" className="text-base font-semibold">Medical illnesses</Label>
          </div>
          {data.history?.medicalIllnesses && (
            <Textarea
              value={data.history?.medicalIllnessesDetails || ""}
              onChange={(e) => onNestedChange("history", "medicalIllnessesDetails", e.target.value)}
              placeholder="Details of medical illnesses..."
              rows={3}
            />
          )}
        </div>

        {/* Surgical illnesses, injuries, accident */}
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="surgicalIllnesses"
              checked={!!data.history?.surgicalIllnesses}
              onCheckedChange={(checked) => onNestedChange("history", "surgicalIllnesses", checked)}
            />
            <Label htmlFor="surgicalIllnesses" className="text-base font-semibold">Surgical illnesses, injuries, accident</Label>
          </div>
          {data.history?.surgicalIllnesses && (
            <Textarea
              value={data.history?.surgicalIllnessesDetails || ""}
              onChange={(e) => onNestedChange("history", "surgicalIllnessesDetails", e.target.value)}
              placeholder="Details of surgical illnesses, injuries, accidents..."
              rows={3}
            />
          )}
        </div>

        {/* Vaccines, hyposensitisation */}
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="vaccines"
              checked={!!data.history?.vaccines}
              onCheckedChange={(checked) => onNestedChange("history", "vaccines", checked)}
            />
            <Label htmlFor="vaccines" className="text-base font-semibold">Vaccines, hyposensitisation</Label>
          </div>
          {data.history?.vaccines && (
            <Textarea
              value={data.history?.vaccinesDetails || ""}
              onChange={(e) => onNestedChange("history", "vaccinesDetails", e.target.value)}
              placeholder="Details of vaccines, hyposensitisation..."
              rows={2}
            />
          )}
        </div>

        {/* H/o Allergies */}
        <div className="space-y-4">
          <Label className="text-base font-semibold">H/o Allergies</Label>
          
          {/* Drug Allergy */}
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="drugAllergy"
                checked={!!data.history?.drugAllergy}
                onCheckedChange={(checked) => onNestedChange("history", "drugAllergy", checked)}
              />
              <Label htmlFor="drugAllergy">Drug Allergy</Label>
            </div>
            {data.history?.drugAllergy && (
              <Textarea
                value={data.history?.drugAllergyDetails || ""}
                onChange={(e) => onNestedChange("history", "drugAllergyDetails", e.target.value)}
                placeholder="Details of drug allergies..."
                rows={2}
              />
            )}
          </div>

          {/* Food Allergy */}
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="foodAllergy"
                checked={!!data.history?.foodAllergy}
                onCheckedChange={(checked) => onNestedChange("history", "foodAllergy", checked)}
              />
              <Label htmlFor="foodAllergy">Food Allergy</Label>
            </div>
            {data.history?.foodAllergy && (
              <Textarea
                value={data.history?.foodAllergyDetails || ""}
                onChange={(e) => onNestedChange("history", "foodAllergyDetails", e.target.value)}
                placeholder="Details of food allergies..."
                rows={2}
              />
            )}
          </div>

          {/* Other Allergies */}
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="otherAllergies"
                checked={!!data.history?.otherAllergies}
                onCheckedChange={(checked) => onNestedChange("history", "otherAllergies", checked)}
              />
              <Label htmlFor="otherAllergies">Other Allergies</Label>
            </div>
            {data.history?.otherAllergies && (
              <Textarea
                value={data.history?.otherAllergiesDetails || ""}
                onChange={(e) => onNestedChange("history", "otherAllergiesDetails", e.target.value)}
                placeholder="Details of other allergies..."
                rows={2}
              />
            )}
          </div>
        </div>

        {/* H/o Atopy */}
        <div className="space-y-4">
          <Label className="text-base font-semibold">H/o Atopy</Label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="wheezingIllness"
                checked={!!data.history?.wheezingIllness}
                onCheckedChange={(checked) => onNestedChange("history", "wheezingIllness", checked)}
              />
              <Label htmlFor="wheezingIllness">Wheezing illness</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="sneezingIllness"
                checked={!!data.history?.sneezingIllness}
                onCheckedChange={(checked) => onNestedChange("history", "sneezingIllness", checked)}
              />
              <Label htmlFor="sneezingIllness">Sneezing illness</Label>
            </div>
          </div>
        </div>

        {/* Current medication */}
        <div>
          <Label htmlFor="currentMedication">Current medication (for skin disease)</Label>
          <Textarea
            id="currentMedication"
            value={data.history?.currentMedication || ""}
            onChange={(e) => onNestedChange("history", "currentMedication", e.target.value)}
            placeholder="Current medications for skin disease..."
            rows={3}
          />
        </div>

        {/* Concomitant medication */}
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="concomitantMedication"
              checked={!!data.history?.concomitantMedication}
              onCheckedChange={(checked) => onNestedChange("history", "concomitantMedication", checked)}
            />
            <Label htmlFor="concomitantMedication" className="text-base font-semibold">Concomitant medication (for other diseases)</Label>
          </div>
          {data.history?.concomitantMedication && (
            <Textarea
              value={data.history?.concomitantMedicationDetails || ""}
              onChange={(e) => onNestedChange("history", "concomitantMedicationDetails", e.target.value)}
              placeholder="Concomitant medications for other diseases..."
              rows={3}
            />
          )}
        </div>

        {/* Long term medication */}
        <div className="space-y-4">
          <Label className="text-base font-semibold">Long term medication</Label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries({
              hp: "HP (Hypertension)",
              dm: "DM (Diabetes Mellitus)",
              pt: "PT (Psychiatric Treatment)",
              ep: "EP (Epilepsy)"
            }).map(([key, label]) => (
              <div key={key} className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id={key}
                    checked={!!data.history?.longTermMedication?.[key]}
                    onCheckedChange={(checked) => onNestedChange("history", `longTermMedication.${key}`, checked)}
                  />
                  <Label htmlFor={key}>{label}</Label>
                </div>
                {data.history?.longTermMedication?.[key] && (
                  <Textarea
                    value={data.history?.longTermMedication?.[`${key}Details`] || ""}
                    onChange={(e) => onNestedChange("history", `longTermMedication.${key}Details`, e.target.value)}
                    placeholder={`${label} details...`}
                    rows={2}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
