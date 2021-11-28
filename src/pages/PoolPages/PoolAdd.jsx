import { Formik, useField } from 'formik'
import React, { useRef } from 'react'
import { Button, Form, Icon, Message } from 'semantic-ui-react'

import * as Yup from "yup";
import AddModal from '../../components/Modals/AddModal';
import YTInput from '../../utilities/customs/YTInput'
import PoolService from '../../services/poolService'
import { useDispatch } from 'react-redux';
import { addPools } from '../../store/actions/poolActions';
export default function () {
    const initialValues = { poolName: "", poolAddress: "" };

    const schema = Yup.object().shape({
        poolName: Yup.string().required("Havuz adı zorunlu"),
        poolAddress: Yup.string().required("Havuz adresi zorunlu"),
    });


    const dispatch = useDispatch()

    const addPoolSubmit = (values) => {
        dispatch(addPools(values))
    }

    return (
        <div>
            <AddModal
                header="Havuz Ekle"
                buttonName="Ekle"
                trigger={<Button icon="plus" positive content="Yeni Havuz Ekle" />}
            >
                <Formik
                    initialValues={initialValues}
                    validationSchema={schema}
                    onSubmit={(values) => {
                        addPoolSubmit(values)
                    }}
                >
                    {props => (
                        <Form className="ui form">
                            <label>Havuz Adı</label>
                            <YTInput name="poolName" placeholder="Havuz adını giriniz" />
                            <label>Havuz Adresi</label>
                            <YTInput name="poolAddress" placeholder="Havuz adresini giriniz" />
                            <Button color='green' onClick={()=>props.submitForm()} type="submit" icon="checkmark" content="Ekle" />
                            <Message color="yellow">Havuz fotoğrafları havuz detay sayfasından eklenmektedir.</Message>
                        </Form>
                    )}
                </Formik>
            </AddModal>
        </div>
    )
}
