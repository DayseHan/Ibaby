export function check_phone(phone){
    return {
        url:'check_phone',
        method:'post',
        data:{
            phone:phone
        }
    }
}