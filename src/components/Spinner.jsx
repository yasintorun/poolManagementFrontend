import React from 'react'

function Spinner({loading}) {
    return loading ? (
            <div className='yt-spinner'>
                <div className="centered">
                    <div class="spinner-border" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>
    ) : null
}

export default Spinner
