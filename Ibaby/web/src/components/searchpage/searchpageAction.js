import * as ajaxConstants from '../../constants/ajaxConstants'

export function searchproduct(_data){
    return {
        url: '/searchproduct',
        data:{data:_data},
    }
}