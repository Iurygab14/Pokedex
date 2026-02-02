const inputPokemon = document.getElementById('pokemon');
const addBtn = document.getElementById("btnAdd");

addBtn.addEventListener("click", () => {
    const pokemon = inputPokemon.value.toLowerCase().trim();
    buscarPokemon(pokemon);
});


function buscarPokemon(pokemon) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then(response => {
        if (!response.ok) {
            throw new Error("Pokémon não encontrado");
        }
        return response.json();
    })
    .then(data => {
        console.log('Nome: ', data.name);
        console.log('Imagem Frontal: ', data.sprites.front_default);
        console.log('Imagem Traseira: ', data.sprites.back_default);
        console.log('Áudio: ', data.cries.latest);
        console.log('Altura: ', data.height);
        console.log('Peso: ', data.weight);
        console.log('Tipos: ', data.types);

        const tipos = data.types.map(tipo => tipo.type.name);
        tipos.join(', ');

        const resultado = document.getElementById('resultado');


        resultado.innerHTML = `
        <h2>Nome: ${data.name}</h2>
        <p>Altura: ${data.height}</p>
        <p>Peso: ${data.weight}</p>
        <p>Tipos: ${tipos}</p>
        <img src="${data.sprites.front_default}"></img>
        <br>
        <img src="${data.sprites.back_default}"></img>
        <br>
        <audio controls src="${data.cries.latest}"></audio>`

        corFundo(tipos);
        })
    .catch(error => console.error('Erro: ', error));
}

    
function corFundo(tipos) {
    if(tipos[0] === 'fire') {
        document.body.style.backgroundColor = "rgb(255, 103, 103)";
    }
    else if(tipos[0] === 'water') {
        document.body.style.backgroundColor = "rgb(89, 89, 247)";
    }
    else if(tipos[0] === 'grass') {
        document.body.style.backgroundColor = "rgb(94, 146, 16)";
    }
    else if(tipos[0] === 'electric') {
        document.body.style.backgroundColor = "rgb(199, 199, 60)";
    }
    else if(tipos[0] === 'bug') {
        document.body.style.backgroundColor = "rgb(0, 70, 0)";
    }
    else if(tipos[0] === 'dark') {
        document.body.style.backgroundColor = "rgb(100, 100, 100)";
    }
    else if(tipos[0] === 'fighting') {
        document.body.style.backgroundColor = "rgb(122, 16, 16)";
    }
    else if(tipos[0] === 'psychic') {
        document.body.style.backgroundColor = "rgb(255, 169, 184)";
    }
    else if(tipos[0] === 'steel') {
        document.body.style.backgroundColor = "rgb(179, 179, 179)";
    }
    else if(tipos[0] === 'dragon') {
        document.body.style.backgroundColor = "rgb(26, 26, 126)";
    }
    else if(tipos[0] === 'fairy') {
        document.body.style.backgroundColor = "rgb(255, 192, 241)";
    }
    else if(tipos[0] === 'ice') {
        document.body.style.backgroundColor = "rgb(158, 224, 247)";
    }
    else if(tipos[0] === 'rock') {
        document.body.style.backgroundColor = "rgb(119, 80, 8)";
    }
    else if(tipos[0] === 'ground') {
        document.body.style.backgroundColor = "rgb(255, 217, 147)";
    }
    else if(tipos[0] === 'poison') {
        document.body.style.backgroundColor = "rgb(94, 0, 94)";
    }
    else if(tipos[0] === 'ghost') {
        document.body.style.backgroundColor = "rgb(113, 81, 117)";
    }
    else if(tipos[0] === 'flying') {
        document.body.style.backgroundColor = "rgb(211, 249, 255)";
    }
}