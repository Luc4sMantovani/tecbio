function listarBiomas(bioma){

    
    //console.log("PARTE 2 -----------------")
    //console.log(weapon.nome)
    
   
    
    

    const tabela = document.getElementById("tabela_weapons")
  
    const linha =  document.createElement('tr')
    
   
        
    
    const img = document.createElement("div")
    const imageBioma = document.createElement("td")
    img.setAttribute('style','width:220px; height:175px; background-image: url('+bioma.img+');background-size: contain;background-repeat: no-repeat;')
    imageBioma.appendChild(img)
    linha.appendChild(imageBioma)

    const nome = document.createElement("td")
    const nome_text = document.createTextNode(bioma.nome)
    nome.appendChild(nome_text)
    linha.appendChild(nome)

           
    const info = document.createElement("td")
    const info_text = document.createTextNode(bioma.areaEstimada + "km2")
    info.appendChild(info_text)
    linha.appendChild(info)

    
        
    const descricao = document.createElement("td")
    const descricao_text = document.createTextNode(bioma.descricao)
    descricao.setAttribute('style','text-align:justify; max-width: 80%;max-height:200px;overflow:hidden')
    descricao.appendChild(descricao_text)
    linha.appendChild(descricao) 
    tabela.appendChild(linha)
    
}