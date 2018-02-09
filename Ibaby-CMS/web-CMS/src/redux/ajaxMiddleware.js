import http from '../utils/HttpClient';

export function ajaxMiddleware(middlewareAPI) {
    return function(dispatch){
        return function(action){
            const {types, method = "post", url, select, other} = action;

            if (!url || !method) {
                return dispatch(action)
            }
            //   if(!types)
            const [a, b, c] = types;

            middlewareAPI.dispatch({
                type: a,
            });

            if(url){
                if(select){
                    return new Promise((resolve, reject) => {
                        http[method](url,{select: select}).then(response => {
                            middlewareAPI.dispatch({
                                type: 'Requested',
                                dataset: response
                            });
                            resolve(response);
                        })                    
                    })

                    // http[method](url,{select: select}).then(response => {
                    //     middlewareAPI.dispatch({
                    //         type: 'Requested',
                    //         dataset: response 
                    //     });
                    // })
                }else if(other){
                    return new Promise((resolve, reject) => {
                        http[method](url,{other: other}).then(response => {
                            middlewareAPI.dispatch({
                                type: 'Requested',
                                dataset: response
                            });
                            resolve(response);
                        })                    
                    })


                    // http[method](url,{other: other}).then(response => {
                    //     middlewareAPI.dispatch({
                    //         type: 'Requested',
                    //         res: response 
                    //     });
                    // })
                }
                
            }
        }
    }
}