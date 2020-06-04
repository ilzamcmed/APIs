window.addEventListener('DOMContentLoaded', () => {


    
    const input = document.querySelector('#input')
    const div = document.querySelector('#book-title')



    input.addEventListener('change', () => {

        fetch(`https://www.googleapis.com/books/v1/volumes?q=${input.value}`)
            .then(response => response.json())
            .then((dadoParseado) => {

                dadoParseado.items.map((books) => {
                    const livros = books.volumeInfo;
                    const list = document.createElement('ul')
                    const listItem = document.createElement('li')

                    listItem.innerText = `${livros.title}`; 
                    //Publicado em ${livros.publishedDate} 

                    list.appendChild(listItem)
                    div.appendChild(list)
                })
            })

    })
})