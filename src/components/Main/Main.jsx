import './Main.css'
import React from 'react'

export default props =>
    <React.Fragment>
        <main className="content container-fluid">
            <div className="p-3  d-flex flex-wrap mt-3">
                {props.children}
            </div>
        </main>
    </React.Fragment> 