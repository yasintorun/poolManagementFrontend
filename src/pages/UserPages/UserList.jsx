import React from 'react'
import { useSelector } from 'react-redux'
import { Icon, Table } from 'semantic-ui-react'
import PageHeader from '../../components/Headers/PageHeader'

export default function UserList() {
    const users = useSelector(state => state.users)
    return (
        <div>
            <PageHeader text="Kullanıcılar" />
            <Table celled inverted color="teal" size="small" selectable>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Id</Table.HeaderCell>
                            <Table.HeaderCell>Eposta adresi</Table.HeaderCell>
                            <Table.HeaderCell>Ad</Table.HeaderCell>
                            <Table.HeaderCell>Soyad</Table.HeaderCell>
                            <Table.HeaderCell>Cinsiyet</Table.HeaderCell>
                            <Table.HeaderCell>Durum</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {
                            users?.data?.map(user => (
                                <Table.Row>
                                    <Table.Cell>{user.userId}</Table.Cell>
                                    <Table.Cell>{user.account.email}</Table.Cell>
                                    <Table.Cell>{user.firstname}</Table.Cell>
                                    <Table.Cell>{user.lastname}</Table.Cell>
                                    <Table.Cell>{user.genderId}</Table.Cell>
                                    <Table.Cell><Icon name="circle" color={user.account.status ? "green" : "red"}/></Table.Cell>
                                    {/* <Table.Cell textAlign="right" className="table-actions">
                                        <Popup content='Havuzu düzenle' trigger={<PoolEdit pool={pool}/>} />
                                        <Popup negative content="Havuzu Sil" trigger={<Button icon="trash" negative onClick={()=>poolDelete(pool.poolId)}/>} />
                                    </Table.Cell> */}
                                </Table.Row>
                            ))
                        }
                    </Table.Body>
                </Table>
        </div>
    )
}
