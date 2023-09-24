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
  
  const firebaseConfig = {
    apiKey: "AIzaSyAcOxsgBlNj9FPRZ60dKWB7SRE598DJyWw",
    authDomain: "roma-f921d.firebaseapp.com",
    projectId: "roma-f921d",
    storageBucket: "roma-f921d.appspot.com",
    messagingSenderId: "94965748078",
    appId: "1:94965748078:web:f4157fdfcf27911d14b17f",
    measurementId: "G-Q0D5VRKQM8"
  };
  
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);    
  const weekCollectionsRef = collection(db , "data_week");  
  
  useEffect(() => {
    const getAllTasks = async () => {
      const data = await getDocs(weekCollectionsRef);
      setTasks(data.docs.map((doc) => ({ ...doc.data() , id : doc.id })));
    }
    getAllTasks();
  }, [])
  
  console.log(tasks);

  return (
    <section className="grid grid-cols-7 grid-rows-1 gap-2">
      {daysOfWeek.map((day) => (
        tasks[day] && tasks[day].tasks && tasks[day].tasks.length > 0 ? (
          <DayItem day={day} dataWeek={tasks[day].tasks} key={tasks[day]}/>
        ) : (
          <DayItem day={day} dataWeek={""} key={tasks[day]}/>
        )
      ))}
    </section>
  )
}

export default ContainerDayItems;