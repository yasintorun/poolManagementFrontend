import { Formik } from 'formik'
import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import AddModal from '../../components/Modals/AddModal'
import YTInput from '../../utilities/customs/YTInput'
import * as Yup from 'yup'
import { useDispatch } from 'react-redux'
import { addPoolPackage } from '../../store/actions/poolPackageActions'
import YTDropdown from '../../utilities/customs/YTDropdown'
export default function PoolPackageAdd() {
    const initialValues = { packageName: "", packageType:"", packagePeriod: "", packagePrice:""};

    const schema = Yup.object().shape({
        packageName: Yup.string().required("Paket adı zorunlu"),
        packageType: Yup.string().required("Paket tipi zorunlu"),
        packagePeriod: Yup.number().required("Paket süresi zorunlu").min(1, "En az 1 gün olabilir.").max(365, "En fazla 365 gün olabilir"),
        packagePrice: Yup.number().required("Paket fiyatı zorunlu").min(0, "En az sıfır olabilir.").max(10000, "En fazla 10 bin olabilir")
    });


    const dispatch = useDispatch()

    const addPoolPackageSubmit = (values) => {
        dispatch(addPoolPackage(values))
    }

    const packageTypeOption = [
        {key: 1, value:"Öğrenci", text:"Öğrenci"},
        {key: 2, value:"Bireysel", text:"Bireysel"},
        {key: 3, value:"Aile", text:"Aile"}
    ]

    return (
        <AddModal
            header="Havuz Paketi Ekle"
            trigger={<Button icon="plus" positive content="Yeni Havuz Paketi Ekle" />}
        >
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={(values) => {
                    addPoolPackageSubmit(values)
                }}
            >
                {props => (
                    <Form className="ui form">
                        <label>Paket Adı</label>
                        <YTInput name="packageName" placeholder="Paket adını giriniz" />

                        <label>Paket Tipi</label>
                        <YTDropdown name="packageType" placeholder="paket tipi" options={packageTypeOption}/>

                        <label>Paket süresi</label>
                        <YTInput type="number" name="packagePeriod" placeholder="Paket süresini giriniz" />

                        <label>Paket Fiyatı</label>
                        <YTInput type="number" step="50" name="packagePrice" placeholder="Paket süresini giriniz" />
                        <Button color='green' onClick={() => props.submitForm()} type="submit" icon="checkmark" content="Ekle" />
                    </Form>
                )}
            </Formik>
        </AddModal>
    )
}
