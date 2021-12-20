//configurar axios para conectar con appi del server
import axios from 'axios'
const axiosClient = axios.create({
    baseURL:process.env.REACT_APP_BACKEND_URL
})

export default axiosClient