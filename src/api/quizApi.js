import axios from 'axios'

export const listCards = () => axios('http://localhost:3001/quiz')
    .then(({data}) => data)

export const getCard = id => axios(`http://localhost:3001/quiz/${id}`)
    .then(({data}) => data)