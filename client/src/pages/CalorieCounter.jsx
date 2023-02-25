import React, { useState } from 'react'
import { CalorieList } from '../componets/CalorieList'
import { Counter } from '../componets/Counter'



export const CalorieCounter = () => {
  
  return (
    <div>
        <div style={{float:"left",border:"1px solid black"}}>
            <CalorieList />
        </div>
        <div style={{float:"right",border:"1px solid black"}}>
            <Counter />
        </div>
    </div>
  )
}
