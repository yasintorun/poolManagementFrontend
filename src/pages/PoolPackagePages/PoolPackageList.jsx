import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Popup, Table } from 'semantic-ui-react'
import PageHeader from '../../components/Headers/PageHeader'
import { deletePoolPackage } from '../../store/actions/poolPackageActions'
import { DeleteAlert } from '../../utilities/AlertMessages/YTAlerts'
import PoolPackageAdd from './PoolPackageAdd'
import PoolPackageEdit from './PoolPackageEdit'

export default function PoolPackageList() {
    const poolPackages = useSelector(state => state.poolPackages)
    const dispatch = useDispatch()
    const packageDeleteClick = (packageId) => {
        DeleteAlert("Havuz Paketi", "Bu işlem geri alınamaz. Pakete dahil olan kullanıcıların paketi iptal olacaktır.", () => dispatch(deletePoolPackage(packageId)))
    }

    return (
        <div>
            <PageHeader text="Havuz Paketleri" />

            <div className="d-flex justify-content-end">
                <PoolPackageAdd />
            </div>



            <Table celled inverted color="teal" size="small" selectable>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Paket Id</Table.HeaderCell>
                        <Table.HeaderCell>Paket Adı</Table.HeaderCell>
                        <Table.HeaderCell>Paket Fiyatı</Table.HeaderCell>
                        <Table.HeaderCell>Paket Tipi</Table.HeaderCell>
                        <Table.HeaderCell>Süre</Table.HeaderCell>
                        <Table.HeaderCell></Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {
                        poolPackages?.data?.map(poolPackage => (
                            <Table.Row>
                                <Table.Cell>{poolPackage.packageId}</Table.Cell>
                                <Table.Cell>{poolPackage.packageName}</Table.Cell>
                                <Table.Cell>{poolPackage.packagePrice}</Table.Cell>
                                <Table.Cell>{poolPackage.packageType}</Table.Cell>
                                <Table.Cell>{poolPackage.packagePeriod}</Table.Cell>
                                <Table.Cell textAlign="right" className="table-actions">
                                    <Popup content='Havuzu düzenle' trigger={<PoolPackageEdit poolPackage={poolPackage}/>}/>
                                    <Popup negative content="Havuzu Sil" trigger={<Button icon="trash" negative onClick={() => packageDeleteClick(poolPackage.packageId)} />} />
                                </Table.Cell>
                            </Table.Row>
                        ))
                    }
                </Table.Body>
            </Table>
        </div>
    )
}
