import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Popup, Table } from 'semantic-ui-react'
import PageHeader from '../../components/Headers/PageHeader'
import PoolService from '../../services/poolService'
import { deletePool, getAllPools } from '../../store/actions/poolActions'
import { DeleteAlert } from '../../utilities/AlertMessages/YTAlerts'
import PoolAdd from './PoolAdd'
import PoolEdit from './PoolEdit'
export default function PoolList() {
    const pools = useSelector(state => state.pools);

    const dispatch = useDispatch()

    const poolDelete = (poolId)=> {
        console.log(poolId)
        DeleteAlert("Havuz", "Bu işlemi geri alamazsın", ()=>dispatch(deletePool(poolId)))
    }

    return (
        <div >
            <div>
                <PageHeader text="Havuzlar" />
                <div className="d-flex justify-content-end">
                    <PoolAdd />
                </div>
                <Table celled inverted color="teal" size="small" selectable>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Havuz Id</Table.HeaderCell>
                            <Table.HeaderCell>Havuz Adı</Table.HeaderCell>
                            <Table.HeaderCell>Havuz Adresi</Table.HeaderCell>
                            <Table.HeaderCell></Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {
                            pools?.data?.map(pool => (
                                <Table.Row>
                                    <Table.Cell>{pool.poolId}</Table.Cell>
                                    <Table.Cell>{pool.poolName}</Table.Cell>
                                    <Table.Cell>{pool.poolAddress}</Table.Cell>
                                    <Table.Cell textAlign="right" className="table-actions">
                                        <Popup content='Havuzu düzenle' trigger={<PoolEdit pool={pool}/>} />
                                        <Popup negative content="Havuzu Sil" trigger={<Button icon="trash" negative onClick={()=>poolDelete(pool.poolId)}/>} />
                                    </Table.Cell>
                                </Table.Row>
                            ))
                        }
                    </Table.Body>
                </Table>
            </div>
        </div>
    )
}
