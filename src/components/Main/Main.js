import './Main.css';
import {useNavigate} from "react-router-dom"


function Main() {
    const navigate = useNavigate()
  return (
    <div>
        <header className="header">
            <nav>
                <ul>
                <li onClick={()=>{navigate("/")}}><a href="localhost:3000">Inicio</a></li>
                <li onClick={()=>{navigate("/services")}} ><a href="localhost:3000">Servicios</a></li>
                <li><a href="localhost:3000">Contacto</a></li>
                <li className="login" onClick={()=>{navigate("/login")}}>
                    <a href="login">Log in</a>
                </li>
                </ul>
            </nav>
        </header>
        <div className = "hero">
                <h1>Busqueda de resultados de examenes medicos</h1>
                <p>Ingrese en login para realizar una busqueda</p> 
           
        </div>
        <div className='footer'>
            <footer>
                <p>&copy; Desarrollo Web Udea 2023</p>
            </footer>
        </div>
    </div>
  );
}

export default Main;
