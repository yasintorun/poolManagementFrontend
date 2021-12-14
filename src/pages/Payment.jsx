import React, { useEffect, useState } from 'react'
import { Button, Divider, Dropdown, Form, Grid, Header, Icon, Image, Message, Search, Segment } from 'semantic-ui-react'
import PageHeader from '../components/Headers/PageHeader'
import YTInput from '../utilities/customs/YTInput'
import { Formik } from 'formik'
import { useHistory } from 'react-router'
import { toast } from 'react-toastify'
import { useSelector } from 'react-redux'
import * as Yup from 'yup'
import YTDropdown from '../utilities/customs/YTDropdown'
import CheckoutService from '../services/checkoutService'
import Cookies from 'js-cookie'
import { CookieTypes } from '../utilities/cookieTypes'
import { Formatter } from '../utilities/Formatter'
import ChangePackageButton from '../components/ChangePackageButton'
export default function Payment() {
    const checkout = useSelector(state => state.checkout)
    console.log(checkout)
    const history = useHistory()
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        if (!checkout || checkout.poolPackage == null) {
            toast.error("Önce Paket seçmelisiniz.")
            history.push("/dashboard/client/choose-package")
        }
        setTimeout(() => { setLoading(false) }, 500);


    }, [])


    const initialValues = { cardNumber: "", cardName: "", cvv: "", expirationDate: "" }

    const schema = Yup.object().shape({
        cardNumber: Yup.string().required("Kart numarası zorunlu").length(16, "Kart numarası 16 haneli olmalıdır"),
        cardName: Yup.string().required("Kart adı zorunlu").matches("^[a-z A-Z]*$", "Kart adı hatalı"),
        cvv: Yup.string().required("Cvv zorunlu").length(3, "Cvv 3 haneli olmalıdır").matches("^[0-9]*$", "Cvv hatalı"),
        month: Yup.string().required("Bu alan zorunlu"),
        year: Yup.string().required("Bu alan zorunlu"),
    });



    
    const monthOp = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"].map((v, index) => { return { key: index, value: v, text: v } })
    const yearsOp = Array.from({ length: 8 }, (v, k) => k + 2021).map((v, index) => { return { key: index, value: v + "", text: v } })


    const checkoutClick = (values) => {
        let checkoutService = new CheckoutService()
        const creditCard = {
            ...values,
            cardNumber: values.cardNumber + "",
            expirationDate: values.month + "/" + values.year.slice(2, 4)
        }

        const paymentInfo = {
            amount: checkout.poolPackage.packagePrice,
            creditCard: creditCard,
            paymentDate: "",
            userId: 7,
            item: checkout.poolPackage.packageName,
        }
        checkoutService.check(paymentInfo).then(result => {
            if (result.data.success) {
                toast.success(result.data.message)
            } else {
                toast.error(result.data.message)
            }
        })
    }
    console.log(checkout)
    return checkout.poolPackage && (

        <div>
            <PageHeader text="Ödeme" />
            <Segment loading={loading}>
                <Grid columns={2} stackable textAlign='center'>
                    <Divider vertical>YT</Divider>

                    <Grid.Row verticalAlign='middle'>
                        <Grid.Column textAlign="left">
                            <div className="px-2 checkout-item text-dark d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center">
                                    <Icon name="inbox" color="teal" size="huge" />
                                    <div className="ps-2">
                                        <h1>{checkout.poolPackage.packageType}</h1>
                                        <h4 className="m-0">{checkout.poolPackage.packageName}</h4>
                                    </div>
                                </div>
                                <div className="payment-price text-center">
                                    <div className="price">
                                        <span className="price-m">{checkout.poolPackage.packagePrice} </span> ₺ / {parseInt(checkout.poolPackage.packagePeriod / 30)} Ay
                                    </div>
                                </div>
                            </div>
                            <div>
                               <ChangePackageButton />
                            </div>
                        </Grid.Column>

                        <Grid.Column textAlign="left">
                            <div className="text-left p-5">
                                <div className="d-flex justify-content-center">
                                    <Image src='https://i1.wp.com/aktident.com.tr/wp-content/uploads/2018/01/Credit-Card-Visa-And-Master-Card-PNG-HD.png?ssl=1' size='medium' />
                                </div>
                                <Formik
                                    initialValues={initialValues}
                                    validationSchema={schema}
                                    onSubmit={(values) => {
                                        checkoutClick(values)
                                    }}
                                >
                                    {props => (
                                        <Form onSubmit={props.handleSubmit}>
                                            <Form.Field>
                                                <label>Kart Numarası</label>
                                                <YTInput name="cardNumber" type="number" placeholder='kart numarası' id="cc" />
                                            </Form.Field>
                                            <Form.Field>
                                                <label>Ad Soyad</label>
                                                <YTInput name="cardName"  placeholder='Ad/Soyad' />
                                            </Form.Field>
                                            <Form.Group widths={2}>
                                                <Form.Field>
                                                    <label>Ay</label>
                                                    <YTDropdown name="month" options={monthOp} />
                                                </Form.Field>
                                                <Form.Field>
                                                    <label>Yıl</label>
                                                    <YTDropdown name="year" options={yearsOp} />
                                                </Form.Field>
                                            </Form.Group>
                                            <Form.Field>
                                                <label>CVV</label>
                                                <YTInput name="cvv" placeholder='cvv' />
                                            </Form.Field>
                                            <Button type='submit' positive className="w-100" size="large">Öde</Button>
                                        </Form>
                                    )}
                                </Formik>
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        </div>
    )
}
