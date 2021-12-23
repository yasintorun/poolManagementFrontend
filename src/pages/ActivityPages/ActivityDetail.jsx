import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { NavLink } from 'react-router-dom'
import { Button, Icon } from 'semantic-ui-react'
import PageHeader from '../../components/Headers/PageHeader'
import { Formatter } from '../../utilities/Formatter'
import Helper from '../../utilities/Helper'

export default function ActivityDetail() {
    const params = useParams()
    const [activity, setActivityContent] = useState({})
    const activityContents = useSelector(state => state.activityContents)

    useEffect(() => {
        let ac = activityContents?.data?.find(x => x.id == params.id)
        setActivityContent(ac)

    }, [])

    const TableRow = ({ header, data }) => {
        return (
            <tr className='border-0'>
                <th>{header}</th>
                <td>{data}</td>
            </tr>
        )
    }

    return (
        <>
            <div className='py-5'>
                <div>
                    <PageHeader text="Etkinlik Detayları" />
                </div>
                <div className='card'>
                    <div className='card-header px-5'>
                        <div>
                            <h2 className='mt-0'>Etkinlik Adı: <span className='fw-lighter'> {activity?.name}</span></h2>
                            <h2 className=' text-warning'>Etkinlik Türü: <span className='fw-lighter'> {activity?.activity?.name}</span></h2>
                            <h2 className={activity?.status?'text-success':'text-danger'}>Etkinlik Durumu: Aktif</h2>
                        </div>
                    </div>
                    <div className='card-body'>
                        <table className='table table-bordered w-75 no-border'>
                            <TableRow header={"Etkinliği Oluşturan"} data={activity?.createdBy} />
                            <TableRow header={"Etkinliğin Yapılacağı Havuz"} data={activity?.pool?.poolName} />
                            <TableRow header={"Etkinliğe Katılım Ücreti"} data={activity?.price + "₺"} />
                            <TableRow header={"Etkinliğe Katılım Limiti"} data={activity?.maximumMember + " Kişi"} />
                            <TableRow header={"Etkinliğin Başlama Saati "} data={activity?.startTime} />
                            <TableRow header={"Etkinliğin Bitiş Saati "} data={activity?.endTime} />
                            <TableRow header={"Etkinlik Tarihi "} data={Formatter.ToLongDate(activity?.date)} />
                            <TableRow header={"Etkinliğin Oluşturulma Tarihi "} data={Formatter.ToLongDate(activity?.createdAt)} />
                            <TableRow header={"Özel bir Etkinlik mi? "} data={Helper.CheckBoxDisplay(activity?.special)} />
                            <TableRow header={"Etkinliğe Herkes Katılabilir mi? "} data={Helper.CheckBoxDisplay(activity?.public)} />
                        </table>
                        <div className='my-5'>
                            <strong>Açıklama: </strong>
                            <p className='fs-5 my-4'>{activity?.description ?? "Açıklama bulunmuyor"}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
