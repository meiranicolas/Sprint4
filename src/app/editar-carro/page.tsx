"use client"

import EditCarForm from "@/components/EditCarForm/EditCarForm"
import { CarProvider } from "@/contexts/CarContext"

export default function EditCar(){
  return (
    <CarProvider>
      <EditCarForm />
    </CarProvider>
  )
}