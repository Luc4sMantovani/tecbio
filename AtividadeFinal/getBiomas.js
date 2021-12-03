


async function getBiomas(endereco){
            
    const params = {
        method : "GET",
        headers : {
            "Content-type": "application/json; charset=UTF-8"
        }
    }
    

    
    fetch((endereco+'/biomas.json'),params)
    .then(resp => {
            console.log(resp)
            if(resp.status === 200){
                console.log("Deu ok!!!")
                
                return resp.json()
            }else{
                console.log("Deu erro!!")
                throw new Error("Erro na requisição")
            }
        })
        .then(dados => {
            //console.log(JSON.stringify(dados))
            var chaves = Object.keys(dados)
            
            for(var i=0; i<chaves.length;i++){
                
                getBioma(endereco+"biomas/"+ chaves[i]+".json")
            }
            
        })
        .catch(erro => {
            console.log("Entrou no catch")
            console.log(erro)
        })    
}

function getBioma(endereco){
    const params = {
        method : "GET",
        headers : {
            "Content-type": "application/json; charset=UTF-8"
        }
    }
    
    fetch(endereco,params)
    .then(resp => {
            console.log(resp)
            if(resp.status === 200){
                console.log("Deu ok!!!")
                return resp.json()
            }else{
                console.log("Deu erro!!")
                throw new Error("Erro na requisição")
            }
        })
        .then(dados => {
            console.log("Biomas: " + JSON.stringify(dados))
            
            listarBiomas(dados)
        })
        .catch(erro => {
            console.log("Entrou no catch: "+ erro)
        })    
}