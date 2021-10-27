import React from 'react'
import { useSelector } from 'react-redux'
import { Table } from 'semantic-ui-react'
import PageHeader from '../../components/Headers/PageHeader'

export default function RoleList() {
    const roles = useSelector(state => state.roles)
    
    return (
        <div>
            <PageHeader text="Roller" />
            <Table celled inverted color="teal" size="small" selectable>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Role Id</Table.HeaderCell>
                            <Table.HeaderCell>Role Adı</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {
                            roles?.data?.map(role => (
                                <Table.Row>
                                    <Table.Cell>{role.roleId}</Table.Cell>
                                    <Table.Cell>{role.roleName}</Table.Cell>
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
