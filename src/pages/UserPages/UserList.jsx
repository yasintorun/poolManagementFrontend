import React from 'react'
import { useSelector } from 'react-redux'
import { Icon, Table } from 'semantic-ui-react'
import PageHeader from '../../components/Headers/PageHeader'

export default function UserList() {
    const users = useSelector(state => state.users)
    return (
        <div>
            <PageHeader text="Kullanıcılar" />
            <div className="card">
                <div className="card-header">
                    <h3>Kullanıcı Listesi</h3>
                </div>
                <div className="card-body">
                    <table className="table table-hover">
                        <thead>
                            <tr className="table-orange">
                                <th>#</th>
                                <th>Ad Soyad</th>
                                <th>Eposta adresi</th>
                                <th>Cinsiyet</th>
                                <th>Durum</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users?.data?.map(user => (
                                    <tr>
                                        <td>{user.userId}</td>
                                        <td>
                                            <img className="profile-btn me-3" width="60" height="60" src={`https://randomuser.me/api/portraits/women/${user.userId}.jpg`} />
                                            {user.firstname + " " + user.lastname}
                                        </td>
                                        <td>{user.account.email}</td>
                                        <td>{user.genderId !== 0 ? "Erkek" : "Kadın"}</td>
                                        <td>
                                            {user.account.status
                                                ? <span className="badge bg-success">Aktif</span>
                                                : <span className="badge bg-danger">Pasif</span>
                                            }
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>

            </div>

        </div>
    )
}
