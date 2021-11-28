import React from 'react'
import PageHeader from '../../components/Headers/PageHeader'

export default function ClientAppointmentList() {
    return (
        <div>
            <PageHeader text="Randevularım" />
            <div class="card">
                <div class="card-header">
                    <h2>Oluşturmuş Olduğun Tüm Randevu Listesi</h2>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-responsive-md table-large table-hover">
                            <thead>
                                <tr className="table-orange">
                                    <th className="w-80"> # </th>
                                    <th> Havuz Adı </th>
                                    <th> Şerit Adı </th>
                                    <th> Başlama Zamanı </th>
                                    <th> Bitiş Zamanı</th>
                                    <th> Tarih</th>
                                </tr>
                            </thead>
                            <tbody className="">
                                <tr>
                                    <td> 1 </td>
                                    <td>Milli Olimpiyat Yüzme Havuzu</td>
                                    <td>Şerit A</td>
                                    <td>13:45</td>
                                    <td>15:45</td>
                                    <td>1 Haziran 2021 </td>
                                </tr>
                                <tr>
                                    <td> 1 </td>
                                    <td>Milli Olimpiyat Yüzme Havuzu</td>
                                    <td>Şerit A</td>
                                    <td>13:45</td>
                                    <td>15:45</td>
                                    <td>1 Haziran 2021 </td>
                                </tr>
                                <tr>
                                    <td> 1 </td>
                                    <td>Milli Olimpiyat Yüzme Havuzu</td>
                                    <td>Şerit A</td>
                                    <td>13:45</td>
                                    <td>15:45</td>
                                    <td>1 Haziran 2021 </td>
                                </tr>
                                <tr>
                                    <td> 1 </td>
                                    <td>Milli Olimpiyat Yüzme Havuzu</td>
                                    <td>Şerit A</td>
                                    <td>13:45</td>
                                    <td>15:45</td>
                                    <td>1 Haziran 2021 </td>
                                </tr>
                                <tr>
                                    <td> 1 </td>
                                    <td>Milli Olimpiyat Yüzme Havuzu</td>
                                    <td>Şerit A</td>
                                    <td>13:45</td>
                                    <td>15:45</td>
                                    <td>1 Haziran 2021 </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
