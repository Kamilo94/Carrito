//aca llega los elementos del template del HTML
const items = document.getElementById('items')
// acceder a los elementos del id cards qu esta en el HTML
const templateCard = document.getElementById('template-card').content
const fragment = document.createDocumentFragment()

//DOMContentLoaded sirve para leer todo el HTML y despues ejecutar el javascript 
document.addEventListener('DOMContentLoaded', () => {
     fetchData() 
    })


const fetchData = async () => {
    try{
        const res = await fetch('objetos.json');
        const data = await res.json()
        pintarCards(data)
    }catch (error){
        console.log(error)
    }
    
   
}
// Donde me estan llegando mis elementos para visualizar en el Navegador
const pintarCards = data => {
    data.forEach(producto => {
        console.log(producto)
            templateCard.querySelector('h2').textContent = producto.title
            templateCard.querySelector('h4').textContent = producto.Descipcion
            templateCard.querySelector('p').textContent = producto.precio
            templateCard.querySelector('img').setAttribute("src",producto.Url)

            const clone = templateCard.cloneNode(true)
            fragment.appendChild(clone)
    });
    items.appendChild(fragment)
}