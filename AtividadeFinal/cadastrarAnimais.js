function cadastrar() {
            
            
    
    const resposta = document.getElementById("msg-resp")
    

    const params = {
        method : "POST",
        body : JSON.stringify(
            {
                img: document.getElementById("foto").value, 
                nomeCientifico: document.getElementById("nomeCientifico").value,
                nomePopular: document.getElementById("nomePopular").value,
                descricao: document.getElementById("descricao").value,
                tipo: document.getElementById("tipo").value,
                bioma: document.getElementById("bioma").value,
                estadoConservacao: document.getElementById("estadoConservacao").value
            }),
        headers : {
            "Content-type": "application/json; charset=UTF-8"
        }

    }

    fetch("https://biotec-6f2cb-default-rtdb.firebaseio.com/animais.json", params)
        .then(resp => {
            if(resp.status === 201 || resp.status === 200){
                return resp.json().then(texto => resposta.innerHTML = "Sucesso")
            }else{
               return resp.json().then(textoErro =>
               {
                    if(resp.status === 422){
                        const errors = Array.of(textoErro)
                        throw new Error(errors[0][0].msg)
                    }else{
                        throw new Error("Ops Ocorreu um erro na sua requisição! Contate o suporte!")
                    }
                }) 
         
            }
        })                
        .catch(erro =>resposta.innerHTML= erro )
}