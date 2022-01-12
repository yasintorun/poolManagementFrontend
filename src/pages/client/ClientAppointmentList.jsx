import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Button } from 'semantic-ui-react'
import PageHeader from '../../components/Headers/PageHeader'
import AuthService from '../../services/authService'
import { getAllAppointmentsByUserId } from '../../store/actions/appointmentActions'
import { Formatter } from '../../utilities/Formatter'

export default function ClientAppointmentList() {
    const appointments = useSelector(state => state.appointments)
    console.log(appointments)
    const dispatch = useDispatch()
    console.log("client appoibtment")
    return (
        <div>
            <PageHeader text="Randevularım" />
            <div className="d-flex justify-content-end my-2">
                <Button positive icon="plus" content="Randevu Oluştur" as={NavLink} to="/dashboard/appointment-add"/> 
            </div>
            <div class="card">
                <div class="card-header">
                    <h2>Oluşturmuş Olduğun Tüm Randevu Listesi</h2>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-responsive-md table-large table-hover">
                            <thead>
                                <tr className="table-orange">
                                    <th className="w-80"> # </th>
                                    <th> Havuz Adı </th>
                                    <th> Şerit Adı </th>
                                    <th> Başlama Zamanı </th>
                                    <th> Bitiş Zamanı</th>
                                    <th> Tarih</th>
                                </tr>
                            </thead>
                            <tbody className="">
                                {appointments?.data?.map(ap => (
                                    <tr>
                                        <td>{ap.appointmentId}</td>
                                        <td>{ap.pool.poolName}</td>
                                        <td>{ap.lane.laneName}</td>
                                        <td>{ap.startTime}</td>
                                        <td>{ap.endTime}</td>
                                        <td>{Formatter.ToLongDate(ap.date)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
