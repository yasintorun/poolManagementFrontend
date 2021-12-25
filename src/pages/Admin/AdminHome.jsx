import React from 'react'
import { useSelector } from 'react-redux'
import PageHeader from '../../components/Headers/PageHeader'
import StatisticCard from '../../components/StatisticCard'

export default function AdminHome() {
    const statistics = useSelector(state => state.statistics)
    return (
        <div className='my-5'>
            <PageHeader text="İstatistikler"/>
            <div className='my-3 row'>
                <StatisticCard  bgColor="orange" value={statistics.data.poolCount} icon={"bi bi-bounding-box"} title={"Toplam Havuz Sayısı"}/>
                <StatisticCard  bgColor="#ff4545" value={statistics.data.totalLaneCount} icon={"bi bi-align-bottom"} title={"Toplam Şerit Sayısı"}/>
                <StatisticCard  bgColor="#356f2d" value={statistics.data.appointmentCount} icon={"bi bi-calendar"} title={"Toplam Randevu Sayısı"}/>
                <StatisticCard  bgColor="#091a41" value={statistics.data.appointmentTodayCount} icon={"bi bi-calendar-check"} title={"Bugün Oluşturulan Randevu Sayısı"}/>
                <StatisticCard  bgColor="#919191" value={statistics.data.totalEarning??"0"+"₺"} icon={"bi bi-currency-dollar"} title={"Toplam Kazanç Tutarı"}/>
                <StatisticCard  bgColor="#4141bb" value={statistics.data.totalClientCount} icon={"bi bi-people"} title={"Toplam Müşteri Sayısı"}/>
                <StatisticCard  bgColor="#954947" value={statistics.data.totalPoolPackageCount} icon={"bi bi-box"} title={"Toplam Havuz Paket Sayısı"}/>
                <StatisticCard  bgColor="#6a3c7a" value={statistics.data.totalActivePackageCount} icon={"bi bi-person-rolodex"} title={"Toplam Aktif Kullanıcı Paket Sayısı"}/>
            </div>
        </div>
    )
}
