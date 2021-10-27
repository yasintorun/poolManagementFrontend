import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Form } from 'semantic-ui-react'
import PoolService from '../../services/poolService'

export default function PoolDropdown({ ...props }) {
    
    const pools = useSelector(state => state.pools);

    return (
        <Form.Field>
            <Form.Select
                placeholder='Havuz seçiniz'
                label="Havuz"
                {...props}
                search
                options={pools?.data?.map((p, index) => {
                    return { text: p.poolName, key: index, value: p.poolId }
                })}
                // value={value}
            />
        </Form.Field>
    )
}
