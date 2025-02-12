const items         = document.getElementById('items')
const templateCard  = document.getElementById('template-card').content
const fragmento     =document.createDocumentFragment()

document.addEventListener('DOMContentLoaded', () => {
    fetchData()
})

const fetchData = async () => {
    try{
        const res  = await fetch('api.json')
        const data = await res.json()
        console.log(data)
        mostrarProductos(data)
    }catch (error) {
        console.log(error)        
    }
}
//--------------    mostrarProductos
    const mostrarProductos = data => {
         data.forEach(producto => {
            templateCard.querySelector('h3').textContent = producto.nombre
            templateCard.querySelector('p').textContent = producto.precio
            templateCard.querySelector('img').setAttribute("src", producto.miniUrl)

            const clone = templateCard.cloneNode(true)
            fragmento.appendChild(clone)

         }); 
         items.appendChild(fragmento)
    }

//ESTO SI INFINITY NOS PERMITIERA ENTRAR 
// const items         = document.getElementById('items')
// const templateCard  = document.getElementById('template-card').content
// const fragmento     = document.createDocumentFragment()

// // Esperamos a que el DOM esté completamente cargado
// document.addEventListener('DOMContentLoaded', () => {
//     fetchData()
// })

// // Función para traer los datos de la API
// const fetchData = async () => {
//     try {
//         // Usamos la URL de la API proporcionada
//         const res = await fetch('http://actiividades.lovestoblog.com/actv2/app.json')

//         // Convertir la respuesta a JSON
//         const data = await res.json()

//         // Imprimir en consola para ver qué datos trae la API
//         console.log(data)

//         // Llamar a la función que mostrará los productos
//         mostrarProductos(data)
//     } catch (error) {
//         // Si ocurre un error (por ejemplo, problemas con la conexión), lo mostramos en consola
//         console.log(error)
//     }
// }

// // Función para mostrar los productos
// const mostrarProductos = data => {
//     data.forEach(producto => {
//         // Ajusta según los campos que devuelva la API. Por ejemplo:
//         // - 'producto.nombre' para el nombre
//         // - 'producto.precio' para el precio
//         // - 'producto.thumbnailUrl' para la URL de la imagen

//         templateCard.querySelector('h3').textContent = producto.nombre
//         templateCard.querySelector('p').textContent = producto.precio
//         templateCard.querySelector('img').setAttribute("src", producto.thumbnailUrl)

//         // Clonamos la tarjeta del template y la agregamos al fragmento
//         const clone = templateCard.cloneNode(true)
//         fragmento.appendChild(clone)
//     })

//     // Agregamos el fragmento con todas las tarjetas al contenedor de productos
//     items.appendChild(fragmento)
// }
