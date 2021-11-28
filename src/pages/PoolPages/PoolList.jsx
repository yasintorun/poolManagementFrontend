import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Popup, Table } from 'semantic-ui-react'
import PageHeader from '../../components/Headers/PageHeader'
import PoolService from '../../services/poolService'
import { deletePool, getAllPools } from '../../store/actions/poolActions'
import { DeleteAlert } from '../../utilities/AlertMessages/YTAlerts'
import PoolAdd from './PoolAdd'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import PoolEdit from './PoolEdit'
import { Carousel } from 'react-responsive-carousel'
import { NavLink } from 'react-router-dom'
import AuthService from '../../services/authService'
import PoolCarousel from '../../components/PoolCarousel'
export default function PoolList() {
    const pools = useSelector(state => state.pools);

    const dispatch = useDispatch()

    const poolDelete = (poolId) => {
        DeleteAlert("Havuz", "Bu işlemi geri alamazsın", () => dispatch(deletePool(poolId)))
    }

    return (
        <div >
            <div>
                <PageHeader text="Havuzlar" />
                {AuthService.isAdmin() &&
                    <div className="w-75 m-auto d-flex justify-content-end">
                        <PoolAdd />
                    </div>
                }
                <div className="pool-cards">
                    {pools?.data?.map(p => (
                        <div className="card  text-center">
                            <div className="card-header d-block">
                                <h2 className="">
                                    <NavLink to={`/dashboard/pool-list/detail/${p?.pool?.poolName?.replaceAll(' ', "")}-${p.pool.poolId}`} >{p.pool.poolName}</NavLink>
                                </h2>
                            </div>
                            <div className="card-body">
                                <PoolCarousel poolImages={p.poolImages}/>
                            </div>
                        </div>
                    ))}
                </div>



                {/* <Table celled inverted color="teal" size="small" selectable>
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
                </Table> */}
            </div>
        </div>
    )
}
