export function statechange(address){
    return {
        method:'post',
        url: 'statechange',
        data: {uid: 14,address}
    }
}