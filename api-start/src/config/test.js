import { delValue, getHValue, getValue, setValue } from './RedisConfig'

setValue('imooc', 'imooc message from redis client')

getValue('imooc').then((res) => {
    console.log('getValue:' + res)
})

delValue('imooc')

setValue('imoocobj',{name: 'liu', age:36, email: 'liu@imooc.com'})

getHValue('imoocobj').then((res) => {
    console.log('getHValue:' + JSON.stringify(res, null, 2))
})