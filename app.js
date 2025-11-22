fetch('productos.json')
  .then(r => r.json())
  .then(data => {
    const cont = document.getElementById('catalogo')
    data.forEach(p => {
      const el = document.createElement('div')
      el.className = 'card'
      el.innerHTML = `<h3>${p.nombre}</h3><p>${p.descripcion}</p><strong>$${p.precio}</strong>`
      cont.appendChild(el)
    })
  })
