import { Formik, useField } from 'formik'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Button, Form, Icon, Message } from 'semantic-ui-react'

import * as Yup from "yup";
import AddModal from '../../components/Modals/AddModal';
import YTInput from '../../utilities/customs/YTInput'
import PoolService from '../../services/poolService'
import { useDispatch } from 'react-redux';
import { addPools, uploadPoolPhotos } from '../../store/actions/poolActions';
import Helper from '../../utilities/Helper';
import { uploadImage } from '../../store/actions/imageActions';
export default function PoolImageAdd({poolId}) {
    const [isPhotoLoading, setIsPhotoLoading] = useState(false)
    const [uploadedPhotos, setUploadedPhotos] = useState([])
    const [photoSrc, setPhotoSrc] = useState([])

    const dispatch = useDispatch()
    const fileRef = useRef(null)
    const poolPhotosRef = useRef(null)
    const uploadPhotoFile = async e => {
        if(uploadedPhotos.length == 0) return
        setIsPhotoLoading(true)
        //console.log(uploadedPhotos)
        uploadedPhotos.map(async (photo, idx) => {
            console.log(photo)
            const fileData = new FormData()
            fileData.append("file", photo)
            await Helper.setCallBack(() => {
                dispatch(uploadPoolPhotos(fileData, poolId)).then(() => {
                    setTimeout(() => {
                        setIsPhotoLoading(false)
                    }, 100)
                })
            })
        })
    }

    const onFileUploaded = e => {
        const reader = new FileReader()
        reader.onload = () => {
            setPhotoSrc([...photoSrc, reader.result])
            console.log(photoSrc)
        }
        reader.readAsDataURL(fileRef.current.files[0])

        setUploadedPhotos([...uploadedPhotos, fileRef?.current.files[0]])
    }

    const deletePhotoByState = (idx) => {
        const arr = [...uploadedPhotos]
        arr.splice(idx, 1)
        setUploadedPhotos(arr)

        const src = [...photoSrc]
        src.splice(idx, 1)
        setPhotoSrc(src)
    }

    useEffect(() => {

    }, [uploadedPhotos])

    return (
        <div>
            <AddModal
                header="Havuz Fotoğrafı Ekle"
                buttonName="Ekle"
                trigger={<Button icon="plus" positive content="Yeni Havuz Fotoğrafı Ekle" />}
                onClose={() => setUploadedPhotos([])}
            >
                <Form className="ui form" loading={isPhotoLoading}>
                    <Form.Field>
                        <label>Havuz Adı</label>
                        <input ref={fileRef} type="file" name="fileImage" multiple className="form-control" accept="image/*" onChange={(e) => onFileUploaded(e)} />
                    </Form.Field>
                    <Form.Field className="d-flex vertical-scroll">
                        {photoSrc.map((photo, idx) => (
                            <div className="me-2 mb-2 text-center" >
                                <img className="" src={photo} width="150" height="100" /> 
                                <br />
                                <button class=" btn btn-danger" onClick={() => deletePhotoByState(idx)}>X</button>
                            </div>
                        ))}
                    </Form.Field>
                    <Button positive onClick={uploadPhotoFile}>Ekle</Button>
                </Form>
            </AddModal>
        </div>
    )
}
