import { Formik } from 'formik'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Button, Form, TextArea } from 'semantic-ui-react'
import ActivityTypeDropdown from '../../components/Dropdowns/ActivityTypeDropdown'
import PoolDropdown from '../../components/Dropdowns/PoolDropdown'
import PageHeader from '../../components/Headers/PageHeader'
import { addActivityContent } from '../../store/actions/activityContentActions'
import YTDropdown from '../../utilities/customs/YTDropdown'
import YTInput from '../../utilities/customs/YTInput'
import { Formatter } from '../../utilities/Formatter'

export default function ActivityAdd() {
    const dispatch = useDispatch()
    const initialValues = {
        activity: {id: 0,},
        createdBy: "",
        createdPhone: "",
        date: "",
        description: "",
        endTime: "",
        startTime: "",
        maximumMember: 0,
        name: "",
        pool: {poolId: 0},
        price: 0,
        public: false,
        special: false,
        status: false,
        createdAt: "",
    }

    function checkTime(time) { if (time >= 24) { time -= 24; } if (time < 10) { time = "0" + time } return time } //Zaman kontrol.

    const hourOptions = ['07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22']
    const minuteOptions = ['00', '15', '30', '45']

    return (
        <div>
            <div className="w-50 m-auto">
                <PageHeader text="Etkinlik Oluştur" />
                <div>
                    <div>
                        <div className="card p-5">
                            <div className="card-header ">
                                <h3>Yeni Etkinlik Oluştur</h3>
                            </div>
                            <div className="card-body text-dark ">
                                <Formik
                                    initialValues={initialValues}
                                    // validationSchema={schema}
                                    onSubmit={(values) => {
                                        let val = {
                                            ...values,
                                            startTime: values.startHour + ":"+values.startMinute,
                                            endTime: values.endHour + ":"+values.endMinute,
                                            createdAt: Formatter.getDate(),
                                        }
                                        console.log(val)
                                        dispatch(addActivityContent(val))
                                    }}
                                >
                                    {props => (
                                        <Form className="ui form form-large form-display-1">
                                            <Form.Field>
                                                <label className="">Etkinliği Adı</label>
                                                <YTInput name="name" type="text" placeholder="Etkinlik adı.." />
                                            </Form.Field>
                                            <Form.Field>
                                                <label className="">Etkinliği Oluşturan(İsim Soyisim)</label>
                                                <YTInput name="createdBy" type="text" placeholder="Admin" />
                                            </Form.Field>
                                            <Form.Field>
                                                <label className="">Etkinliği Oluşturanın Telefon Numarası</label>
                                                <YTInput name="createdPhone" type="text" />
                                            </Form.Field>
                                            <Form.Field>
                                                <label>Etkinliğin Yapılacağı Havuz</label>
                                                <PoolDropdown name="pool.poolId" />
                                            </Form.Field>
                                            <Form.Field>
                                                <label>Etkinlik Türü</label>
                                                <ActivityTypeDropdown name="activity.id" />
                                            </Form.Field>
                                            <Form.Field>
                                                <label className="">Katılım Ücreti</label>
                                                <YTInput name="price" type="number" min="0" max="1000" />
                                            </Form.Field>
                                            <Form.Field>
                                                <label className="">Katılım Limiti</label>
                                                <YTInput name="maximumMember" type="number" min="0" max="100" />
                                            </Form.Field>
                                            <Form.Field>
                                                <label className="">Etkinlik Tarihi</label>
                                                <YTInput min={Formatter.getDate()} name="date" type="date" />
                                            </Form.Field>
                                            <Form.Group>
                                                <Form.Field>
                                                    <label className="">Başlama Saati</label>
                                                    <YTDropdown placeholder="Saat seçiniz" name="startHour" options={hourOptions.map((k) => { return { key: k, value: k, text: k } })} />
                                                </Form.Field>
                                                <Form.Field>
                                                    <label className="">Dakika</label>
                                                    <YTDropdown placeholder="Dakika seçiniz" name="startMinute" options={minuteOptions.map((k) => { return { key: k, value: k, text: k } })} />
                                                </Form.Field>
                                            </Form.Group>
                                            <Form.Group>
                                                <Form.Field>
                                                    <label className="">Bitiş Saati</label>
                                                    <YTDropdown placeholder="Saat seçiniz" name="endHour" options={hourOptions.map((k) => { return { key: k, value: k, text: k } })} />
                                                </Form.Field>
                                                <Form.Field>
                                                    <label className="">Dakika</label>
                                                    <YTDropdown placeholder="Dakika seçiniz" name="endMinute" options={minuteOptions.map((k) => { return { key: k, value: k, text: k } })} />
                                                </Form.Field>
                                            </Form.Group>
                                            <Form.Field>
                                                <Form.Checkbox onChange={(e) => props.setFieldValue("special", e.target.checked)} id="isSpecial" name='special' className='float-start me-2' />
                                                <label for="isSpecial" className="">Özel Bir Etkinlik mi?</label>
                                            </Form.Field>

                                            <Form.Field>
                                                <Form.Checkbox onChange={(e) => props.setFieldValue("public", e.target.checked)} id="isPublic" name="public" className='float-start me-2' />
                                                <label for="isPublic" className="">Herkes Katılabilir mi?</label>
                                            </Form.Field>
                                            <Form.Field>
                                                <label className="">Etkinlik Açıklaması</label>
                                                <TextArea onChange={(e) => props.setFieldValue("description", e.target.value)} name="description" placeholder='Açıklama giriniz..' />
                                            </Form.Field>
                                            <Button color='green' fluid onClick={() => props.submitForm()} type="submit" icon="checkmark" content="Ekle" />
                                        </Form>
                                    )}
                                </Formik>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
