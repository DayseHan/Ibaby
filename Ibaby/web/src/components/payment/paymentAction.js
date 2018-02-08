export function statechange(address,uid){
    return {
        method:'post',
        url: 'statechange',
        data: {uid,address}
    }
}