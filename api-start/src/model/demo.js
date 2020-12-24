import User from './test'

// 增
const user = {
    name: 'liuliang',
    age: 36,
    email: 'imooc@imooc.com'
}

const insertMethod =  async () => {
    const data = new User(user)
    const result = await data.save()
    console.log(result)
}
// 查
const findMethods =  async () => {
    
    const result = await User.find()
    console.log(result)
}

// 改
const updateMethods =  async () => {
    const result = await User.updateOne({name: 'liuliang'},{email:'lliang4188@qq.com'})
    console.log(result)
}

// 删

const deleteMethods =  async () => {
    const result = await User.deleteOne({name: 'liuliang'})
    console.log(result)
}

insertMethod ()