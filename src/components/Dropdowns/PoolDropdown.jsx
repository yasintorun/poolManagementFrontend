import { useField } from 'formik';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Form } from 'semantic-ui-react'
import PoolService from '../../services/poolService'
import YTDropdown from '../../utilities/customs/YTDropdown';

export default function PoolDropdown({ ...props }) {
    
    const pools = useSelector(state => state.pools);

    return (
        <Form.Field >
            <YTDropdown
                placeholder='Havuz seçiniz'
                {...props}
                options={pools?.data?.map((p, index) => {
                    return { text: p.pool.poolName, key: index, value: p.pool.poolId }
                })}
                // value={value}
            />
        </Form.Field>
    )
}
