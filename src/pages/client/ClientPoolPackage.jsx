import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Button, Icon } from 'semantic-ui-react'
import ChangePackageButton from '../../components/ChangePackageButton'
import PageHeader from '../../components/Headers/PageHeader'
import PoolPackage from '../../components/PoolPackage'

export default function ClientPoolPackage() {
    const { data: userPack } = useSelector(state => state.userPackage)

    return (
        <div>
            <PageHeader text="Mevcut Paketim" />
            <div class="d-flex justify-content-center">
                {!!userPack
                    ? <PoolPackage poolPackage={userPack.poolPackage} cardStyle={{ height: 550 }} >
                        <p><strong>Başlama Tarihi: </strong>21 Temmuz 2021</p>
                        <p> <strong>Bitiş Tarihi: </strong>21 Ekim 2021</p>
                    </PoolPackage>
                    : <div>
                        <div class="alert alert-danger solid" role="alert">
                            Paketin bulunmuyor.
                        </div>
                    </div>
                }
            </div>
            <div>

            </div>

            {/* {userPackage.data != null ? (
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
            )} */}

            <div className=" mt-5">
                <div class="alert alert-success solid" role="alert">
                    <Icon name="check" />
                    Paketinizi tüm havuzumuzda kullanabilirsiniz. Randevu alırken istediğiniz bir havuzu seçebilirsiniz.
                </div>
                <div class="alert alert-info solid" role="alert">
                    <Icon name="warning" />
                    Mevcut paketi sadece yönetici değiştirebilir. Eğer paketinizi değiştirmek isterseniz havuz yöneticisi ile görüşebilirsiniz.
                </div>
                <div class="alert alert-warning solid" role="alert">
                    <Icon name="warning" />
                    Satın almış olduğunuz paketinizi bir haftaya kadar iptal edebilirsiniz. İptal ücreti paket fiyatının %10 kadarıdır.
                </div>
            </div>

        </div>
    )
}
