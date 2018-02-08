import * as zhibuyConstants from './zhibuyConstants'

export function zhibuy(name){
    return{
        types:[zhibuyConstants.ZHIBUY_REQUESTIMG,zhibuyConstants.ZHIBUY_REQUESTED,zhibuyConstants.ZHIBUY_REQUESTERROR],
        url:"/zhibuy",
        data:{
            "title": name 
        }
    }
}