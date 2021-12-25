import { Formik } from 'formik'
import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Button, Form, Message } from 'semantic-ui-react'
import { uploadImage } from '../store/actions/imageActions'
import { updateProfilePhoto } from '../store/actions/userActions'
import YTInput from '../utilities/customs/YTInput'
import Helper from '../utilities/Helper'
import AddModal from './Modals/AddModal'

function UpdateProfilePhoto({userId}) {
    const [isPhotoLoading, setIsPhotoLoading] = useState(false)
    const dispatch = useDispatch()
    const fileRef = useRef(null)
    
    const onFileUploaded = async e => {
        setIsPhotoLoading(true)
        const fileData = new FormData()
        fileData.append("file", fileRef.current.files[0])
        console.log(fileRef.current.files[0])
        await Helper.setCallBack(() => {
            dispatch(updateProfilePhoto(fileData, userId)).then(() => {
                setTimeout(() => {
                    setIsPhotoLoading(false)
                }, 1000)
            })
        })
    }

    return (
        <>
            <AddModal
                header="Profil Fotoğrafını Seç"
                icon="edit"
                trigger={<Button icon="edit" content="Fotoğrafı Güncelle" color='orange' />}
            >
                <Formik
                    initialValues={{fileImage: "",}}
                    onSubmit={(values) => {
                        //addPoolSubmit(values)
                        onFileUploaded()
                    }}
                >
                    {props => (
                        <Form className="ui form" loading={isPhotoLoading}>
                            <div className='my-4'>
                                <label>Fotoğrafınızı Seçin</label>
                                <input ref={fileRef} type="file" name="fileImage" className="form-control" accept="image/*"/>
                            </div>
                            <Button color='green' onClick={() => props.submitForm()} type="submit" icon="checkmark" content="Kaydet" />
                        </Form>
                    )}
                </Formik>
            </AddModal>
        </>
    )
}

export default UpdateProfilePhoto
