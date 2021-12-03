function listarAnimais(animal){

    
    console.log("PARTE 2 -----------------")
    console.log(animal.nome)
    
   
    
    

    const tabela = document.getElementById("tabela_animais")
  
    const linha =  document.createElement('tr')
        
    const imageAnimal = document.createElement("td")
    const img = document.createElement("div")
        
    //const idUpdate = document.createAttribute("id = 'update'")
    img.setAttribute('style','width:150px; height:150px; background-image: url('+animal.img+');background-size: contain; background-repeat:no-repeat')
    imageAnimal.appendChild(img)
    linha.appendChild(imageAnimal)

    const nome = document.createElement("td")
    const nome_text = document.createTextNode(animal.nomePopular)
    nome.appendChild(nome_text)
    linha.appendChild(nome)

        
    const nomeCientifico = document.createElement("td")
    const nomeCientificoText = document.createTextNode(animal.nomeCientifico)
    nomeCientifico.appendChild(nomeCientificoText)
    linha.appendChild(nomeCientifico)

    const estadoConservacao = document.createElement("td")
    const estadoConservacaoText = document.createTextNode(animal.estadoConservacao)
    estadoConservacao.appendChild(estadoConservacaoText)
    linha.appendChild(estadoConservacao)
    
    const tipo = document.createElement("td")
    const tipoText = document.createTextNode(animal.tipo)
    tipo.appendChild(tipoText)
    linha.appendChild(tipo)

    const bioma= document.createElement("td")
    const biomaText = document.createTextNode(animal.bioma)
    bioma.appendChild(biomaText)
    linha.appendChild(bioma)
    
        
    const descricao = document.createElement("td")
    const descricao_text = document.createTextNode(animal.descricao)
    descricao.setAttribute('style','text-align:justify; max-height:200px;overflow:hidden')
    descricao.appendChild(descricao_text)
    linha.appendChild(descricao) 
    tabela.appendChild(linha)
    
}