import { from } from "core-js/fn/array";
import { extend, localize } from 'vee-validate'
import { required, email, min, max, length, confirmed, alpha_dash } from 'vee-validate/dist/rules'

import zh from 'vee-validate/dist/locale/zh_CN.json'

extend('required', required)
extend('email', email)
extend('min', min)
extend('max', max)
extend('length', length)
extend('confirmed', confirmed)
extend('alpha_dash', alpha_dash)

localize('zh_CN', {
    messages: {
        ...zh.messages,
        required: '请输入{_field_}'
    },
    names: {
        email: '邮箱',
        password: '密码',
        name: '昵称',
        username: '账号',
        code: '验证码',
        repassword:'密码'
    },
    fields: {
        email: {
            email: '请输入正确的{_field_}'
            // required: '请输入{_field_}'
        },
        repassword: {
            confirmed: '两次输入{_field_}不一致',
            required: '请再次输入{_field_}'
        }
    }
})