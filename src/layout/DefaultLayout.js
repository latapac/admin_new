import React, { useState,useEffect } from 'react'
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/index'

const obj = {
  d: {
    "status": [3], "current_OEE": ["NaN"], "current_speed": [0],
    "Reciepe_Name": ["Pacmac"], "Batch_Number": [""], "Good_Count": [79],
    "Total_Production": [106], "Reject_Counters": [27]
  }, "ts": "2025-03-07T11:28:15.295884"
}
const DefaultLayout = () => {


  async function getLiveData() {

    try {
      const response = await fetch('http://192.168.31.159:3000/getMachineData/MAC24250046');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();

      const machinedata = { d: data.data.d, ts: data.data.ts }

      return machinedata

    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  }

  const [md, setMd] = useState(obj)

  useEffect(() => {
    getLiveData().then((data)=>{
      setMd(data)
      console.log("a",data);
    })
   }, [])

   console.log(md.d.Batch_Number);
   

  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100">
        <AppHeader tms={md.ts} bno={md.d.Batch_Number}/>
        <div className="body flex-grow-1">
          <AppContent data={md} />
        </div>
        <AppFooter />
      </div>
    </div>
  )
}

export default DefaultLayout
