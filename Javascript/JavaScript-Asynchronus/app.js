// menggunakan call back
const requestCallBack = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if(delay > 4000){
            failure('Error: Connection Timeout')
        } else{
            success(`Success: ${url} (${delay}ms)`)
        }
    }, delay)
}

// requestCallBack(
//     'movie.com',
//     function (success) {
//         console.log(success)
//         requestCallBack(
//             'movie.com',
//             function (success) {
//                 console.log(success)
//                 requestCallBack(
//                     'movie.com',
//                     function (success) {
//                         console.log(success)
//                         requestCallBack(
//                             'movie.com',
//                             function (success) {
//                                 console.log(success)
//                                 requestCallBack(
//                                     'movie.com',
//                                     function (success) {
//                                         console.log(success)
//                                     },
//                                     function (failure){
//                                         console.log(failure)
//                                     }
//                                 )
//                             },
//                             function (failure){
//                                 console.log(failure)
//                             }
//                         )
//                     },
//                     function (failure){
//                         console.log(failure)
//                     }
//                 )
//             },
//             function (failure){
//                 console.log(failure)
//             }
//         )
//     },
//     function (failure){
//         console.log(failure)
//     }
// )

// menggunakan promise
const requestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 4500) + 500;
        setTimeout(() => {
            if(delay > 4000){
                reject('Error: Request Time Out')
            } else{
                resolve(`Success: ${url} (${delay}ms)`)
            }
        }, delay)
    })
}

// requestPromise('movie.com')
//     .then((result) => {
//         console.log('page 1')
//         console.log(result)
//         return requestPromise('movie.com')
//     })
//     .then(() => {
//         console.log('page 2')
//         return requestPromise('movie.com')
//     })
//     .then(() => {
//         console.log('page 3')
//         return requestPromise('movie.com')
//     })
//     .catch((err) => {
//         console.log(err)
//     })

const requestHandler = async () => {
    try{
        let result = await requestPromise('movie.com')
        console.log(result)
    } catch(err){
        console.log(err)
    }
}

requestHandler()
requestHandler()
requestHandler()
