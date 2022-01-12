import Cookies from 'js-cookie'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from 'semantic-ui-react'
import PageHeader from '../../components/Headers/PageHeader'
import UpdateProfilePhoto from '../../components/UpdateProfilePhoto'
import AuthService from '../../services/authService'

function AdminProfile() {
    const [admin, setAdmin] = useState({})
    useEffect(() => {
        if (!admin.accountId) {
            const admin = AuthService.getAdmin()
            if (admin != null) {
                setAdmin(admin)
                console.log(admin)
            }
        }
    }, [])

    return (
        <>
            <div>
                <PageHeader text={"Profilim"} />
                <div>
                    <div className='text-center'>
                        <img className='profile-img' src={admin?.image?.imagePath ?? "https://kstu.edu.tr/kstu-file/uploads/default-user-image.png"} />
                        <h2>{admin ? (admin.firstname + " " + admin.lastname) : "Ad Soyad"}</h2>
                    </div>

                    <div className="card p-5 my-4">
                        <div className="card-header border-0 pb-0">
                            <h4 className="fs-3 font-w600">Hakkımda</h4>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-sm-6">
                                    <ProfileInfo icon={"bi bi-telephone"} title={"Telefon"} value={"0544 123 45 67"} />
                                    <ProfileInfo icon={"bi bi-envelope"} title={"Mail Adresi"} value={admin?.account?.email ?? "Mail Adresi"} />
                                    <ProfileInfo icon={"bi bi-gender-female"} title={"Cinsiyet"} value={admin?.genderId == 0 ? "Kadın" : "Erkek"} />
                                    <ProfileInfo icon={"bi bi-person-rolodex"} title={"Rol"} value={admin?.account?.role?.roleName ?? "Rol"} />
                                </div>
                                <div className='col-sm-6'>
                                    <div className='my-5'>
                                        <UpdateProfilePhoto userId={admin?.userId}/>
                                    </div>
                                    <div className='my-5'>
                                        <Button icon="key" content="Şifremi Güncelle" color='facebook' as={NavLink} to="/dashboard/resetpassword" />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

const ProfileInfo = ({ icon, title, value }) => {
    return (
        <div className="d-flex contacts-social align-items-center my-5  me-sm-5 me-0">
            <span className="me-3">
                <i className={icon}></i>
            </span>
            <div>
                <span className="text-secondary">{title}</span>
                <h5 className="mt-1 fs-18">{value}</h5>
            </div>
        </div>
    )
}

export default AdminProfile
