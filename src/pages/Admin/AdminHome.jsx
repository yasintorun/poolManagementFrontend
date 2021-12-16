import React from 'react'
import PageHeader from '../../components/Headers/PageHeader'
import StatisticCard from '../../components/StatisticCard'

export default function AdminHome() {
    return (
        <div className='my-5'>
            <PageHeader text="İstatistikler"/>
            <div className='my-3'>
                <StatisticCard  bgColor="orange" value={60} icon={"bi bi-people"} title={"fdfd"}/>

            </div>
        </div>
    )
}
