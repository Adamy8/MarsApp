import { useFormContext } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"

export default function TravelPreferencesForm() {
  const { control } = useFormContext()

  return (
    <div className="space-y-4">
      <FormField
        control={control}
        name="travelPreferences.departureDate"
        rules={{ required: "Departure date is required" }}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Departure Date</FormLabel>
            <FormControl>
              <Input type="date" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="travelPreferences.returnDate"
        rules={{ required: "Return date is required" }}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Return Date</FormLabel>
            <FormControl>
              <Input type="date" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="travelPreferences.accommodation"
        rules={{ required: "Accommodation is required" }}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Accommodation</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select accommodation" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="Space Hotel">Space Hotel</SelectItem>
                <SelectItem value="Martian Base">Martian Base</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="travelPreferences.specialRequests"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Special Requests (Optional)</FormLabel>
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
