import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, X } from "lucide-react";

interface TreatmentSectionProps {
  data: any;
  onChange: (field: string, value: any) => void;
}

export const TreatmentSection = ({ data, onChange }: TreatmentSectionProps) => {
  const addTreatmentRecord = () => {
    const current = data.treatmentRecords || [];
    onChange("treatmentRecords", [...current, { date: "", observation: "", action: "" }]);
  };

  const removeTreatmentRecord = (index: number) => {
    const current = data.treatmentRecords || [];
    onChange("treatmentRecords", current.filter((_: any, i: number) => i !== index));
  };

  const updateTreatmentRecord = (index: number, field: string, value: string) => {
    const current = data.treatmentRecords || [];
    const updated = [...current];
    updated[index] = { ...updated[index], [field]: value };
    onChange("treatmentRecords", updated);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-primary">Treatment</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Treatment Prescribed */}
        <div>
          <Label htmlFor="treatmentPrescribed">Treatment Prescribed</Label>
          <Textarea
            id="treatmentPrescribed"
            value={data.treatmentPrescribed || ""}
            onChange={(e) => onChange("treatmentPrescribed", e.target.value)}
            rows={4}
            placeholder="Describe the treatment prescribed..."
          />
        </div>

        {/* Treatment Records */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Label className="text-base font-semibold">Treatment Records (Chronological)</Label>
            <Button type="button" variant="outline" size="sm" onClick={addTreatmentRecord}>
              <Plus className="h-4 w-4 mr-2" />
              Add Record
            </Button>
          </div>
          
          {(data.treatmentRecords || []).map((record: any, index: number) => (
            <div key={index} className="border rounded-lg p-4 space-y-3">
              <div className="flex items-center justify-between">
                <Label className="font-medium">Record {index + 1}</Label>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => removeTreatmentRecord(index)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <Label htmlFor={`recordDate${index}`}>Date</Label>
                  <Input
                    id={`recordDate${index}`}
                    type="date"
                    value={record.date || ""}
                    onChange={(e) => updateTreatmentRecord(index, "date", e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor={`recordObservation${index}`}>Observation</Label>
                  <Textarea
                    id={`recordObservation${index}`}
                    value={record.observation || ""}
                    onChange={(e) => updateTreatmentRecord(index, "observation", e.target.value)}
                    rows={3}
                    placeholder="Clinical observations..."
                  />
                </div>
                <div>
                  <Label htmlFor={`recordAction${index}`}>Action</Label>
                  <Textarea
                    id={`recordAction${index}`}
                    value={record.action || ""}
                    onChange={(e) => updateTreatmentRecord(index, "action", e.target.value)}
                    rows={3}
                    placeholder="Actions taken..."
                  />
                </div>
              </div>
            </div>
          ))}
          
          {(!data.treatmentRecords || data.treatmentRecords.length === 0) && (
            <p className="text-muted-foreground text-sm">No treatment records added yet.</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};