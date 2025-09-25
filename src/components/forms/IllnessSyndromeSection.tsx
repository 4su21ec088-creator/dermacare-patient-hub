import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface IllnessSyndromeSectionProps {
  data: any;
  onChange: (field: string, value: any) => void;
  onNestedChange: (section: string, field: string, value: any) => void;
}

export const IllnessSyndromeSection = ({ data, onChange, onNestedChange }: IllnessSyndromeSectionProps) => {
  return (
    <>
      {/* Acute Illness Syndrome */}
      <Card>
        <CardHeader>
          <CardTitle className="text-primary">Acute Illness Syndrome</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="acuteIllness"
                checked={!!data.acuteIllness?.present}
                onCheckedChange={(checked) => onNestedChange("acuteIllness", "present", checked)}
              />
              <Label htmlFor="acuteIllness" className="text-base font-semibold">Acute illness present</Label>
            </div>
            {data.acuteIllness?.present && (
              <Textarea
                value={data.acuteIllness?.details || ""}
                onChange={(e) => onNestedChange("acuteIllness", "details", e.target.value)}
                placeholder="Details of acute illness (fever, chills, headache, sweat, vomiting, etc.)..."
                rows={4}
              />
            )}
          </div>
        </CardContent>
      </Card>

      {/* Chronic Illness Syndrome */}
      <Card>
        <CardHeader>
          <CardTitle className="text-primary">Chronic Illness Syndrome</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="chronicIllness"
                checked={!!data.chronicIllness?.present}
                onCheckedChange={(checked) => onNestedChange("chronicIllness", "present", checked)}
              />
              <Label htmlFor="chronicIllness" className="text-base font-semibold">Chronic illness present</Label>
            </div>
            {data.chronicIllness?.present && (
              <Textarea
                value={data.chronicIllness?.details || ""}
                onChange={(e) => onNestedChange("chronicIllness", "details", e.target.value)}
                placeholder="Details of chronic illness (fatigue, anorexia, weight loss, malaise, etc.)..."
                rows={4}
              />
            )}
          </div>
        </CardContent>
      </Card>
    </>
  );
};