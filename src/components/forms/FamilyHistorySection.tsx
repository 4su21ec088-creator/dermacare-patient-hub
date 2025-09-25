import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface FamilyHistorySectionProps {
  data: any;
  onChange: (field: string, value: any) => void;
  onNestedChange: (section: string, field: string, value: any) => void;
}

export const FamilyHistorySection = ({ data, onChange, onNestedChange }: FamilyHistorySectionProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-primary">Family History</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Skin disease */}
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="skinDisease"
              checked={!!data.familyHistory?.skinDisease}
              onCheckedChange={(checked) => onNestedChange("familyHistory", "skinDisease", checked)}
            />
            <Label htmlFor="skinDisease" className="text-base font-semibold">Skin disease</Label>
          </div>
          {data.familyHistory?.skinDisease && (
            <Textarea
              value={data.familyHistory?.skinDiseaseDetails || ""}
              onChange={(e) => onNestedChange("familyHistory", "skinDiseaseDetails", e.target.value)}
              placeholder="Details of family history of skin disease..."
              rows={2}
            />
          )}
        </div>

        {/* Similar disease */}
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="similarDisease"
              checked={!!data.familyHistory?.similarDisease}
              onCheckedChange={(checked) => onNestedChange("familyHistory", "similarDisease", checked)}
            />
            <Label htmlFor="similarDisease" className="text-base font-semibold">Similar disease</Label>
          </div>
          {data.familyHistory?.similarDisease && (
            <Textarea
              value={data.familyHistory?.similarDiseaseDetails || ""}
              onChange={(e) => onNestedChange("familyHistory", "similarDiseaseDetails", e.target.value)}
              placeholder="Details of family history of similar disease..."
              rows={2}
            />
          )}
        </div>

        {/* Diabetes */}
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="diabetes"
              checked={!!data.familyHistory?.diabetes}
              onCheckedChange={(checked) => onNestedChange("familyHistory", "diabetes", checked)}
            />
            <Label htmlFor="diabetes" className="text-base font-semibold">Diabetes</Label>
          </div>
          {data.familyHistory?.diabetes && (
            <Textarea
              value={data.familyHistory?.diabetesDetails || ""}
              onChange={(e) => onNestedChange("familyHistory", "diabetesDetails", e.target.value)}
              placeholder="Details of family history of diabetes..."
              rows={2}
            />
          )}
        </div>
      </CardContent>
    </Card>
  );
};