"use client";

import React, { FC } from 'react'
import ButtonAddTask from '../ButtonAddTask';

interface dayitemProps {
  day : string;
  dataWeek : any;
}

const dayCardItem : FC<dayitemProps> = ({ day , dataWeek }) => {
  const showData = () => {
    console.log(dataWeek);
  }

  return (
    <div className='flex flex-col justify-between bg-slate-400'>
      <div className='flex justify-between'>
        <h2>{day}</h2>
        <ButtonAddTask />
      </div>
      <div className=''>
      <button type='button' onClick={() => showData}>ShowData</button>
      </div>
    </div>
  )
}

export default dayCardItem;