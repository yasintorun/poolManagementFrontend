import React from 'react'
import { Carousel } from 'react-responsive-carousel'

export default function PoolCarousel({ poolImages }) {
    console.log(poolImages)
    return (
        <Carousel swipeable infiniteLoop>
            {poolImages?.length != 0 ? poolImages?.map(pi => (
                <div>
                    <img src={pi} />
                </div>
            ))
            :
            <div>
                <img src="http://res.cloudinary.com/dost/image/upload/v1638130050/PoolManagement/pools/r0nkefalizx654d1joni.jpg"/>
            </div>
            }
        </Carousel>
    )
}
