import React from 'react'
import { useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { Button, Table } from 'semantic-ui-react'
import PageHeader from '../../components/Headers/PageHeader'
import { Formatter } from '../../utilities/Formatter'

export default function ActivityList() {
    const activities = useSelector(state => state.activityContents)
    console.log(activities)

    return (
        <div>
            <PageHeader text="Etkinlikler" />
            <div className="d-flex justify-content-end">
                <Button positive icon="plus" content="Yeni Etkinlik Oluştur" as={NavLink} to="/dashboard/activity-add" />
            </div>

            <div className='my-4'>
                <div className="row">
                    {console.log(activities)}
                    {activities?.data?.map(ac => (
                        <div className='col-md-4'>
                            <div className="card">
                                <div className="card-header d-block">
                                    <h2 className='text-center'>{ac.name}</h2>
                                </div>
                                <div className="card-body">
                                    <table className='table table-bordered no-border'>
                                        <tr>
                                            <th class>Oluşturan:</th>
                                            <td>{ac.createdBy}</td>
                                        </tr>
                                        <tr>
                                            <th>Etkinlik Tarihi:</th>
                                            <td>{ac.date}</td>
                                        </tr>
                                        <tr>
                                            <th>Max Üye Sayısı:</th>
                                            <td>{ac.maximumMember}</td>
                                        </tr>
                                        <tr>
                                            <th>Havuz:</th>
                                            <td>{ac.pool.poolName}</td>
                                        </tr>
                                    </table>
                                    <div className="text-center">
                                        <Link to={"/dashboard/activity-detail/"+ac.id}>
                                            <Button color='orange' icon="plus" content="Detay"/>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
