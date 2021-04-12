export async function getAllPokes(url){
    return new Promise((resolve, reject)=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            resolve(data)
        })
    })
}

export async function getPoke(url) {
    return new Promise((resolve, reject)=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            resolve(data)
        })
    })
}