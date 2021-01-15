import React, { useState, useEffect } from 'react'

import {listCards} from '../../api/quizApi'
import CardItem from '../Cards/CardItem'

export default function Cards() {
   
    const [data, setData] = useState([])

    useEffect(()=> {
        listCards()
        .then(data => setData(data))
    },[])

    return <div className="p-3  d-flex flex-wrap mt-3">
                { data.map((item, id) => 
                    <CardItem 
                        id={id} 
                        key={id}
                        title={item.title} 
                        description={item.description}
                        />)}       
            </div>
    }
