import './Main.css'
import React from 'react'

const Main = props =>
    <React.Fragment>
        <main className="content container-fluid">
            <div className="p-3  d-flex flex-wrap mt-3">
                {props.children}
            </div>
        </main>
    </React.Fragment> 

export default Main