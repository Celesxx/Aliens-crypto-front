const axios = require('axios');

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
    async getNextHint(identifier, token, hint, currentHint) 
    {
        const result = await axios.post(`${urlBackend}/hints/getHint`, 
        {
            identifier : identifier,
            currentHint : currentHint,
            hint : hint,
        }, 
        { 
            headers: { "x-access-token": token } 
        }).catch(error => { return error.response })

        return result.data
    }
}

export default UserRequest