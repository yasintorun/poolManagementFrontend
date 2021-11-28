import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Button, Table } from 'semantic-ui-react'
import PageHeader from '../../components/Headers/PageHeader'
import AppointmentAdd from './AppointmentAdd'

export default function AppointmentList() {
    const appointments = useSelector(state => state.appointments)
    return (
        <div>
            <PageHeader text="Randevular" />
            {/* <div className="d-flex justify-content-end">
                <Button positive icon="plus" content="Randevu Oluştur" as={NavLink} to="/dashboard/appointment-add"/> 
            </div> */}

            <div>
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
                                        <tr>
                                            <td>1</td>
                                            <td>Ali Doğan</td>
                                            <td>Ankara Üniversitesi Olimpik Yüzme Havuzu</td>
                                            <td>Şerit A</td>
                                            <td>12.00</td>
                                            <td>13.30</td>
                                            <td>21 Haziran 2021</td>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>Ali Doğan</td>
                                            <td>Ankara Üniversitesi Olimpik Yüzme Havuzu</td>
                                            <td>Şerit A</td>
                                            <td>12.00</td>
                                            <td>13.30</td>
                                            <td>21 Haziran 2021</td>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>Ali Doğan</td>
                                            <td>Ankara Üniversitesi Olimpik Yüzme Havuzu</td>
                                            <td>Şerit A</td>
                                            <td>12.00</td>
                                            <td>13.30</td>
                                            <td>21 Haziran 2021</td>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>Ali Doğan</td>
                                            <td>Ankara Üniversitesi Olimpik Yüzme Havuzu</td>
                                            <td>Şerit A</td>
                                            <td>12.00</td>
                                            <td>13.30</td>
                                            <td>21 Haziran 2021</td>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>Ali Doğan</td>
                                            <td>Ankara Üniversitesi Olimpik Yüzme Havuzu</td>
                                            <td>Şerit A</td>
                                            <td>12.00</td>
                                            <td>13.30</td>
                                            <td>21 Haziran 2021</td>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>Ali Doğan</td>
                                            <td>Ankara Üniversitesi Olimpik Yüzme Havuzu</td>
                                            <td>Şerit A</td>
                                            <td>12.00</td>
                                            <td>13.30</td>
                                            <td>21 Haziran 2021</td>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>Ali Doğan</td>
                                            <td>Ankara Üniversitesi Olimpik Yüzme Havuzu</td>
                                            <td>Şerit A</td>
                                            <td>12.00</td>
                                            <td>13.30</td>
                                            <td>21 Haziran 2021</td>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>Ali Doğan</td>
                                            <td>Ankara Üniversitesi Olimpik Yüzme Havuzu</td>
                                            <td>Şerit A</td>
                                            <td>12.00</td>
                                            <td>13.30</td>
                                            <td>21 Haziran 2021</td>
                                        </tr>
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
