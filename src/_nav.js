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

const machines = ["m1","m2","m3"]

const mitems = machines.map((item)=>{
  return {"component": CNavItem, "name": item,"to": '/base/accordion'}
})

const _nav = [
  
  // {
  //   component: CNavTitle,
  //   name: 'Components',
  // },
  {
    component: CNavGroup,
    name: 'Machines',
    
    to: '/base',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items:mitems
  },
 

 
]

export default _nav
