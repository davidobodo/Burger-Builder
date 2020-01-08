import axios from 'axios'

const instance = axios.create({
    baseURL : 'https://burgerbuilder-97dc6.firebaseio.com/'
})

export default instance;