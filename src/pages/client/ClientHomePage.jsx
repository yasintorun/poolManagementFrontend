import React from 'react'
import { useSelector } from 'react-redux'
import PageHeader from '../../components/Headers/PageHeader'
import StatisticCard from '../../components/StatisticCard'

export default function ClientHomePage() {
    const statistics = useSelector(state => state.statistics)
    return (
        <>
            <div className='my-4'>
                <PageHeader text="İstatistikler"/>
                <div className='my-3 row'>
                    <StatisticCard bgColor={"#ff5528"} title={"Toplam Randevularım"} value={statistics.data.totalAppointmentCount} icon={"li"}/>
                    <StatisticCard bgColor={"#3f3f3f"} title={"Paket Kalan Gün Sayısı"} value={statistics.data.totalReamingCount} icon={"li"}/>
                </div>   
            </div>
        </>
    )
}
