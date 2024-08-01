const nomes = ["Gru", "Dr.Nefário", "Sr.Bundovisck ", "Minions"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)