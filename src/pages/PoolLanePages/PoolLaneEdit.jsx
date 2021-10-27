import { Formik } from 'formik';
import React from 'react'
import * as Yup from 'yup'
import { Button, Form } from 'semantic-ui-react';
import PoolDropdown from '../../components/Dropdowns/PoolDropdown';
import YTInput from '../../utilities/customs/YTInput';
import AddModal from '../../components/Modals/AddModal';
import { useDispatch } from 'react-redux';
import { addPoolLanes, editPoolLane } from '../../store/actions/poolLaneActions';
import YTDropdown from '../../utilities/customs/YTDropdown';

export default function PoolLaneEdit({ lane }) {
    const initialValues = { ...lane };

    const schema = Yup.object().shape({
        laneName: Yup.string().required("Havuz şeridi adı zorunlu"),
        pool: Yup.object().shape({
            poolId: Yup.number().required("Havuz id zorunlu"),
        }),
    });

    const dispatch = useDispatch()
    const editPoolLaneSubmit = (values) => {
        console.log(values)
        dispatch(editPoolLane(values))
    }

    return (
        <AddModal
            header="Havuz Şeridini Düzenle"
            trigger={<Button icon="edit" color="facebook" />}
        >
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={(values) => {
                    editPoolLaneSubmit(values)
                }}
            >
                {props => (
                    <Form className="ui form">
                        <label>Havuz Şerit Adı</label>
                        <YTInput name="laneName" placeholder="Havuz adını giriniz" />
                        <PoolDropdown defaultValue={lane.pool.poolId} name="poolId" onChange={(event, data) => props.setFieldValue("pool.poolId", data.value)} />
                        <Button color='green' onClick={() => props.submitForm()} type="submit" icon="checkmark" content="Kaydet" />
                    </Form>
                )}
            </Formik>
        </AddModal>
    )
}
