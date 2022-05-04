import React from 'react'

export const ShowCategories = ({ categories, setCategories }) => {

    const eliminarCategoria = (nombreCategoria) => {
        setCategories(valorAnterior =>[...valorAnterior.filter(porCadaCategoria => porCadaCategoria !== nombreCategoria)]);
    }

    return (
        <div className="categoria-container">
            {
                categories.map((nombreCategoria, index) => {
                    console.log(nombreCategoria, "categoria")
                    return (
                        <div key={index} className='categoria'>
                            <h3 className='animate__animated animate__fadeIn'>{nombreCategoria}</h3>
                            <p className='botonBorrado' onClick={() => eliminarCategoria(nombreCategoria)}>X</p>
                        </div>
                    )
                })

            }
        </div>
    )
}



  
  