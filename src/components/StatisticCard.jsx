import React from 'react'

export default function StatisticCard({icon,title,value,bgColor}) {
    return (
        <div className='mt-6 statistic-card'>
            <div class="col-md-4">
                <div class="card" style={{backgroundColor:bgColor}}>
                    <div class="card-body row">
                        <div class="col-md-8">
                            <p class="mb-4">{title}</p>
                            <p class="fs-1 mb-2">{value}</p>
                        </div>
                        <div class="col-md-4 d-flex align-items-center justify-content-center">
                            <i class={icon + " fs-1"}></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
