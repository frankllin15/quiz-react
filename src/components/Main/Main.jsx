import './Main.css'
import React from 'react'
import Cards from '../Cards/Cards'

const Main = props =>
    <React.Fragment>
        <main id="main" className="content container-fluid">
            <div className="p-3  d-flex flex-wrap mt-3">
                {/* {props.children} */}
                <Cards />
            </div>
        </main>
    </React.Fragment> 

export default Main