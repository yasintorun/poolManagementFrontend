import React from 'react'

export default function PoolPackage({ header, price, img, headerColor, children, cardStyle, poolPackage }) {
    return (
        <div className="flexbox-item" style={cardStyle}>
            <div className="card text-center">
                <div className="card-header d-block" style={{ background: headerColor??poolPackage.packageColor }}>
                    <h3 className='text-white'>{header??poolPackage?.packageName}</h3>
                </div>
                <div className="card-body">
                    <img src={img??poolPackage.packageImage} />
                    <div className="mt-5">
                        {!!poolPackage 
                            ? <h1>{`${poolPackage.packagePrice}₺ / ${poolPackage.packagePeriod} ay`}</h1>
                            : <h1>{price}</h1>
                        }
                    </div>
                    <div className="pt-4">
                        {children}
                    </div>  
                </div>
            </div>
        </div>
    )
}
