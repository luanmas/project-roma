"use client";

import { useState , useEffect } from "react";
import React, { FC } from 'react'
import DayItem from '../DayItem';
import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore";

interface DayItemsProps {
  
}

const ContainerDayItems: FC<DayItemsProps> = ({  }) => {

  const daysOfWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
  const [tasks , setTasks] = useState<any>([]);


  return (
    <section className="grid grid-cols-7 grid-rows-1 gap-2">
    </section>
  )
}

export default ContainerDayItems;