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
export default function PoolList() {
    const pools = useSelector(state => state.pools);

    const dispatch = useDispatch()

    const poolDelete = (poolId) => {
        console.log(poolId)
        DeleteAlert("Havuz", "Bu işlemi geri alamazsın", () => dispatch(deletePool(poolId)))
    }

    return (
        <div >
            <div>
                <PageHeader text="Havuzlar" />
                <div className="w-75 m-auto d-flex justify-content-end">
                    <PoolAdd />
                </div>
                <div className="pool-cards">
                    <div className="card  text-center">
                        <div className="card-header d-block">
                            <h2 className="">
                                <NavLink to="" >    Ankara Üniversitesi Olimpik Yüzme Havuzu</NavLink>
                            </h2>
                        </div>
                        <div className="card-body">
                            <Carousel swipeable infiniteLoop>
                                <div>
                                    <img src="https://lh3.googleusercontent.com/proxy/w5dYeTWeYqmOp8Iy2wbeujRSOHjuYxA4ZK_LFCIvbDKxjGXeBX1IfV7t6xxtbURrcNQreDd8MtWLbpK0ZOqrHtL6f6ls_SbeeMAMY66J_I1HIqXjn257RQLalwrT" />
                                </div>
                                <div>
                                    <img src="https://lh3.googleusercontent.com/proxy/IPuvC-eneGuRlsY5RYiiYxvykl9UkMR2KcJlWlgnjLx3ZVgMC0Zey9vEbGmLgMA9qxXW_PQkv0fCxPOWaU9Nm-rB4LeQQfQY7U0QVKVBHDPBxsZlQWmwETZW42_5kKiBUQ" />
                                </div>
                                <div>
                                    <img src="https://lh3.googleusercontent.com/proxy/gy7mb1Ee9y0HPYOWb3JDY6o13eFuTvms9iZf5EKR0r6oeC36JHOkb-VIeUF1gz_QR6yLPHtpKV1M5M93iNntBNSCgQvm-KpTVRtrGNlASucUEeC-acBFNIz5bIb9EXIYSbGigMhN9SyrmjsCDwo" />
                                </div>
                            </Carousel>
                        </div>
                    </div>

                    <div className="card  text-center">
                        <div className="card-header d-block">
                            <h2 className="">
                                <NavLink to="" >ODTÜ Yüzme Havuzu</NavLink>
                            </h2>

                        </div>
                        <div className="card-body">
                            <Carousel swipeable infiniteLoop>
                                <div>
                                    <img src="https://gezginsitesi.com/wp-content/uploads/2019/09/cropped-odtu-kapal%C4%B1-y%C3%BCzme-havuzu.jpg" />
                                </div>
                                <div>
                                    <img src="https://hm.metu.edu.tr/sites/hm.metu.edu.tr/files/slider/image/dsc_0003_0.jpg" />
                                </div>
                            </Carousel>
                        </div>
                    </div>

                    <div className="card  text-center">
                        <div className="card-header d-block">
                            <h2 className="">
                                <NavLink to="" >Ankara Gölbaşı Yüzme Havuzu</NavLink>
                            </h2>

                        </div>
                        <div className="card-body">
                            <Carousel swipeable infiniteLoop>
                                <div>
                                    <img src="https://firsat.me/img/big1024/18.06.25_23.54.03_1080x754_1.jpg" />
                                </div>
                            </Carousel>
                        </div>
                    </div>
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
