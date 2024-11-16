
async function request(method,path,host,data,headers){
    if(!host)
        host ="http://localhost:3000"

    let obj = {method};

    if(data)
        obj = {...obj,data}

    if(headers){
        obj = {...obj, headers}
    }

    return await fetch(`${host}${path}`,{
        method,
        headers
    });
}
export async function get(path){
    return await request('GET',path);
}

export async function post(data,path,host){

    return await request('POST',
        path,
        host,
        JSON.stringify(data),
        { 'Content-Type':'application/json'}
    )
}