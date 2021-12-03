


async function getAnimais(endereco){
            
    const params = {
        method : "GET",
        headers : {
            "Content-type": "application/json; charset=UTF-8"
        }
    }
    

    console.log(endereco+'/animais.json')
    fetch((endereco+'/animais.json'),params)
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
                console.log(endereco+"animais/"+ chaves[i]+".json")
                getAnimal(endereco+"animais/"+ chaves[i]+".json")
            }
            
        })
        .catch(erro => {
            console.log("Entrou no catch")
            console.log(erro)
        })    
}

function getAnimal(endereco){
    const params = {
        method : "GET",
        headers : {
            "Content-type": "application/json; charset=UTF-8"
        }
    }
    console.log("GET Animal: "+endereco)
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
            //console.log(JSON.stringify(dados))
            console.log(Object.keys(dados))
            console.log(JSON.stringify(dados))
            listarAnimais(dados)
        })
        .catch(erro => {
            console.log("Entrou no catch: "+ erro)
        })    
}