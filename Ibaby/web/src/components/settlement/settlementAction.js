export function getdate(){
    return {
        url: 'getdate',
        data: {uid: 1}
    }
}

export function getpay(addtime){
    return {
        url: 'getpay',
        data: {uid: 1,addtime}
    }
}
