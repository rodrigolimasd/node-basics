
function sum(a, b, callback){
    return new Promise((resolve, reject)=> {
        if(Number(a) == NaN || Number(a) == undefined || typeof a != 'number'){
            reject(`Error number formater: ${a}`)
        }
        if(Number(b) == NaN || Number(b) == undefined || typeof b != 'number'){
            reject(`Error number formater: ${b}`)
        }
        setTimeout(()=> {
            resolve(a + b);
        }, 3000)
    })
}

async function main(){
    try {
        const result = await sum(4,'as')
        console.log(`Result: ${result}`)
    } catch (error) {
        console.log(`Erro: ${error}`)
        console.log(`User: ${process.env.USER}`)
    }
}

main()