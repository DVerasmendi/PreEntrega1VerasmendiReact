import cart from "../assets/carrito_compras.png";


export const CartWidget=()=>{
    return (
        <>
        <img src={cart} alt="Carrito" width={45}/>
        <span>0</span>
        </>
    )
}