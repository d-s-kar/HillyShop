import React from 'react'

export default function Title({name,title}) {
    return (
        <div className="row">
            <div className="col-10 mx-auto my-2 text-center text-title">
                <h3 className="text-capatalize font-weight-bold">
                    {name}
                    </h3>
                    <h3><strong>{title}</strong></h3>
                    </div>
            
        </div>
    )
}
