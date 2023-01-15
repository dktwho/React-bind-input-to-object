

import React from 'react'
import { useState } from 'react'


const initDate = {
  year: 2025,
  month: 12,
  day: 31
}

const App2 = () => {

  const [obj, setObj] = useState(initDate)

  function handleChange( prop, event) {
    setObj({...obj, ...{[prop]: event.target.value}})
  }



  return (
    <div className='App'>
      <p>{obj.year} - {obj.month} - {obj.day}</p>
      <input value={obj.year} onChange={(e) => handleChange('year', e) } />
      <input value={obj.month} onChange={(e) => handleChange('month', e) } />
      <input value={obj.day} onChange={(e) => handleChange('day', e) } />
      
    </div>
  )
}

export default App2
