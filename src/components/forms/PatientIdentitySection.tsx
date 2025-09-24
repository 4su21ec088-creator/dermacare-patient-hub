import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface PatientIdentitySectionProps {
  data: any;
  onChange: (field: string, value: any) => void;
}

export const PatientIdentitySection = ({ data, onChange }: PatientIdentitySectionProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-primary">Patient Identity</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="name">Name *</Label>
          <Input
            id="name"
            value={data.name}
            onChange={(e) => onChange("name", e.target.value)}
            required
          />
        </div>
        <div>
          <Label htmlFor="age">Age</Label>
          <Input
            id="age"
            type="number"
            value={data.age}
            onChange={(e) => onChange("age", e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="sex">Sex</Label>
          <Select onValueChange={(value) => onChange("sex", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select sex" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="M">Male</SelectItem>
              <SelectItem value="F">Female</SelectItem>
              <SelectItem value="Other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="phone">Phone Number *</Label>
          <Input
            id="phone"
            value={data.phone}
            onChange={(e) => onChange("phone", e.target.value)}
            required
          />
        </div>
        <div>
          <Label htmlFor="fileNo">File Number</Label>
          <Input
            id="fileNo"
            value={data.fileNo}
            onChange={(e) => onChange("fileNo", e.target.value)}
            placeholder="Auto-generated"
          />
        </div>
        <div>
          <Label htmlFor="date">Date</Label>
          <Input
            id="date"
            type="date"
            value={data.date}
            onChange={(e) => onChange("date", e.target.value)}
          />
        </div>
      </CardContent>
    </Card>
  );
};