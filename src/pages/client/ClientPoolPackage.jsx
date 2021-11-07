import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Button, Icon } from 'semantic-ui-react'
import ChangePackageButton from '../../components/ChangePackageButton'
import PageHeader from '../../components/Headers/PageHeader'

export default function ClientPoolPackage() {
    const userPackage = useSelector(state => state.userPackage)
    useEffect(() => {
        console.log(userPackage)
    }, [])
    return (
        <div>
            <PageHeader text="Mevcut Paketim" />
            {userPackage.data != null ? (
                <div className="d-flex justify-content-center">
                    <div className="package text-center pb-5">
                        <PageHeader text={userPackage.data.poolPackage.packagePeriod / 30 + " Ay"} />
                        <div className="">
                            <p className="package-name">{userPackage.data.poolPackage.packageName}</p>
                        </div>
                        <div className="mt-5">
                            <h3 className="">
                                Başlangıç Tarihi
                            </h3>
                            <p className="bg-light">{userPackage.data.createdAt}</p>
                        </div>
                        <div className="mt-5">
                            <h3 className="">
                                Bitiş Tarihi
                            </h3>
                            <p className="bg-light">20 Aralık 2021</p>
                        </div>
                        <div className="mt-5">
                            <h3 className="">
                                Fiyat
                            </h3>
                            <p className="bg-light text-danger fw-bold">{userPackage.data.poolPackage.packagePrice} TL</p>
                        </div>
                    </div>
                </div>
            ) : (
                <div>
                    <div class="alert alert-danger" role="alert">
                        Paketin bulunmuyor.
                    </div>
                </div>
            )}

            <div className=" mt-5">
            <div class="alert alert-success" role="alert">
                    <Icon name="check"/>
                    Paketinizi tüm havuzumuzda kullanabilirsiniz. Randevu alırken istediğiniz bir havuzu seçebilirsiniz.
                </div>
                <div class="alert alert-info" role="alert">
                    <Icon name="warning"/>
                    Mevcut paketi sadece yönetici değiştirebilir. Eğer paketinizi değiştirmek isterseniz havuz yöneticisi ile görüşebilirsiniz.
                </div>
                <div class="alert alert-warning" role="alert">
                    <Icon name="warning"/>
                    Satın almış olduğunuz paketinizi bir haftaya kadar iptal edebilirsiniz. İptal ücreti paket fiyatının %10 kadarıdır.
                </div>
            </div>

        </div>
    )
}
