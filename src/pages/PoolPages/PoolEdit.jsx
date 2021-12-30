import { Formik, useField } from 'formik'
import React, { useEffect, useRef, useState } from 'react'
import { Button, Form, Icon, Popup, TextArea } from 'semantic-ui-react'

import * as Yup from "yup";
import AddModal from '../../components/Modals/AddModal';
import YTInput from '../../utilities/customs/YTInput'
import PoolService from '../../services/poolService'
import { useDispatch, useSelector } from 'react-redux';
import { deletePoolPhotos, editPools } from '../../store/actions/poolActions';
import PageHeader from '../../components/Headers/PageHeader'
import { useHistory, useParams } from 'react-router';
import { DeleteAlert } from '../../utilities/AlertMessages/YTAlerts';
export default function PoolEdit() {
    const [pool, setPool] = useState({})
    const pools = useSelector(state => state.pools)
    const params = useParams()
    const formikRef = useRef(null)
    const history = useHistory()
    useEffect(() => {
        if(!params || !params.id || !pools || !pools.data) {
            history.push("/dashboard")
            return
        }
        const p = pools.data.find(x => x.pool.poolId == params.id)
        if(!p) {
            history.push("/dashboard")
            return
        }

        setPool(p)
        formikRef.current.setValues({...p.pool})
        console.log(p)


    }, [])
    
    const schema = Yup.object().shape({
        poolName: Yup.string().required("Havuz adı zorunlu"),
        poolAddress: Yup.string().required("Havuz adresi zorunlu"),
    });

    const dispatch = useDispatch()

    const editPoolSubmit = (values) => {
       console.log(values)
        dispatch(editPools(values)).then(result => {
            setTimeout(() => {
                history.push("/dashboard/pool-list")
            }, 1000);
        })
    }

    const deletePhoto = (img) => {
        console.log({poolId: pool.pool.poolId, imageId: img.imageId})
        DeleteAlert("Havuz Fotoğrafı", "Bu işlemi geri alamazsın", ()=>dispatch(deletePoolPhotos(pool.pool.poolId, img.imageId)))
    }

    return (
        <>
            <div>
                <PageHeader text="Havuz Düzenle" />
                <div>
                    <div className='card w-75 p-5 m-auto'>
                        <div className='card-body'>
                            <div className=''>
                                <Formik
                                    innerRef={formikRef}
                                    initialValues={{}}
                                    validationSchema={schema}
                                    onSubmit={(values) => {
                                        editPoolSubmit(values)
                                    }}
                                >
                                    {props => (
                                        <Form className="ui form">
                                            <label>Havuz Adı</label>
                                            <YTInput name="poolName" placeholder="Havuz adını giriniz" defaultValue={pool?.pool?.poolName??""}/>
                                            <label>Adres</label>
                                            <YTInput name="poolAddress" placeholder="Havuz adresini giriniz" />
                                            <label>Telefon</label>
                                            <YTInput name="poolPhone" placeholder="Havuz telefonunu giriniz" />
                                            <label>Açıklama</label>
                                            <TextArea onChange={(event, data) => props.setFieldValue("poolDescription", data.value)} defaultValue={pool?.pool?.poolDescription} name="poolDescription" placeholder="Havuz için bir açıklama giriniz" />
                                            <br/>
                                            <Button className='my-3' color='green' onClick={() => props.submitForm()} type="submit" icon="checkmark" content="Kaydet" />
                                        </Form>
                                    )}
                                </Formik>
                                <div>
                                    <PageHeader text={"Havuz Fotoğrafları"}/>
                                    <div class="alert alert-primary solid" role="alert">
                                        <i aria-hidden="true" class="warning icon"></i>
                                        Havuz detay kısmından fotoğraf ekleyebilirsiniz.
                                    </div>
                                    
                                    <div class="alert alert-info solid" role="alert">
                                        <i aria-hidden="true" class="warning icon"></i>
                                        Kırmızı butona basarak fotoğrafları kaldırabilirsiniz.
                                    </div>
                                    
                                    <div>
                                        {pool?.poolImages?.map(img => (
                                            <div className='my-4 position-relative'>
                                                <img src={img.imagePath} className='w-100 p-absolute h-auto'/>
                                                <Popup
                                                    content='Fotoğrafı Sil'
                                                    trigger={<Button className='position-absolute top-0 end-0' icon="x" negative onClick={()=>deletePhoto(img)}/> } 
                                                />
                                            </div>
                                        )) ?? "Fotoğraf Bulunmuyor"}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
