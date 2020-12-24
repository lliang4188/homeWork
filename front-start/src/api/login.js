import axios from '@/utils/request'

const getCode = (sid) => {
    /*
      axios.request({
        method: 'get',
        url: 'getCaotcha'
      })
    */
    return axios.get('/getCaptcha', {
      params: {
        sid: sid
      }
    })
}

const forget = (option) => {
    return axios.post('/forget', {
      ...option
    })
}

export { getCode, forget }
