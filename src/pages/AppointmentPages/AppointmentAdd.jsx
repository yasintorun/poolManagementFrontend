import { Formik } from 'formik'
import React, { useState } from 'react'
import * as Yup from 'yup'
import { Button, Dropdown, Form } from 'semantic-ui-react'
import PoolDropdown from '../../components/Dropdowns/PoolDropdown'
import PageHeader from '../../components/Headers/PageHeader'
import YTInput from '../../utilities/customs/YTInput'
import LaneDropdown from '../../components/Dropdowns/LaneDropdown'
import YTFormField from '../../utilities/customs/YTFormField'
import YTDropdown from '../../utilities/customs/YTDropdown'
import { useDispatch } from 'react-redux'
import { addAppointment } from '../../store/actions/appointmentActions'
import { Formatter } from '../../utilities/Formatter'
import UserDropdown from '../../components/Dropdowns/UserDropdown'

export default function AppointmentAdd() {

    const initialValues = { user: { userId: "" }, pool: { poolId: "" }, lane: { laneId: "" }, startTime: "", endTime: "" };

    const dispatch = useDispatch()

    const schema = Yup.object().shape({
        user:Yup.object().shape({
            userId:Yup.number().required("Kullnıcı id zorunlu"),
        }),
        pool: Yup.object().shape({
            poolId: Yup.number().required("Havuz id zorunlu"),
        }),
        lane: Yup.object().shape({
            laneId: Yup.number().required("Havuz Şerit id zorunlu"),
        }),
        date: Yup.date().required("Başlama Tarihi zorunlu"),
        time: Yup.number().required("Randevu saati zorunlu"),
        hour: Yup.string().required("Saat zorunlu"),
        minute: Yup.string().required("Dakika zorunlu"),
    });

    const addAppointmentSubmit = values => {
        let val = {
            ...values,
            startTime: values.hour + ":" + values.minute,
            endTime: checkTime(parseInt(values.hour) + values.time) + ":" + values.minute,
        }
        //console.log(val)
        dispatch(addAppointment(val))
    }

    function checkTime(time) { if (time >= 24) { time -= 24; } if (time < 10) { time = "0" + time } return time } //Zaman kontrol.

    const hourOptions = ['07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22']
    const minuteOptions = ['00', '15', '30', '45']

    return (
        <div className="w-50 m-auto">
            <PageHeader text="Randevu Oluştur" />
            <div>
                <div>
                    <div className="card p-5">
                        <div className="card-header ">
                            <h3>Yeni Randevu Oluşturma</h3>
                        </div>
                        <div className="card-body text-dark ">
                            <Formik
                                initialValues={initialValues}
                                validationSchema={schema}
                                onSubmit={(values) => {
                                    addAppointmentSubmit(values)
                                }}
                            >
                                {props => (
                                    <Form className="ui form form-large form-display-1">
                                        <Form.Field>
                                            <label>Kullanıcı</label>
                                            <UserDropdown name="user.userId" />
                                        </Form.Field>
                                        <Form.Field>
                                            <label>Havuz</label>
                                            <PoolDropdown name="pool.poolId" />
                                        </Form.Field>
                                        <Form.Field>

                                            <label>Havuz Şeridi</label>
                                            <LaneDropdown name="lane.laneId" />
                                        </Form.Field>
                                        <Form.Field>
                                            <label className="">Tarih</label>
                                            <YTInput min={Formatter.getDate()} name="date" type="date" />
                                        </Form.Field>
                                        <Form.Group>
                                            <Form.Field>
                                                <label className="">Başlama Saati</label>
                                                <YTDropdown placeholder="Saat seçiniz" name="hour" options={hourOptions.map((k) => { return { key: k, value: k, text: k } })} />
                                            </Form.Field>
                                            <Form.Field>
                                                <label className="">Dakika</label>
                                                <YTDropdown placeholder="Dakika seçiniz" name="minute" options={minuteOptions.map((k) => { return { key: k, value: k, text: k } })} />
                                            </Form.Field>
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Field name="time">
                                                <label className="">Seans Saati?</label>
                                                <YTDropdown placeholder="Saat seçiniz" name="time" options={Array.from({ length: 3 }, (v, k) => k + 1).map((k) => { return { key: k, value: k, text: k } })} />
                                            </Form.Field>
                                        </Form.Group>
                                        <Button color='green' fluid onClick={() => props.submitForm()} type="submit" icon="checkmark" content="Ekle" />
                                    </Form>
                                )}
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div>
                <Formik
                    initialValues={initialValues}
                    validationSchema={schema}
                    onSubmit={(values) => {
                        addAppointmentSubmit(values)
                    }}
                >
                    {props => (
                        <Form className="ui form">
                            <label>Havuz</label>
                            <PoolDropdown name="pool.poolId"  />
                            <label>Havuz Şeridi</label>
                            <LaneDropdown name="lane.laneId"  />
                            <Form.Group>
                                <Form.Field>
                                    <label className="text-white">Başlama Tarihi</label>
                                    <YTInput min={Formatter.getDate()} name="date" type="date" />
                                </Form.Field>
                                <Form.Field>
                                    <label className="text-white">Saat</label>
                                    <YTDropdown placeholder="Saat seçiniz" name="hour"  options={hourOptions.map((k) => { return { key: k, value: k, text: k } })} />
                                </Form.Field>
                                <Form.Field>
                                    <label className="text-white">Dakika</label>
                                    <YTDropdown placeholder="Dakika seçiniz" name="minute" options={minuteOptions.map((k) => { return { key: k, value: k, text: k } })} />
                                </Form.Field>
                            </Form.Group>
                            <Form.Group>
                                <Form.Field name="time">
                                    <label className="text-white">Seans Saati?</label>
                                    <YTDropdown placeholder="Saat seçiniz" name="time" options={Array.from({ length: 3 }, (v, k) => k + 1).map((k) => { return { key: k, value: k, text: k } })} />
                                </Form.Field>
                            </Form.Group>
                            <Button color='green' onClick={() => props.submitForm()} type="submit" icon="checkmark" content="Ekle" />
                        </Form>
                    )}
                </Formik>
            </div> */}
        </div>
    )
}
