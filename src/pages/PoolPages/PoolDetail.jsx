import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Carousel } from 'react-responsive-carousel'
import { useParams } from 'react-router'
import PageHeader from '../../components/Headers/PageHeader'
import PoolCarousel from '../../components/PoolCarousel'
import AuthService from '../../services/authService'
import PoolImageAdd from './PoolImageAdd'

export default function PoolDetail() {
    let params = useParams()
    const [pool, setPool] = useState({})
    const pools = useSelector(state => state.pools)
    useEffect(() => {

        let poolId = params.id.split('-')
        if (!!poolId[1]) {
            let p = pools?.data?.find(f => f.pool?.poolId == poolId[1])

            if (!p) {
                console.log("404 yönlendir")
            } else {
                setPool(p)
            }
        }
    }, [])
    return (
        <div>
            <PageHeader text={pool?.pool?.poolName} />
            <div className="p-5">
                <div className="card p-5">
                    <div className="card-body">
                        {AuthService.isAdmin() &&
                            <div className="py-4">
                                <PoolImageAdd />
                            </div>
                        }
                        <PoolCarousel poolImages={pool?.poolImages} />
                        <div className="mt-4 pt-4">
                            <div>
                                <strong>Adres: </strong> {pool?.pool?.poolAddress}
                            </div>
                            <div className="mt-4">
                                <strong>Telefon: </strong> {pool?.pool?.poolPhone ?? "Telefon bilgisi bulunamadı"}
                            </div>
                        </div>
                        <div className="pt-5 ff-pap">
                            {pool?.pool?.poolDescription ?? "Açıklama bulunamadı"}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
