import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../header/Header'
import FormQuest from './FormQuest'
import { getCard } from '../../api/quizApi'

export default function Quiz() {
    const [data, setData] = useState({
        title: '',
        id: null,
        question: {
            quest: '',
            a: '',
            b: '',
            c: '',
            d: '',
            resp: ''
        }
})
    const { id } = useParams()
    

    useEffect(() => {
        getCard(id)
            .then(data => setData(data))
        }, [id])
        
        // console.log(data)
    
   
    return (
        <React.Fragment>

       
       <FormQuest title={data.title} id={data.id} alternative={data.question}/>
        </React.Fragment>
    )
}
