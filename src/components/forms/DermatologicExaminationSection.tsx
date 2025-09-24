import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface DermatologicExaminationSectionProps {
  data: any;
  onChange: (field: string, value: any) => void;
  onNestedChange: (parent: string, field: string, value: any) => void;
}

export const DermatologicExaminationSection = ({ data, onChange, onNestedChange }: DermatologicExaminationSectionProps) => {
  const basicLesions = [
    { key: "papuleComedone", label: "Papule/comedone" },
    { key: "pustule", label: "Pustule" },
    { key: "macule", label: "Macule" },
    { key: "purpura", label: "Purpura" },
    { key: "pits", label: "Pits" },
    { key: "patch", label: "Patch" },
    { key: "induration", label: "Induration" },
    { key: "infarction", label: "Infarction" },
    { key: "infiltration", label: "Infiltration" },
    { key: "cyst", label: "Cyst" },
    { key: "alopecia", label: "Alopecia" },
    { key: "atrophy", label: "Atrophy (sequential)" },
    { key: "erythema", label: "Erythema" },
    { key: "edema", label: "Edema" },
    { key: "hyperkeratosis", label: "Hyperkeratosis (sequential)" },
    { key: "nailDystrophy", label: "Nail - Dystrophy" },
    { key: "discolouration", label: "Discolouration" },
    { key: "nodule", label: "Nodule / micro nodule" },
    { key: "sclerosis", label: "Sclerosis" },
    { key: "telangiectasis", label: "Telangiectasis" },
    { key: "tumor", label: "Tumor" },
    { key: "ulcer", label: "Ulcer (sequential)" },
    { key: "poikiloderma", label: "Poikiloderma" },
    { key: "xerosis", label: "Xerosis" },
    { key: "vesicle", label: "Vesicle" },
    { key: "wheal", label: "Wheal" }
  ];

  const shapeOptions = [
    "Annular", "Arciform", "Asheaf", "Circinate", "Elliptical", 
    "Linear", "Maplike", "Oval", "Round", "Square", "Target", 
    "Triangular", "Umbilicated"
  ];

  const arrangementOptions = [
    "Annular", "Arciform", "Corymbiform", "Grouped", "Herpetiform",
    "Linear", "Polycyclic", "Reticular", "Scattered", "Zosteriform"
  ];

  const distributionOptions = [
    "Bilateral", "Generalised", "Localised", "Regional", "Unilateral", "Universal"
  ];

  const patternOptions = [
    "Circle of Hebra", "Exposed / Covered", "Flexures", "Intertriginous areas",
    "Photo distribution", "Pressure sites", "Seborrheic", "Symmetrical", "Asymmetrical"
  ];

  const areaInvolvementOptions = [
    "Anal", "Beard", "Dermatomal", "Flexural", "Extensor", "Genital",
    "Glabrous", "Head & Neck", "Intertriginous", "Lower extremities",
    "Palms & Soles", "Trunk", "Upper extremities"
  ];

  const colorOptions = [
    "Black", "Blue", "Brown", "Cream", "Dusky Red", "Erythema",
    "Green", "Grey", "Off White", "Orange", "Pink", "Purple",
    "Skin", "Violaceous", "White", "Yellow"
  ];

  const palpationOptions = [
    "Doughy", "Firm", "Hard", "Indurated", "Mobile", "Fixed",
    "Soft", "Tender", "Non-tender"
  ];

  const anatomicComponents = [
    "Appendageal", "Dermal", "Epidermal", "Subcutaneous"
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-primary">Dermatologic Examination</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Basic Lesions */}
        <div>
          <Label className="text-base font-semibold">Basic Lesions</Label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2">
            {basicLesions.map((lesion) => (
              <div key={lesion.key} className="flex items-center space-x-2">
                <Checkbox
                  id={lesion.key}
                  checked={data.dermatologicExam?.basicLesions?.[lesion.key] || false}
                  onCheckedChange={(checked) => 
                    onNestedChange("dermatologicExam", 
                      `basicLesions.${lesion.key}`, checked)
                  }
                />
                <Label htmlFor={lesion.key} className="text-sm">{lesion.label}</Label>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        {/* Scar Type */}
        <div>
          <Label htmlFor="scarType">Scar Type</Label>
          <Select onValueChange={(value) => onNestedChange("dermatologicExam", "scarType", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select scar type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Atrophic">Atrophic</SelectItem>
              <SelectItem value="Hypertrophic">Hypertrophic</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Other lesion */}
        <div>
          <Label htmlFor="otherLesion">Other Lesion</Label>
          <Input
            id="otherLesion"
            value={data.dermatologicExam?.otherLesion || ""}
            onChange={(e) => onNestedChange("dermatologicExam", "otherLesion", e.target.value)}
          />
        </div>

        <Separator />

        {/* Type of Lesions */}
        <div className="space-y-4">
          <Label className="text-base font-semibold">Type of Lesions</Label>
          
          <div className="flex items-center space-x-2">
            <Checkbox
              id="crust"
              checked={data.dermatologicExam?.crust || false}
              onCheckedChange={(checked) => onNestedChange("dermatologicExam", "crust", checked)}
            />
            <Label htmlFor="crust">Crust</Label>
          </div>

          {/* Eczema Types */}
          <div className="space-y-2">
            <Label className="font-medium">Eczema</Label>
            <div className="flex gap-4">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="eczemaAcute"
                  checked={data.dermatologicExam?.eczemaAcute || false}
                  onCheckedChange={(checked) => onNestedChange("dermatologicExam", "eczemaAcute", checked)}
                />
                <Label htmlFor="eczemaAcute">Acute</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="eczemaSubacute"
                  checked={data.dermatologicExam?.eczemaSubacute || false}
                  onCheckedChange={(checked) => onNestedChange("dermatologicExam", "eczemaSubacute", checked)}
                />
                <Label htmlFor="eczemaSubacute">Subacute</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="eczemaChronic"
                  checked={data.dermatologicExam?.eczemaChronic || false}
                  onCheckedChange={(checked) => onNestedChange("dermatologicExam", "eczemaChronic", checked)}
                />
                <Label htmlFor="eczemaChronic">Chronic</Label>
              </div>
            </div>
          </div>

          {/* Other lesion types */}
          {["exudation", "excoriation", "erosion", "fissure", "gangrene", "lichenification"].map((lesionType) => (
            <div key={lesionType} className="flex items-center space-x-2">
              <Checkbox
                id={lesionType}
                checked={data.dermatologicExam?.[lesionType] || false}
                onCheckedChange={(checked) => onNestedChange("dermatologicExam", lesionType, checked)}
              />
              <Label htmlFor={lesionType} className="capitalize">{lesionType}</Label>
            </div>
          ))}

          {/* Pigmentation */}
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="pigmentation"
                checked={data.dermatologicExam?.pigmentation || false}
                onCheckedChange={(checked) => onNestedChange("dermatologicExam", "pigmentation", checked)}
              />
              <Label htmlFor="pigmentation">Pigmentation</Label>
            </div>
            {data.dermatologicExam?.pigmentation && (
              <div className="ml-6 space-y-2">
                {["hyper", "hypo", "diffuse", "mottled"].map((pigType) => (
                  <div key={pigType} className="flex items-center space-x-2">
                    <Checkbox
                      id={`pigmentation${pigType}`}
                      checked={data.dermatologicExam?.pigmentationType?.[pigType] || false}
                      onCheckedChange={(checked) => 
                        onNestedChange("dermatologicExam", `pigmentationType.${pigType}`, checked)
                      }
                    />
                    <Label htmlFor={`pigmentation${pigType}`} className="capitalize">{pigType}</Label>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <Separator />

        {/* Scales */}
        <div className="space-y-4">
          <Label className="text-base font-semibold">Scales</Label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="scalesType">Type</Label>
              <Select onValueChange={(value) => onNestedChange("dermatologicExam", "scales.type", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Fine">Fine</SelectItem>
                  <SelectItem value="Coarse">Coarse</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="scalesAdherence">Adherence</Label>
              <Select onValueChange={(value) => onNestedChange("dermatologicExam", "scales.adherence", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select adherence" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Adherent">Adherent</SelectItem>
                  <SelectItem value="Loose">Loose</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="scalesAmount">Amount</Label>
              <Select onValueChange={(value) => onNestedChange("dermatologicExam", "scales.amount", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select amount" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Minimal">Minimal</SelectItem>
                  <SelectItem value="Abundant">Abundant</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="scalesColor">Color</Label>
              <Input
                id="scalesColor"
                value={data.dermatologicExam?.scales?.color || ""}
                onChange={(e) => onNestedChange("dermatologicExam", "scales.color", e.target.value)}
              />
            </div>
          </div>
        </div>

        <Separator />

        {/* Brief Description */}
        <div>
          <Label htmlFor="briefDescription">Brief Description</Label>
          <Textarea
            id="briefDescription"
            value={data.dermatologicExam?.briefDescription || ""}
            onChange={(e) => onNestedChange("dermatologicExam", "briefDescription", e.target.value)}
            rows={3}
          />
        </div>

        {/* Special Signs */}
        <div>
          <div className="flex items-center space-x-2 mb-2">
            <Checkbox
              id="specialSigns"
              checked={data.dermatologicExam?.hasSpecialSigns || false}
              onCheckedChange={(checked) => onNestedChange("dermatologicExam", "hasSpecialSigns", checked)}
            />
            <Label htmlFor="specialSigns">Special Signs</Label>
          </div>
          {data.dermatologicExam?.hasSpecialSigns && (
            <Textarea
              value={data.dermatologicExam?.specialSigns || ""}
              onChange={(e) => onNestedChange("dermatologicExam", "specialSigns", e.target.value)}
              rows={3}
            />
          )}
        </div>

        {/* Appearance of Lesion */}
        <div>
          <Label htmlFor="appearance">Appearance of Lesion</Label>
          <Select onValueChange={(value) => onNestedChange("dermatologicExam", "appearance", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select appearance" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Dry">Dry</SelectItem>
              <SelectItem value="Moist">Moist</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Shape of Basic Lesions */}
        <div>
          <Label className="text-base font-semibold">Shape of Basic Lesions</Label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2">
            {shapeOptions.map((shape) => (
              <div key={shape} className="flex items-center space-x-2">
                <Checkbox
                  id={`shape${shape}`}
                  checked={data.dermatologicExam?.shapes?.[shape] || false}
                  onCheckedChange={(checked) => 
                    onNestedChange("dermatologicExam", `shapes.${shape}`, checked)
                  }
                />
                <Label htmlFor={`shape${shape}`} className="text-sm">{shape}</Label>
              </div>
            ))}
          </div>
        </div>

        {/* Border */}
        <div>
          <Label htmlFor="border">Border</Label>
          <Select onValueChange={(value) => onNestedChange("dermatologicExam", "border", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select border type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Regular">Regular</SelectItem>
              <SelectItem value="Irregular">Irregular</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Size of Basic Lesions */}
        <div>
          <Label htmlFor="lesionSize">Size of Basic Lesions</Label>
          <Input
            id="lesionSize"
            value={data.dermatologicExam?.lesionSize || ""}
            onChange={(e) => onNestedChange("dermatologicExam", "lesionSize", e.target.value)}
            placeholder="Enter size with units"
          />
        </div>

        {/* Arrangement */}
        <div>
          <Label className="text-base font-semibold">Arrangement of Basic Lesion</Label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2">
            {arrangementOptions.map((arrangement) => (
              <div key={arrangement} className="flex items-center space-x-2">
                <Checkbox
                  id={`arrangement${arrangement}`}
                  checked={data.dermatologicExam?.arrangements?.[arrangement] || false}
                  onCheckedChange={(checked) => 
                    onNestedChange("dermatologicExam", `arrangements.${arrangement}`, checked)
                  }
                />
                <Label htmlFor={`arrangement${arrangement}`} className="text-sm">{arrangement}</Label>
              </div>
            ))}
          </div>
        </div>

        {/* Distribution */}
        <div>
          <Label className="text-base font-semibold">Distribution</Label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2">
            {distributionOptions.map((distribution) => (
              <div key={distribution} className="flex items-center space-x-2">
                <Checkbox
                  id={`distribution${distribution}`}
                  checked={data.dermatologicExam?.distributions?.[distribution] || false}
                  onCheckedChange={(checked) => 
                    onNestedChange("dermatologicExam", `distributions.${distribution}`, checked)
                  }
                />
                <Label htmlFor={`distribution${distribution}`} className="text-sm">{distribution}</Label>
              </div>
            ))}
          </div>
        </div>

        {/* Pattern */}
        <div>
          <Label className="text-base font-semibold">Pattern</Label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
            {patternOptions.map((pattern) => (
              <div key={pattern} className="flex items-center space-x-2">
                <Checkbox
                  id={`pattern${pattern}`}
                  checked={data.dermatologicExam?.patterns?.[pattern] || false}
                  onCheckedChange={(checked) => 
                    onNestedChange("dermatologicExam", `patterns.${pattern}`, checked)
                  }
                />
                <Label htmlFor={`pattern${pattern}`} className="text-sm">{pattern}</Label>
              </div>
            ))}
          </div>
        </div>

        {/* Specific Area of Involvement */}
        <div>
          <Label className="text-base font-semibold">Specific Area of Involvement</Label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2">
            {areaInvolvementOptions.map((area) => (
              <div key={area} className="flex items-center space-x-2">
                <Checkbox
                  id={`area${area}`}
                  checked={data.dermatologicExam?.areasInvolved?.[area] || false}
                  onCheckedChange={(checked) => 
                    onNestedChange("dermatologicExam", `areasInvolved.${area}`, checked)
                  }
                />
                <Label htmlFor={`area${area}`} className="text-sm">{area}</Label>
              </div>
            ))}
          </div>
        </div>

        {/* Color */}
        <div>
          <Label className="text-base font-semibold">Color</Label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-2">
            {colorOptions.map((color) => (
              <div key={color} className="flex items-center space-x-2">
                <Checkbox
                  id={`color${color}`}
                  checked={data.dermatologicExam?.colors?.[color] || false}
                  onCheckedChange={(checked) => 
                    onNestedChange("dermatologicExam", `colors.${color}`, checked)
                  }
                />
                <Label htmlFor={`color${color}`} className="text-sm">{color}</Label>
              </div>
            ))}
          </div>
          <div className="mt-2">
            <Label htmlFor="otherColor">Others</Label>
            <Input
              id="otherColor"
              value={data.dermatologicExam?.otherColor || ""}
              onChange={(e) => onNestedChange("dermatologicExam", "otherColor", e.target.value)}
              placeholder="Specify other colors"
            />
          </div>
        </div>

        {/* Diascopy */}
        <div>
          <Label htmlFor="diascopy">Diascopy</Label>
          <Select onValueChange={(value) => onNestedChange("dermatologicExam", "diascopy", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select diascopy result" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Blanching">Blanching</SelectItem>
              <SelectItem value="Non-blanching">Non-blanching</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Palpation */}
        <div>
          <Label className="text-base font-semibold">Palpation</Label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2">
            {palpationOptions.map((palpation) => (
              <div key={palpation} className="flex items-center space-x-2">
                <Checkbox
                  id={`palpation${palpation}`}
                  checked={data.dermatologicExam?.palpation?.[palpation] || false}
                  onCheckedChange={(checked) => 
                    onNestedChange("dermatologicExam", `palpation.${palpation}`, checked)
                  }
                />
                <Label htmlFor={`palpation${palpation}`} className="text-sm">{palpation}</Label>
              </div>
            ))}
          </div>
        </div>

        {/* Anatomic Components */}
        <div>
          <Label className="text-base font-semibold">Anatomic Components</Label>
          <div className="grid grid-cols-2 gap-2 mt-2">
            {anatomicComponents.map((component) => (
              <div key={component} className="flex items-center space-x-2">
                <Checkbox
                  id={`anatomic${component}`}
                  checked={data.dermatologicExam?.anatomicComponents?.[component] || false}
                  onCheckedChange={(checked) => 
                    onNestedChange("dermatologicExam", `anatomicComponents.${component}`, checked)
                  }
                />
                <Label htmlFor={`anatomic${component}`} className="text-sm">{component}</Label>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        {/* Anatomical Involvement */}
        <div className="space-y-4">
          <Label className="text-base font-semibold">Anatomical Involvement</Label>
          
          {["conjunctiva", "mouth", "scalp", "hair", "nails"].map((area) => (
            <div key={area} className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id={`${area}Involved`}
                  checked={data.dermatologicExam?.[`${area}Involved`] || false}
                  onCheckedChange={(checked) => onNestedChange("dermatologicExam", `${area}Involved`, checked)}
                />
                <Label htmlFor={`${area}Involved`} className="capitalize">{area} Involved</Label>
              </div>
              {data.dermatologicExam?.[`${area}Involved`] && (
                <Textarea
                  value={data.dermatologicExam?.[`${area}Details`] || ""}
                  onChange={(e) => onNestedChange("dermatologicExam", `${area}Details`, e.target.value)}
                  placeholder={`${area} involvement details`}
                  rows={2}
                />
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
