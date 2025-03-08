import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilExternalLink,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'
import { forEach } from 'core-js/core/array'

const data= await fetch('https://64.227.139.217:3000')

const machines = ["m1","m2","m3"]

const mitems = machines.map((item)=>{
  return {"component": CNavItem, "name": item,"to": '/base/accordion'}
})


const _nav = [
  {
    component: CNavGroup,
    name: 'Machines',
    
    to: '/base',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items:mitems
  },
 

 
]

export default _nav
