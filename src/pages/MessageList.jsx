import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Popup } from 'semantic-ui-react'
import PageHeader from '../components/Headers/PageHeader'
import MessageService from '../services/messageService'
import {Formatter} from '../utilities/Formatter'
import {SuccessAlert} from '../utilities/AlertMessages/YTAlerts'
import { toast } from 'react-toastify'
export default function MessageList() {
    const [messages, setMessages] = useState([])
    useEffect(() => {
        const messageService = new MessageService()
        messageService.getAllMessages().then(result => setMessages(result.data.data))
        console.log(messages)
    }, [messages])

    const handleReadMessage = id => {
        const messageService = new MessageService()
        messageService.getMessageById(id).then(result => {
            toast.success("Mesaj okundu olarak işaretlendi");
            setMessages([])
        })  
    }

    return (
        <>
            <PageHeader text={"Gelen Tüm Mesajlar"} />
            <div>
                <div>
                    <div className="card">
                        <div className="card-header">
                            <h2>Randevu Listesi</h2>
                        </div>
                        <dib className="card-body">
                            <div>
                                <table className="w-100 table table-hover table-large table-equal">
                                    <thead>
                                        <tr className="table-orange">
                                            <th style={{width: "20%"}}>Ad Soyad</th>
                                            <th style={{width: "20%"}}>Konu</th>
                                            <th style={{width: "20%"}}>Tarih</th>
                                            <th style={{width: "30%"}}>Mesaj</th>
                                            <th style={{width: "10%"}} className='text-center'>İşlemler</th>
                                        </tr>
                                    </thead>
                                    <tbody className="">
                                        {messages.map(msg => (
                                            <tr style={{backgroundColor: !msg.read ? "rgb(218 245 218)" : "transparent"}}>
                                                <td style={{maxWidth: "1px"}}>{msg.name}</td>
                                                <td style={{maxWidth: "1px"}} className='text-truncate'>{msg.subject}</td>
                                                <td style={{maxWidth: "1px"}}>{Formatter.ToLongDate(msg.createdAt)}</td>
                                                <td style={{maxWidth: "1px"}} className='text-truncate'>{msg.message}</td>
                                                <td className='text-center'>
                                                    <Popup content='Mesajı Oku' trigger={<Button icon='add' positive as={NavLink} to={"/dashboard/messages/"+msg.id}/>} />
                                                    <Popup content='Mesajı okundu olarak işaretle' trigger={<Button onClick={() => handleReadMessage(msg.id)} icon='check' color='facebook'/>} />
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </dib>
                    </div>
                    {/* <div class="card yt-message no-read">
                        <div class="card-body text-dark">
                            <h2>Yasin Torun</h2>
                            <div className='my-4'>
                                <strong>Konu: </strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, beatae.
                            </div>
                            <div>
                                <strong>Mesaj: </strong>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime recusandae quas quae nam ut omnis odit dignissimos? Reprehenderit ipsam tempora repudiandae qui quasi velit totam, quia laborum nihil corrupti? Nulla minima eius magni tenetur veritatis laudantium sint asperiores non doloremque, nesciunt enim! Nulla porro nisi beatae, eius doloribus labore. Maxime?
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    )
}
