async function getPersonajes() {
    try {
        let nombre = prompt("Escrbe un nombre (ej: Rick, Morty, Summer, Beth, Jerry)");
        let linkRick = `https://rickandmortyapi.com/api/character/?name=${nombre}`;

        const response = await fetch(linkRick);
        const data = await response.json();
        const personajes = data["results"];

        let resultadoFinal = 'Primeros 5 personajes encontrados:\n';
        for (let i = 0; i < 5; i++) {
            resultadoFinal += `${i + 1}.
            Nombre: ${personajes[i].name}
            Estado: ${personajes[i].status}
            Especie: ${personajes[i].species}
            Genero: ${personajes[i].gender}\n`;
        }

        console.log(personajes);
        alert(resultadoFinal);
    } catch (error) {
        console.error('Error', error);
        alert('No se encontraron personajes con ese nombre.');
    }
}

getPersonajes();