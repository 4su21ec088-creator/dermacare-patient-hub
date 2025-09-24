import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Plus, X } from "lucide-react";

interface DiagnosisSectionProps {
  data: any;
  onChange: (field: string, value: any) => void;
}

export const DiagnosisSection = ({ data, onChange }: DiagnosisSectionProps) => {
  const addDifferentialDiagnosis = () => {
    const current = data.differentialDiagnosis || [];
    onChange("differentialDiagnosis", [...current, ""]);
  };

  const removeDifferentialDiagnosis = (index: number) => {
    const current = data.differentialDiagnosis || [];
    onChange("differentialDiagnosis", current.filter((_: any, i: number) => i !== index));
  };

  const updateDifferentialDiagnosis = (index: number, value: string) => {
    const current = data.differentialDiagnosis || [];
    const updated = [...current];
    updated[index] = value;
    onChange("differentialDiagnosis", updated);
  };

  const addFinalDiagnosis = () => {
    const current = data.finalDiagnosis || [];
    onChange("finalDiagnosis", [...current, ""]);
  };

  const removeFinalDiagnosis = (index: number) => {
    const current = data.finalDiagnosis || [];
    onChange("finalDiagnosis", current.filter((_: any, i: number) => i !== index));
  };

  const updateFinalDiagnosis = (index: number, value: string) => {
    const current = data.finalDiagnosis || [];
    const updated = [...current];
    updated[index] = value;
    onChange("finalDiagnosis", updated);
  };

  const addReview = () => {
    const current = data.reviewOfFinalDiagnosis || [];
    onChange("reviewOfFinalDiagnosis", [...current, { date: "", notes: "" }]);
  };

  const removeReview = (index: number) => {
    const current = data.reviewOfFinalDiagnosis || [];
    onChange("reviewOfFinalDiagnosis", current.filter((_: any, i: number) => i !== index));
  };

  const updateReview = (index: number, field: string, value: string) => {
    const current = data.reviewOfFinalDiagnosis || [];
    const updated = [...current];
    updated[index] = { ...updated[index], [field]: value };
    onChange("reviewOfFinalDiagnosis", updated);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-primary">Diagnoses</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Provisional Diagnosis */}
        <div>
          <Label htmlFor="provisionalDiagnosis">Provisional Diagnosis</Label>
          <Input
            id="provisionalDiagnosis"
            value={data.provisionalDiagnosis || ""}
            onChange={(e) => onChange("provisionalDiagnosis", e.target.value)}
          />
        </div>

        <Separator />

        {/* Differential Diagnosis */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Label className="text-base font-semibold">Differential Diagnosis</Label>
            <Button type="button" variant="outline" size="sm" onClick={addDifferentialDiagnosis}>
              <Plus className="h-4 w-4 mr-2" />
              Add Differential
            </Button>
          </div>
          
          {(data.differentialDiagnosis || []).map((diagnosis: string, index: number) => (
            <div key={index} className="flex gap-2">
              <Input
                value={diagnosis}
                onChange={(e) => updateDifferentialDiagnosis(index, e.target.value)}
                placeholder={`Differential diagnosis ${index + 1}`}
              />
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => removeDifferentialDiagnosis(index)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ))}
          
          {(!data.differentialDiagnosis || data.differentialDiagnosis.length === 0) && (
            <p className="text-muted-foreground text-sm">No differential diagnoses added yet.</p>
          )}
        </div>

        <Separator />

        {/* Histopathological Diagnosis */}
        <div>
          <Label htmlFor="histopathologicalDiagnosis">Histopathological Diagnosis</Label>
          <Textarea
            id="histopathologicalDiagnosis"
            value={data.histopathologicalDiagnosis || ""}
            onChange={(e) => onChange("histopathologicalDiagnosis", e.target.value)}
            rows={3}
          />
        </div>

        {/* Working Diagnosis */}
        <div>
          <Label htmlFor="workingDiagnosis">Working Diagnosis</Label>
          <Input
            id="workingDiagnosis"
            value={data.workingDiagnosis || ""}
            onChange={(e) => onChange("workingDiagnosis", e.target.value)}
          />
        </div>

        <Separator />

        {/* Final Diagnosis */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Label className="text-base font-semibold">Final Diagnosis</Label>
            <Button type="button" variant="outline" size="sm" onClick={addFinalDiagnosis}>
              <Plus className="h-4 w-4 mr-2" />
              Add Final Diagnosis
            </Button>
          </div>
          
          {(data.finalDiagnosis || []).map((diagnosis: string, index: number) => (
            <div key={index} className="flex gap-2">
              <Input
                value={diagnosis}
                onChange={(e) => updateFinalDiagnosis(index, e.target.value)}
                placeholder={`Final diagnosis ${index + 1}`}
              />
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => removeFinalDiagnosis(index)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ))}
          
          {(!data.finalDiagnosis || data.finalDiagnosis.length === 0) && (
            <p className="text-muted-foreground text-sm">No final diagnoses added yet.</p>
          )}
        </div>

        <Separator />

        {/* Review of Final Diagnosis */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Label className="text-base font-semibold">Review of Final Diagnosis</Label>
            <Button type="button" variant="outline" size="sm" onClick={addReview}>
              <Plus className="h-4 w-4 mr-2" />
              Add Review
            </Button>
          </div>
          
          {(data.reviewOfFinalDiagnosis || []).map((review: any, index: number) => (
            <div key={index} className="border rounded-lg p-4 space-y-3">
              <div className="flex items-center justify-between">
                <Label className="font-medium">Review {index + 1}</Label>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => removeReview(index)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor={`reviewDate${index}`}>Date</Label>
                  <Input
                    id={`reviewDate${index}`}
                    type="date"
                    value={review.date || ""}
                    onChange={(e) => updateReview(index, "date", e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor={`reviewNotes${index}`}>Notes</Label>
                  <Textarea
                    id={`reviewNotes${index}`}
                    value={review.notes || ""}
                    onChange={(e) => updateReview(index, "notes", e.target.value)}
                    rows={2}
                  />
                </div>
              </div>
            </div>
          ))}
          
          {(!data.reviewOfFinalDiagnosis || data.reviewOfFinalDiagnosis.length === 0) && (
            <p className="text-muted-foreground text-sm">No reviews added yet.</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};