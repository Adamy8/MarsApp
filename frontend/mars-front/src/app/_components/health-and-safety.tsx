import { useFormContext } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"

export default function HealthAndSafetyForm() {
  const { control } = useFormContext()

  return (
    <div className="space-y-4">
      <FormField
        control={control}
        name="healthAndSafety.healthDeclaration"
        rules={{ required: "Health declaration is required" }}
        render={({ field }) => (
          <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
            <FormControl>
              <Checkbox checked={field.value} onCheckedChange={field.onChange} />
            </FormControl>
            <div className="space-y-1 leading-none">
              <FormLabel>I declare that I am in good health and fit for space travel</FormLabel>
              <FormMessage />
            </div>
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="healthAndSafety.emergencyContact.name"
        rules={{ required: "Emergency contact name is required" }}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Emergency Contact Name</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="healthAndSafety.emergencyContact.phone"
        rules={{ required: "Emergency contact phone is required" }}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Emergency Contact Phone</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="healthAndSafety.emergencyContact.relation"
        rules={{ required: "Relation to emergency contact is required" }}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Relation to Emergency Contact</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="healthAndSafety.medicalConditions"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Medical Conditions (Optional)</FormLabel>
            <FormControl>
              <Textarea {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  )
}