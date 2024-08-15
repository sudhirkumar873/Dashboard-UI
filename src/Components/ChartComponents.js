import React from 'react'
import BarChartComponent from './BarChart'
import RadialChart from './RadialChart'


export const ChartComponents = () => {
  return (
    <div className='flex flex-row justify-between mt-3 mb-3'>
        <BarChartComponent/>
        <RadialChart/>
    </div>
  )
}
