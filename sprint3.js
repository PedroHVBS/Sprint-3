import fs from "node:fs/promises"

async function analisarArquivo(){
    try{
        const texto = await fs.readFile("teste.txt", "utf8")
        const array = texto.split(" ")
        console.log(`O número de palavras no arquivo é: ${array.length}`)
    }
        
    catch(err){
        console.log(`Erro na leitura: ${err}`)
    }
        
}

analisarArquivo()


