import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { Button, Popup, Table } from 'semantic-ui-react'
import PageHeader from '../../components/Headers/PageHeader'
import PoolPackage from '../../components/PoolPackage'
import AuthService from '../../services/authService'
import { choosePoolPackage } from '../../store/actions/checkoutActions'
import { deletePoolPackage } from '../../store/actions/poolPackageActions'
import { DeleteAlert, InfoAlert } from '../../utilities/AlertMessages/YTAlerts'
import RoleBasedAction from '../../utilities/RoleBasedAction'
import PoolPackageAdd from './PoolPackageAdd'
import PoolPackageEdit from './PoolPackageEdit'

export default function PoolPackageList() {
    const poolPackages = useSelector(state => state.poolPackages)
    const auth = useSelector(state => state.auth)
    const userPackage = useSelector(state => state.userPackage)
    const dispatch = useDispatch()
    const packageDeleteClick = (packageId) => {
        DeleteAlert("Havuz Paketi", "Bu işlem geri alınamaz. Pakete dahil olan kullanıcıların paketi iptal olacaktır.", () => dispatch(deletePoolPackage(packageId)))
    }

    const history = useHistory()

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

    const BuyPackage = (pack) => {
        if (userPackage?.data) {
            InfoAlert("Uyarı", "Bir havuz paketine üyesin. Farklı bir paket almak için yönetici ile görüşmeniz gerekmektedir.")
        } else {
            dispatch(choosePoolPackage(pack))
            history.push("/dashboard/payment")
        }
    }
    //Client actions
    const ClientActions = (pack) => React.useMemo(() => {
        return (
            <div>
                <Button positive onClick={() => BuyPackage(pack)}>Paketi Satın Al</Button>
            </div>
        )
    })

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
                                    client={ClientActions(pack)}
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
