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

                            <tr>
                                <td>8</td>
                                <td>
                                    <img className="profile-btn me-3" width="60" height="60" src="https://randomuser.me/api/portraits/women/31.jpg" />
                                    Ayşe Yılmaz
                                </td>
                                <td>ayse@yilmaz.com</td>
                                <td>Kadın</td>
                                <td>
                                    {false
                                        ? <span className="badge bg-success">Aktif</span>
                                        : <span className="badge bg-danger">Pasif</span>
                                    }
                                </td>
                                {/* <td><Icon name="circle" color={user.account.status ? "green" : "red"} /></td> */}
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>
                                    <img className="profile-btn me-3" width="60" height="60" src="https://randomuser.me/api/portraits/men/43.jpg" />
                                    Şahin Burak
                                </td>
                                <td>sahin@burak.com</td>
                                <td>Erkek</td>
                                <td>
                                    {true
                                        ? <span className="badge bg-success">Aktif</span>
                                        : <span className="badge bg-danger">Pasif</span>
                                    }
                                </td>
                                {/* <td><Icon name="circle" color={user.account.status ? "green" : "red"} /></td> */}
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>
                                    <img className="profile-btn me-3" width="60" height="60" src="https://randomuser.me/api/portraits/women/26.jpg" />
                                    Ayşe Yılmaz
                                </td>
                                <td>ayse@yilmaz.com</td>
                                <td>Kadın</td>
                                <td>
                                    {false
                                        ? <span className="badge bg-success">Aktif</span>
                                        : <span className="badge bg-danger">Pasif</span>
                                    }
                                </td>
                                {/* <td><Icon name="circle" color={user.account.status ? "green" : "red"} /></td> */}
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>

        </div>
    )
}
