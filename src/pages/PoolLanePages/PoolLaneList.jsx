import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Popup, Table } from 'semantic-ui-react'
import PageHeader from '../../components/Headers/PageHeader'
import PoolLaneService from '../../services/poolLaneService'
import { deletePoolLane } from '../../store/actions/poolLaneActions'
import { DeleteAlert } from '../../utilities/AlertMessages/YTAlerts'
import PoolLaneAdd from './PoolLaneAdd'
import PoolLaneEdit from './PoolLaneEdit'

export default function PoolLaneList() {

    const poolLanes = useSelector(state => state.poolLanes)

    const dispatch = useDispatch()

    const poolLaneDelete = (laneId) => {
        
        console.log(laneId)
        DeleteAlert("Havuz Şeridi", "Bu işlemi geri alamazsın", ()=>dispatch(deletePoolLane(laneId)))
    }

    return (
        <div >
            <div>
                <PageHeader text="Havuz Şeritleri" />
                <div className="d-flex justify-content-end">
                    <PoolLaneAdd />
                </div>
                <Table celled inverted color="teal" size="small" selectable>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Şerit Id</Table.HeaderCell>
                            <Table.HeaderCell>Şerit Adı</Table.HeaderCell>
                            <Table.HeaderCell>Havuz Adı</Table.HeaderCell>
                            <Table.HeaderCell></Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {
                            poolLanes?.data?.map(lane => (
                                <Table.Row key={lane.laneId}>
                                    <Table.Cell>{lane.laneId}</Table.Cell>
                                    <Table.Cell>{lane.laneName}</Table.Cell>
                                    <Table.Cell>{lane.pool.poolName}</Table.Cell>
                                    <Table.Cell textAlign="right" className="table-actions">
                                        <Popup content='Havuzu düzenle' trigger={<PoolLaneEdit lane={lane}/>} />
                                        <Popup negative content="Havuzu Sil" trigger={<Button icon="trash" negative onClick={()=>poolLaneDelete(lane.laneId)}/>} />
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
