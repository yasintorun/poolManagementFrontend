import React from 'react'
import { useSelector } from 'react-redux'
import { Form } from 'semantic-ui-react'
import YTDropdown from '../../utilities/customs/YTDropdown'

export default function LaneDropdown({...props}) {
    const poolLanes = useSelector(state => state.poolLanes)

    return (
        <Form.Field>
            <YTDropdown
                placeholder='Havuz Şeridi seçiniz'
                {...props}
                options={poolLanes?.data?.map((p, index) => {
                    return { text: p.laneName, key: index, value: p.laneId }
                })}
            // value={value}
            />
        </Form.Field>
    )
}
