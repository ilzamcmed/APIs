    window.addEventListener('DOMContentLoaded', () => {

        const input = document.querySelector('#input')

        //Data from the wolrd

        fetch(`https://coronavirus-19-api.herokuapp.com/countries/world`)
            .then(response => response.json())
            .then((dataParse) => {
                const boxMundi = document.querySelector('#box-world')
                const cases = document.createElement('p')
                const deaths = document.createElement('p');
                const recovered = document.createElement('p')
                cases.innerText = `Total confirmados: ${dataParse.cases}`;
                deaths.innerText = `Total de mortos: ${dataParse.deaths}`;
                recovered.innerText = `Total de recuperados: ${dataParse.recovered}`;
                boxMundi.appendChild(cases);
                boxMundi.appendChild(deaths);
                boxMundi.appendChild(recovered);

            })


        //Data from BRAZIL

        fetch(`https://coronavirus-19-api.herokuapp.com/countries/brazil`)
            .then(response => response.json())
            .then((dataParse) => {
                console.log(dataParse)
                const boxBr = document.querySelector('#box-brazil')
                const cases = document.createElement('p')
                const deaths = document.createElement('p');
                const recovered = document.createElement('p')
                cases.innerText = `Total confirmados: ${dataParse.cases}`;
                deaths.innerText = `Total de mortos: ${dataParse.deaths}`;
                recovered.innerText = `Total de recuperados: ${dataParse.recovered}`;
                boxBr.appendChild(cases);
                boxBr.appendChild(deaths);
                boxBr.appendChild(recovered);
            })


    input.addEventListener('change', () => {
    fetch(`https://coronavirus-19-api.herokuapp.com/countries/${input.value}`)
        .then(response => response.json())
        .then((dataParse) => {


            const divBox = document.querySelector('#box-country')
            const cases = document.createElement('p')
            const deaths = document.createElement('p');
            const recovered = document.createElement('p');
            
            cases.innerText = `Total confirmados: ${dataParse.cases}`;
            deaths.innerText = `Total de mortos: ${dataParse.deaths}`;
            recovered.innerText = `Total de recuperados: ${dataParse.recovered}`;

            divBox.appendChild(cases);
            divBox.appendChild(deaths);
            divBox.appendChild(recovered);





        })
    })
})