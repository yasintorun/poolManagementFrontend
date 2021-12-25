import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router'
import PageHeader from '../components/Headers/PageHeader'
import MessageService from '../services/messageService'

function MessageDetail() {
    const [message, setMessage] = useState({})
    const params = useParams()
    useEffect(() => {
        if(!params || !params.id) {
            return
        }
        const messageService = new MessageService()
        messageService.getMessageById(params.id).then(result => setMessage(result.data.data))
    }, [])
    return (
        <>
            <div>
                <PageHeader text={"Mesaj Detay " + params.id} />
                <div>
                    <div className='card'>
                        <div className='card-body'>
                            <h2>{message?.subject ?? "Konu"}</h2>
                            <div className='my-4 text-orange'>
                                <strong>Gönderen: </strong> {message?.name}
                            </div>
                            <div className='my-5 text-primary'>
                                <strong>Mail Adresi: </strong> {message?.email}
                            </div>
                            <div className='py-4'>
                                <strong>Mesaj: </strong> <br/><br/>{message.message}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default MessageDetail
