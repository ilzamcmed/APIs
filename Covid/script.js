window.addEventListener('DOMContentLoaded', () => {

    const input = document.querySelector('#input')

    input.addEventListener('change', () => {



        fetch(`https://coronavirus-19-api.herokuapp.com/countries/${input.value}`)
            .then(response => response.json())
            .then((dataParse) => {
                console.log(dataParse)


                const divBox = document.querySelector('#box-country')
                const cases = document.createElement('p')
                const deaths = document.createElement('p');
                const recovered = document.createElement('p')



                cases.innerText = `Total confirmados: ${dataParse.cases}`;
                deaths.innerText = `Número total de mortes: ${dataParse.deaths}`;
                recovered.innerText = `Número total de recuperados: ${dataParse.recovered}`;

                divBox.appendChild(cases);
                divBox.appendChild(deaths);
                divBox.appendChild(recovered);





            })
    })

})

// {"country":"Brazil",
// "cases":693419,
// "todayCases":1457,
// "deaths":37312,
// "todayDeaths":813,
// "recovered":302084,
// "active":354023,
// "critical":8318,
// "casesPerOneMillion":3264,
// "deathsPerOneMillion":176,
// "totalTests":999836,
// "testsPerOneMillion":4706}