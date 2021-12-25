import React from 'react'

export default function StatisticCard({ icon, title, value, bgColor }) {
    return (
        <div class="col-md-6 col-sm-12 col-lg-4">
            <div className='mt-6 statistic-card'>
                <div class="card" style={{ backgroundColor: bgColor }}>
                    <div class="card-body row">
                        <div class="col-md-9">
                            <p class="mb-4 fs-5">{title}</p>
                            <p class="fs-1 mb-2">{value}</p>
                        </div>
                        <div class="col-md-3 d-flex align-items-center justify-content-center">
                            <i class={icon + " display-4"}></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
