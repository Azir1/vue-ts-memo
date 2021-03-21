import axios from 'axios'

export const query = ()=>{
  return axios.get({
    method:'get',
    url:'https://wyzp.image.9ccdn.com'
  })
}