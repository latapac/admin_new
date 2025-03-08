import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilPuzzle,
} from '@coreui/icons'
import { CNavGroup, CNavItem } from '@coreui/react'


export default async function getNavData(){
  
let machinedata = []

async function getData() {
  try {
    
    const data= await fetch('http://192.168.31.159:3000/getMachine/CMP-2025228-11653580'); 
    const mdata=await data.json()
    return mdata
    
  } catch (error) {
    console.log(error);
    
  }
}

machinedata = await getData()

machinedata = machinedata.data

const machines = machinedata.map((item)=>{
  return item.serial_number
})

const mitems = machines.map((item)=>{
  return {"component": CNavItem, "name": item,"to": '/base/accordion'}
})


return [
  {
    component: CNavGroup,
    name: 'Machines',
    
    to: '/base',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items:mitems
  },
 

 
]

}
