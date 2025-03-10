import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

import {
  CRow,
  CCol,
  CDropdown,
  CDropdownMenu,
  CDropdownItem,
  CDropdownToggle,
  CWidgetStatsA,
} from '@coreui/react'
import { getStyle } from '@coreui/utils'
import { CChartBar, CChartLine } from '@coreui/react-chartjs'
import CIcon from '@coreui/icons-react'
import { cilArrowBottom, cilArrowTop, cilOptions } from '@coreui/icons'

const WidgetsDropdown = (props) => {
  const widgetChartRef1 = useRef(null)
  const widgetChartRef2 = useRef(null)

  useEffect(() => {
    document.documentElement.addEventListener('ColorSchemeChange', () => {
      if (widgetChartRef1.current) {
        setTimeout(() => {
          widgetChartRef1.current.data.datasets[0].pointBackgroundColor = getStyle('--cui-primary')
          widgetChartRef1.current.update()
        })
      }

      if (widgetChartRef2.current) {
        setTimeout(() => {
          widgetChartRef2.current.data.datasets[0].pointBackgroundColor = getStyle('--cui-info')
          widgetChartRef2.current.update()
        })
      }
    })
  }, [widgetChartRef1, widgetChartRef2])

  return (
    <CRow className={props.className} xs={{ gutter: 4 }}>
    <CCol xs={12} sm={6} md={4} lg={4} xl={4} xxl={4}>
      <CWidgetStatsA
        color="primary"
        value={
          <>
            Total Production
            <span style={{ margin: "5vw" }}>
              {props.tp}
            </span>
          </>
        }
        chart={
          <CChartLine
            ref={widgetChartRef1}
            className="mt-3 mx-3"
            style={{ height: '10vh' }}
            data={{
              labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
              datasets: [
                {
                  label: 'My First dataset',
                  backgroundColor: 'transparent',
                  borderColor: 'rgba(255,255,255,.55)',
                  pointBackgroundColor: getStyle('--cui-primary'),
                  data: [65, 59, 84, 84, 51, 55, 40],
                },
              ],
            }}
            options={{
              plugins: { legend: { display: false } },
              maintainAspectRatio: false,
              scales: {
                x: { border: { display: false }, grid: { display: false, drawBorder: false }, ticks: { display: false } },
                y: { min: 30, max: 89, display: false, grid: { display: false }, ticks: { display: false } },
              },
              elements: { line: { borderWidth: 1, tension: 0.4 }, point: { radius: 4, hitRadius: 10, hoverRadius: 4 } },
            }}
          />
        }
      />
    </CCol>
  
    <CCol xs={12} sm={6} md={4} lg={4} xl={4} xxl={4}>
      <CWidgetStatsA
        color="info"
        value={
          <>
            Good Production
            <span style={{ margin: "5vw" }}>
              {props.gp}
            </span>
          </>
        }
        chart={
          <CChartLine
            ref={widgetChartRef2}
            className="mt-3 mx-3"
            style={{ height: '10vh' }}
            data={{
              labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
              datasets: [
                {
                  label: 'My First dataset',
                  backgroundColor: 'transparent',
                  borderColor: 'rgba(255,255,255,.55)',
                  pointBackgroundColor: getStyle('--cui-info'),
                  data: [1, 18, 9, 17, 34, 22, 11],
                },
              ],
            }}
            options={{
              plugins: { legend: { display: false } },
              maintainAspectRatio: false,
              scales: {
                x: { border: { display: false }, grid: { display: false, drawBorder: false }, ticks: { display: false } },
                y: { min: -9, max: 39, display: false, grid: { display: false }, ticks: { display: false } },
              },
              elements: { line: { borderWidth: 1 }, point: { radius: 4, hitRadius: 10, hoverRadius: 4 } },
            }}
          />
        }
      />
    </CCol>
  
    <CCol  xs={12} sm={6} md={4} lg={4} xl={4} xxl={4}>
      <CWidgetStatsA
        color="warning"
        value={
          <>
            Bad Production
            <span style={{ margin: "10vw" }}>
              {props.bp}
            </span>
          </>
        }
        chart={
          <CChartLine
            className="mt-3"
            style={{ height: '10vh' }}
            data={{
              labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
              datasets: [
                {
                  label: 'My First dataset',
                  backgroundColor: 'rgba(255,255,255,.2)',
                  borderColor: 'rgba(255,255,255,.55)',
                  data: [78, 81, 80, 45, 34, 12, 40],
                  fill: true,
                },
              ],
            }}
            options={{
              plugins: { legend: { display: false } },
              maintainAspectRatio: false,
              scales: { x: { display: false }, y: { display: false } },
              elements: { line: { borderWidth: 2, tension: 0.4 }, point: { radius: 0, hitRadius: 10, hoverRadius: 4 } },
            }}
          />
        }
      />
    </CCol>
  </CRow>
  

  )
}

WidgetsDropdown.propTypes = {
  className: PropTypes.string,
  withCharts: PropTypes.bool,
}

export default WidgetsDropdown
