import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface SocialHistorySectionProps {
  data: any;
  onChange: (field: string, value: any) => void;
  onNestedChange: (section: string, field: string, value: any) => void;
}

export const SocialHistorySection = ({ data, onChange, onNestedChange }: SocialHistorySectionProps) => {
  const isWoman = data.sex === "F";

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-primary">Social History</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Occupation */}
        <div>
          <Label htmlFor="occupation">Occupation</Label>
          <Input
            id="occupation"
            value={data.socialHistory?.occupation || ""}
            onChange={(e) => onNestedChange("socialHistory", "occupation", e.target.value)}
            placeholder="Patient's occupation..."
          />
        </div>

        {/* Hobbies */}
        <div>
          <Label htmlFor="hobbies">Hobbies</Label>
          <Input
            id="hobbies"
            value={data.socialHistory?.hobbies || ""}
            onChange={(e) => onNestedChange("socialHistory", "hobbies", e.target.value)}
            placeholder="Patient's hobbies..."
          />
        </div>

        {/* Address */}
        <div>
          <Label htmlFor="address">Address</Label>
          <Textarea
            id="address"
            value={data.socialHistory?.address || ""}
            onChange={(e) => onNestedChange("socialHistory", "address", e.target.value)}
            placeholder="Patient's address..."
            rows={2}
          />
        </div>

        {/* Exposure / Physical contactants */}
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="exposure"
              checked={!!data.socialHistory?.exposure}
              onCheckedChange={(checked) => onNestedChange("socialHistory", "exposure", checked)}
            />
            <Label htmlFor="exposure" className="text-base font-semibold">Exposure / Physical contactants</Label>
          </div>
          {data.socialHistory?.exposure && (
            <Textarea
              value={data.socialHistory?.exposureDetails || ""}
              onChange={(e) => onNestedChange("socialHistory", "exposureDetails", e.target.value)}
              placeholder="Details of exposure / physical contactants..."
              rows={3}
            />
          )}
        </div>

        {/* Risk of STD */}
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="riskSTD"
              checked={!!data.socialHistory?.riskSTD}
              onCheckedChange={(checked) => onNestedChange("socialHistory", "riskSTD", checked)}
            />
            <Label htmlFor="riskSTD" className="text-base font-semibold">Risk of STD</Label>
          </div>
          {data.socialHistory?.riskSTD && (
            <Textarea
              value={data.socialHistory?.riskSTDDetails || ""}
              onChange={(e) => onNestedChange("socialHistory", "riskSTDDetails", e.target.value)}
              placeholder="Details of STD risk factors..."
              rows={2}
            />
          )}
        </div>

        {/* Travel */}
        <div>
          <Label htmlFor="travel">Travel</Label>
          <Textarea
            id="travel"
            value={data.socialHistory?.travel || ""}
            onChange={(e) => onNestedChange("socialHistory", "travel", e.target.value)}
            placeholder="Recent travel history..."
            rows={2}
          />
        </div>

        {/* Women-specific section */}
        {isWoman && (
          <div className="space-y-6 border-t pt-6">
            <Label className="text-lg font-semibold text-primary">Women-specific Information</Label>
            
            {/* Marital Status */}
            <div>
              <Label className="text-base font-semibold">Marital Status</Label>
              <RadioGroup
                value={data.socialHistory?.maritalStatus || ""}
                onValueChange={(value) => onNestedChange("socialHistory", "maritalStatus", value)}
                className="flex gap-6 mt-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="single" id="single" />
                  <Label htmlFor="single">Single</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="married" id="married" />
                  <Label htmlFor="married">Married</Label>
                </div>
              </RadioGroup>
            </div>

            {/* Pregnant */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="pregnant"
                  checked={!!data.socialHistory?.pregnant}
                  onCheckedChange={(checked) => onNestedChange("socialHistory", "pregnant", checked)}
                />
                <Label htmlFor="pregnant" className="text-base font-semibold">Pregnant</Label>
              </div>
              {data.socialHistory?.pregnant && (
                <Textarea
                  value={data.socialHistory?.pregnantDetails || ""}
                  onChange={(e) => onNestedChange("socialHistory", "pregnantDetails", e.target.value)}
                  placeholder="Pregnancy details (weeks, complications, etc.)..."
                  rows={2}
                />
              )}
            </div>

            {/* Breast feeding */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="breastFeeding"
                  checked={!!data.socialHistory?.breastFeeding}
                  onCheckedChange={(checked) => onNestedChange("socialHistory", "breastFeeding", checked)}
                />
                <Label htmlFor="breastFeeding" className="text-base font-semibold">Breast feeding</Label>
              </div>
              {data.socialHistory?.breastFeeding && (
                <Textarea
                  value={data.socialHistory?.breastFeedingDetails || ""}
                  onChange={(e) => onNestedChange("socialHistory", "breastFeedingDetails", e.target.value)}
                  placeholder="Breastfeeding details..."
                  rows={2}
                />
              )}
            </div>

            {/* Children */}
            <div className="space-y-4">
              <Label className="text-base font-semibold">Children</Label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="childrenMale">Number of Male Children</Label>
                  <Input
                    id="childrenMale"
                    type="number"
                    value={data.socialHistory?.childrenMale || ""}
                    onChange={(e) => onNestedChange("socialHistory", "childrenMale", e.target.value)}
                    placeholder="0"
                  />
                </div>
                <div>
                  <Label htmlFor="childrenFemale">Number of Female Children</Label>
                  <Input
                    id="childrenFemale"
                    type="number"
                    value={data.socialHistory?.childrenFemale || ""}
                    onChange={(e) => onNestedChange("socialHistory", "childrenFemale", e.target.value)}
                    placeholder="0"
                  />
                </div>
              </div>
            </div>

            {/* Menstruating */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="menstruating"
                  checked={!!data.socialHistory?.menstruating}
                  onCheckedChange={(checked) => onNestedChange("socialHistory", "menstruating", checked)}
                />
                <Label htmlFor="menstruating" className="text-base font-semibold">Menstruating</Label>
              </div>
              {data.socialHistory?.menstruating && (
                <Textarea
                  value={data.socialHistory?.menstruatingDetails || ""}
                  onChange={(e) => onNestedChange("socialHistory", "menstruatingDetails", e.target.value)}
                  placeholder="Menstruation details (cycle, irregularities, etc.)..."
                  rows={2}
                />
              )}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};