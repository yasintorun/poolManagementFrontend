import React from 'react'
import { Table } from 'semantic-ui-react'
import PageHeader from '../../components/Headers/PageHeader'
import ChoosePoolPackage from '../ChoosePoolPackage'

export default function PoolPackageTable() {
    return (
        <div>
            <PageHeader text="Havuz Paket Tablosu"/>
            <Table inverted color="teal"  celled>
                <Table.Header>
                    <Table.Row textAlign="center">
                        <Table.HeaderCell></Table.HeaderCell>
                        <Table.HeaderCell>3 Ay</Table.HeaderCell>
                        <Table.HeaderCell>6 Ay</Table.HeaderCell>
                        <Table.HeaderCell>12 Ay</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row textAlign="center" verticalAlign="middle">
                        <Table.HeaderCell textAlign="left">Öğrenci</Table.HeaderCell>
                        <Table.Cell>150 ₺</Table.Cell>
                        <Table.Cell>250 ₺</Table.Cell>
                        <Table.Cell>450 ₺</Table.Cell>
                    </Table.Row>
                    <Table.Row textAlign="center" verticalAlign="middle">
                        <Table.HeaderCell textAlign="left">Bireysel</Table.HeaderCell>
                        <Table.Cell>250 ₺</Table.Cell>
                        <Table.Cell>450 ₺</Table.Cell>
                        <Table.Cell>800 ₺</Table.Cell>
                    </Table.Row>
                    <Table.Row textAlign="center" verticalAlign="middle">
                        <Table.HeaderCell textAlign="left">Aile</Table.HeaderCell>
                        <Table.Cell>750 ₺</Table.Cell>
                        <Table.Cell>1250 ₺</Table.Cell>
                        <Table.Cell>2000 ₺</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        </div>
    )
}
