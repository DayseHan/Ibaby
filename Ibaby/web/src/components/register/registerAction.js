export function check_phone(phone){
    return {
        url:'check_phone',
        method:'post',
        data:{
            phone:phone
        }
    }
}

export function getCode(phone,code){
    return {
        url:'https://api.miaodiyun.com/20150822/industrySMS/sendSMS',
        method:'post',
        data:{
            accountSid:'4c913ce1b3894f1b85f13414a345da00',
            to:phone,
            sig:'11afbe4501b04eaf8bbf6f2dff401cfd',
            timestamp:'1512798254',
            smsContent:`【爱贝多】尊敬的用户，您的验证码为:${code}，若非本人操作请忽略此短信。`
        }
    }
}

export function reg(phone,pwd){
    return {
        url:'reg',
        method:'post',
        data:{
            phone:phone,
            pwd:pwd
        }
    }
}
