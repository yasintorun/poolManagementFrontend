import { Formik } from 'formik';
import React from 'react'
import * as Yup from 'yup'
import { Button, Form } from 'semantic-ui-react';
import PoolDropdown from '../../components/Dropdowns/PoolDropdown';
import YTInput from '../../utilities/customs/YTInput';
import AddModal from '../../components/Modals/AddModal';
import { useDispatch } from 'react-redux';
import { addPoolLanes } from '../../store/actions/poolLaneActions';
import YTDropdown from '../../utilities/customs/YTDropdown';

export default function PoolLaneAdd() {
    const initialValues = { laneName: "", pool: { poolId: "" } };

    const schema = Yup.object().shape({
        laneName: Yup.string().required("Havuz şeridi adı zorunlu"),
        pool: Yup.object().shape({
            poolId: Yup.number().required("Havuz id zorunlu"),
        }),
    });

    const dispatch = useDispatch()
    const addPoolLaneSubmit = (values) => {
        console.log(values)
        dispatch(addPoolLanes(values))
    }

    return (
        <div>
            <AddModal
                header="Havuz Şerit Ekle"
                trigger={<Button icon="plus" positive content="Yeni Havuz Ekle" />}
            >
                <Formik
                    initialValues={initialValues}
                    validationSchema={schema}
                    onSubmit={(values) => {
                        addPoolLaneSubmit(values)
                    }}
                >
                    {props => (
                        <Form className="ui form">
                            <label>Havuz Şerit Adı</label>
                            <YTInput name="laneName" placeholder="Havuz adını giriniz" />
                            <PoolDropdown  name="poolId" onChange={(event, data) => props.setFieldValue("pool.poolId", data.value)} />
                            <Button color='green' onClick={() => props.submitForm()} type="submit" icon="checkmark" content="Ekle" />
                        </Form>
                    )}
                </Formik>
            </AddModal>
        </div>
    )
}
