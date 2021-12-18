import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Button, Table } from 'semantic-ui-react'
import PageHeader from '../../components/Headers/PageHeader'
import { Formatter } from '../../utilities/Formatter'
import AppointmentAdd from './AppointmentAdd'

export default function AppointmentList() {
    const appointments = useSelector(state => state.appointments)
    console.log(appointments)
    return (
        <div>
            <PageHeader text="Randevular" />
            <div className="d-flex justify-content-end">
                <Button positive icon="plus" content="Randevu Oluştur" as={NavLink} to="/dashboard/appointment-add"/> 
            </div>

            <div className='my-4'>
                <div className="">
                    <div className="card">
                        <div className="card-header">
                            <h2>Randevu Listesi</h2>
                        </div>
                        <dib className="card-body">
                            <div>
                                <table className="table table-hover table-large">
                                    <thead>
                                        <tr className="table-orange">
                                            <th>#</th>
                                            <th>Müşteri</th>
                                            <th>Havuz</th>
                                            <th>Şerit</th>
                                            <th>Giriş Saati</th>
                                            <th>Çıkış Saati</th>
                                            <th>Tarih</th>
                                        </tr>
                                    </thead>
                                    <tbody className="">
                                    {appointments?.data?.map(app => (
                                        <tr>
                                            <td><strong>{app.appointmentId}</strong></td>
                                            <td>{app.user.firstname + " " + app.user.lastname}</td>
                                            <td>{app.pool.poolName}</td>
                                            <td>{app.lane.laneName}</td>
                                            <td>{app.startTime}</td>
                                            <td>{app.endTime}</td>
                                            <td>{Formatter.ToLongDate(app.date)}</td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                        </dib>
                    </div>
                </div>
            </div>


            {/* <Table celled inverted color="teal" size="small" selectable>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Id</Table.HeaderCell>
                        <Table.HeaderCell>Müşteri</Table.HeaderCell>
                        <Table.HeaderCell>Havuz</Table.HeaderCell>
                        <Table.HeaderCell>Şerit</Table.HeaderCell>
                        <Table.HeaderCell>Başlama Tarihi</Table.HeaderCell>
                        <Table.HeaderCell>Bitiş Tarihi</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {
                        appointments?.data?.map(appointment => (
                            <Table.Row>
                                <Table.Cell>{appointment.appointmentId}</Table.Cell>
                                <Table.Cell>{appointment.user.firstname + " " + appointment.user.lastname}</Table.Cell>
                                <Table.Cell>{appointment.pool.poolName}</Table.Cell>
                                <Table.Cell>{appointment.lane.laneName}</Table.Cell>
                                <Table.Cell>{appointment.startTime}</Table.Cell>
                                <Table.Cell>{appointment.endTime}</Table.Cell>
                            </Table.Row>
                        ))
                    }
                </Table.Body>
            </Table> */}
        </div>
    )
}
