"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import PersonalInfoForm from "./personal-info"
import TravelPreferencesForm from "./travel-preferences"
import HealthAndSafetyForm from "./health-and-safety"
import { useForm, FormProvider } from "react-hook-form"

type FormData = {
  personalInfo: {
    fullname: string
    birth: string
    nationality: string
    email: string
    phone: string
  }
  travelPreferences: {
    departureDate: string
    returnDate: string
    accommodation: "Space Hotel" | "Martian Base"
    specialRequests: string
  }
  healthAndSafety: {
    healthDeclaration: boolean
    emergencyContact: {
      name: string
      phone: string
      relation: string
    }
    medicalConditions: string
  }
}

export default function MultiStageForm() {
  const [stage, setStage] = useState(1)
  const methods = useForm<FormData>({
    defaultValues: {
      personalInfo: { fullname: "", birth: "", nationality: "", email: "", phone: "" },
      travelPreferences: { departureDate: "", returnDate: "", accommodation: "Space Hotel", specialRequests: "" },
      healthAndSafety: {
        healthDeclaration: false,
        emergencyContact: { name: "", phone: "", relation: "" },
        medicalConditions: "",
      },
    },
  })

  const onSubmit = (data: FormData) => {
    console.log("Form submitted: ", data)  //debug
    // backend here, implement later
  }

  const handleNext = async () => {
    const isValid = await methods.trigger()
    if (isValid) {
      setStage(stage + 1)
    }
  }

  const handlePrevious = () => {
    setStage(stage - 1)
  }

  const stageNames = ["Personal Information", "Travel Preferences", "Health and Safety"];
  const stageName = stageNames[stage - 1];

  return (
    <FormProvider {...methods}>
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle> {stageName} </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            {stage === 1 && <PersonalInfoForm />}
            {stage === 2 && <TravelPreferencesForm />}
            {stage === 3 && <HealthAndSafetyForm />}
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          {stage > 1 && <Button onClick={handlePrevious}>Previous</Button>}
          {stage < 3 ? (
            <Button onClick={handleNext}>Next</Button> //next when not last page
          ) : (
            <Button onClick={methods.handleSubmit(onSubmit)}>Submit</Button> //sumbit when last page
          )}
        </CardFooter>
      </Card>
    </FormProvider>
  )
}