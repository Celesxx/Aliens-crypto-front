const axios = require('axios');
import store from '@/store'

let urlBackend = ""
switch (process.env.VUE_APP_ENV) 
{
    case 'dev':
      urlBackend = "http://localhost:4000" 
      break;
    case 'uat':
      urlBackend = ""
      break;
    case 'prod':
      urlBackend = ""
      break;
    default:
      urlBackend = ""
}

class UserRequest 
{
    async registerUser(address) 
    {
        const result = await axios.post(`${urlBackend}/users/register`, {
            address : address,
        })
        return result
    }

    async updateUser(hint, token) 
    {
        const result = await axios.post(`${urlBackend}/users/updateUser`, {
            hint : hint,
        }, 
        { 
            headers: { "x-access-token": token } 
        })
        return result
    }

    async logout(token) 
    {
        const result = await axios.put(`${urlBackend}/users/logout`, 
        {
            token: token
        }, 
        { 
            headers: { "x-access-token": token } 
        })
        return result
    }

    async login(address) 
    {
        const result = await axios.post(`${urlBackend}/users/login`, {
            address : address,
        })
        return result
    }

    async getHint(token) 
    {
        const result = await axios.post(`${urlBackend}/users/getHint`, {} , 
        { 
            headers: {"x-access-token": token } 
        })
        console.log(result.data)
        return result.data
    }

}

export default UserRequest