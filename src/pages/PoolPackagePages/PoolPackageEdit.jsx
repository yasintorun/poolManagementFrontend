import { Formik } from 'formik'
import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import AddModal from '../../components/Modals/AddModal'
import YTInput from '../../utilities/customs/YTInput'
import * as Yup from 'yup'
import { useDispatch } from 'react-redux'
import { addPoolPackage, editPoolPackage } from '../../store/actions/poolPackageActions'
export default function PoolPackageEdit({poolPackage}) {
    const initialValues = {...poolPackage};

    const schema = Yup.object().shape({
        packageName: Yup.string().required("Paket adı zorunlu"),
        packagePeriod: Yup.number().required("Paket süresi zorunlu").min(1, "En az 1 gün olabilir.").max(365, "En fazla 365 gün olabilir"),
        packagePrice: Yup.number().required("Paket fiyatı zorunlu").min(0, "En az sıfır olabilir.").max(10000, "En fazla 10 bin olabilir")
    });


    const dispatch = useDispatch()

    const editPoolPackageSubmit = (values) => {
        dispatch(editPoolPackage(values))
    }

    return (
        <AddModal
            header="Havuz Paketini Düzenle"
            trigger={<Button icon="edit" color="facebook" />}
        >
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={(values) => {
                    editPoolPackageSubmit(values)
                }}
            >
                {props => (
                    <Form className="ui form">
                        <label>Paket Adı</label>
                        <YTInput name="packageName" placeholder="Paket adını giriniz" />

                        <label>Paket süresi</label>
                        <YTInput type="number" name="packagePeriod" placeholder="Paket süresini giriniz" />

                        <label>Paket Fiyatı</label>
                        <YTInput type="number" step="50" name="packagePrice" placeholder="Paket süresini giriniz" />
                        <Button color='green' onClick={() => props.submitForm()} type="submit" icon="checkmark" content="Kaydet" />
                    </Form>
                )}
            </Formik>
        </AddModal>
    )
}
