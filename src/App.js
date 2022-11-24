import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/Navbar"
import ItemListContainer from "./components/ItemListContainer"

const App = () => {
  return (
    <>
    <NavBar/>
    <h1>Bienvenido al mercadito.</h1>
    <ItemListContainer/>
    </>
  )
}

export default App