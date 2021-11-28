import React, { useEffect } from 'react'
import { useDispatch, useSelector,  } from 'react-redux'
import { Link, NavLink, useHistory } from 'react-router-dom'
import { Button, Icon, Menu, Message, Tab } from 'semantic-ui-react'
import PageHeader from '../components/Headers/PageHeader'
import { choosePoolPackage } from '../store/actions/checkoutActions'

export default function ChoosePoolPackage() {
    const dispatch = useDispatch()
    const poolPackages = useSelector(state => state.poolPackages)
    const userPackage = useSelector(state => state.userPackage)

    const getPackageByType = (type) => {
        return poolPackages.data.sort(function (a, b) {
            return a.packagePeriod - b.packagePeriod
        })
            .filter(p => p.packageType == type)
    }

    const PriceCard = ({ headerClass, poolPackage }) => {
        return (
            <div className="price-card">
                <div className={headerClass + " price-card-header"}>
                    <h1>{parseInt(poolPackage.packagePeriod / 30) + " Ay"}</h1>
                    <p>{poolPackage.packageName}</p>
                </div>
                <div className="price-card-body text-center py-4">
                    <div className="price">
                        <span className="price-m">{poolPackage.packagePrice}</span> ₺
                    </div>
                </div>
                <div className="price-card-action">
                    <Button icon="shop" disabled={!!userPackage.data} content="Seç" fluid className="w-100" color="vk" size="huge" onClick={() => handlePackageClick(poolPackage)}/>
                </div>
            </div>
        )
    }

    const headerClass = ["month-3", "month-6", "month-12"]
    const history = useHistory()
    const handlePackageClick = (poolPackage) => {
        dispatch(choosePoolPackage(poolPackage))
        history.push("/dashboard/client/payment")
    }

    const StudentPanel = () => {
        return (
            <>
                <div className="d-flex justify-content-between" as={NavLink} to="/">
                    {
                        getPackageByType("Öğrenci")?.map((p, index) => (
                            <PriceCard headerClass={headerClass[index]} poolPackage={p}/>
                        ))
                    }
                </div>
                <div className="mt-5">
                    <div className="alert alert-warning" role="alert">
                        <Icon name="warning" />
                        Bu paketlerden yararlanabilmek için öğrenci kimliğiniz olmalıdır.
                    </div>
                    <div className="alert alert-danger" role="alert">
                        <Icon name="warning" />
                        Bu paketlerden birini satın aldığınızda öğrenci kimlik kartınızı yöneticiye göstermek zorundasınız.
                    </div>
                </div>
            </>
        )
    }

    const IndividualPanel = () => {
        return (
            <>
                <div className="d-flex justify-content-between" as={NavLink} to="/">
                    {
                        getPackageByType("Bireysel")?.map((p, index) => (
                            <PriceCard headerClass={headerClass[index]} poolPackage={p} />
                        ))
                    }
                </div>
            </>
        )
    }

    const FamilyPanel = () => {
        return (
            <>
                <div className="d-flex justify-content-between" as={NavLink} to="/">
                    {
                        getPackageByType("Aile")?.map((p, index) => (
                            <PriceCard headerClass={headerClass[index]} poolPackage={p} />
                        ))
                    }
                </div>
                <div className="mt-5">
                    <div className="alert alert-warning" role="alert">
                        <Icon name="warning" />
                        Bu paketteki kullanıcılarda diğer paketteki kullanıcılar gibi tek bir havuz şeridi için üye olmalıdır.
                    </div>
                    <div className="alert alert-danger" role="alert">
                        <Icon name="warning" />
                        Aile birey sayısı en fazla 6 kişi olmalıdır. Eğer 6 kişiden fazla iseniz yönetici ile iletişime geçiniz.
                    </div>
                </div>
            </>
        )
    }

    const panes = [
        {
            menuItem: 'Öğrenci',
            render: () => <Tab.Pane inverted color="teal" className="custom" attached={false}><StudentPanel /></Tab.Pane>,
        },
        {
            menuItem: 'Bireysel',
            render: () => <Tab.Pane inverted color="teal" className="custom" attached={false}><IndividualPanel /></Tab.Pane>,
        },
        {
            menuItem: 'Aile',
            render: () => <Tab.Pane inverted color="teal" className="custom" attached={false}><FamilyPanel /></Tab.Pane>,
        },
    ]

    return (
        <div className=" ">
            <PageHeader text="Paket Seç" />
            <Tab loading menu={{ size: "massive", widths: 3, color: "teal", pointing: true, inverted: true }} panes={panes} />
        </div>
    )
}
