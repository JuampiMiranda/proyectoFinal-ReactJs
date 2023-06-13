import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CarritoContext } from '../../context/CarritoContext';
import { useContext } from 'react';

const ItemDetail = ({ id, nombre, precio, img, stock }) => {

  const [agregarCantidad, setAgregarCantidad] = useState(0);

  const { agregarProducto } = useContext(CarritoContext);

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);

    const item = { id, nombre, precio };
    agregarProducto(item, cantidad);
  }

  return (
    <div className='contenedorItem'>
      <h2> {nombre} </h2>
      <h3>Precio: ${precio} </h3>
      <p> Ideal para uso en Gabinetes de estética. </p>
      <p> El equipo LPL-4000-416410 es un láser de bajo nivel de emisión, por lo tanto, es indoloro y totalmente seguro. Es una técnica que permite realizar procedimientos para eliminación de grasa, moldeamiento </p>
      <img src={img} alt={nombre} />
      {
        agregarCantidad > 0 ? (<Link className='buttonDetail' to="/cart"> Terminar Compra </Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)
      }
    </div>
  )
}

export default ItemDetail