import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Popup, Table } from 'semantic-ui-react'
import PageHeader from '../../components/Headers/PageHeader'
import PoolPackage from '../../components/PoolPackage'
import AuthService from '../../services/authService'
import { deletePoolPackage } from '../../store/actions/poolPackageActions'
import { DeleteAlert } from '../../utilities/AlertMessages/YTAlerts'
import RoleBasedAction from '../../utilities/RoleBasedAction'
import PoolPackageAdd from './PoolPackageAdd'
import PoolPackageEdit from './PoolPackageEdit'

export default function PoolPackageList() {
    const poolPackages = useSelector(state => state.poolPackages)
    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const packageDeleteClick = (packageId) => {
        DeleteAlert("Havuz Paketi", "Bu işlem geri alınamaz. Pakete dahil olan kullanıcıların paketi iptal olacaktır.", () => dispatch(deletePoolPackage(packageId)))
    }

    useEffect(() => {
    }, [])

    //Admin actions
    const AdminActions = React.useMemo(() => {
        return (
            <div>
                <Button positive>Paketi Düzenle</Button>
            </div>
        )
    })

    //Client actions
    const ClientActions = React.useMemo(() => {
        return (
            <div>
                <Button positive>Paketi Satın Al</Button>
            </div>
        )
    })

    const Actions = () => {
        return 
        switch (auth?.data?.role?.roleId) {
            case 2:
                return (
                    <div>
                        <Button positive>Paketi Düzenle</Button>
                    </div>
                )
            case 4:
                return (
                    <div>
                        <Button positive>Paketi Satın Al</Button>
                    </div>
                )
            default:
                return (
                    <>Paketi satın almak için üye ol</>
                ) 
        }
    }

    return (
        <div>
            <PageHeader text="Havuz Paketleri" />
            {/* 
            <div className="d-flex justify-content-end">
                <PoolPackageAdd />
            </div> */}
            <div className="w-100">
                <div className="wrapper">
                    <div className="flexbox">
                        {poolPackages?.data?.map(pack => (
                            <PoolPackage poolPackage={pack}>
                                <RoleBasedAction 
                                    admin={AdminActions}
                                    client={ClientActions}
                                    notAuthorize={<>Paketi satın almak için üye ol</>}
                                />
                            </PoolPackage>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
