import React from 'react'
import { Sidebar } from '../Components/Sidebar'
import { Header } from '../Components/Header'
import { ChartComponents } from '../Components/ChartComponents'
import { Breadcrump } from '../Components/Breadcrump'
import { CardsComponent3 } from '../Components/CardsComponent3'
import { CardsComponent2 } from '../Components/CardsComponent2'
import { CardsComponent1 } from '../Components/CardsComponent1'


export const Dashboard = () => {
    return (
        <div className='bg-gray-100'>
            <Header />
            <div style={{display: 'flex', flexDirection:'row'}} >
                    <Sidebar />
                <div style={{display:'flex', flexDirection:"column"}} className='p-3'>
                    <Breadcrump/>
                    <CardsComponent1/>
                    <ChartComponents />
                    <CardsComponent2/>
                    <CardsComponent3/>
                </div>
            </div>
        </div>
    )
}
