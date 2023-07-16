import { prisma } from '@/lib/prisma'
import React from 'react'

const getTrips = async () => {
    const trips = await prisma.trip.findMany({});
    return trips;
    
}
console.log(getTrips());

const Trips = () => {
  return (
    <div>Trips </div>
  )
}

export default Trips