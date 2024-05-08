
import Routes from './Routes'
import './App.css'
import { ShopContextProvider } from './components/Shop-context'

function App() {


  return (
    <>
    <ShopContextProvider>
      <Routes />
      </ShopContextProvider>
    
 
    </>
  )
}

export default App
