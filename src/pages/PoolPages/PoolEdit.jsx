import { Formik, useField } from 'formik'
import React, { useRef } from 'react'
import { Button, Form, Icon } from 'semantic-ui-react'

import * as Yup from "yup";
import AddModal from '../../components/Modals/AddModal';
import YTInput from '../../utilities/customs/YTInput'
import PoolService from '../../services/poolService'
import { useDispatch } from 'react-redux';
import { editPools } from '../../store/actions/poolActions';
export default function ({pool}) {
    const initialValues = { ...pool};

    const schema = Yup.object().shape({
        poolName: Yup.string().required("Havuz adı zorunlu"),
        poolAddress: Yup.string().required("Havuz adresi zorunlu"),
    });

    const dispatch = useDispatch()

    const editPoolSubmit = (values) => {
        dispatch(editPools(values))
    }

    return (
            <AddModal
                header="Havuzu Düzenle"
                trigger={<Button icon="edit" color="facebook" />}
            >
                <Formik
                    initialValues={initialValues}
                    validationSchema={schema}
                    onSubmit={(values) => {
                        editPoolSubmit(values)
                    }}
                >
                    {props => (
                        <Form className="ui form">
                            <label>Havuz Adı</label>
                            <YTInput name="poolName" placeholder="Havuz adını giriniz" />
                            <label>Havuz Adresi</label>
                            <YTInput name="poolAddress" placeholder="Havuz adresini giriniz" />
                            <Button color='green' onClick={()=>props.submitForm()} type="submit" icon="checkmark" content="Kaydet" />
                        </Form>
                    )}
                </Formik>
            </AddModal>
    )
}
