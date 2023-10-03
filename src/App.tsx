import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router";
import './assets/styles/style.scss'
import './assets/styles/variables.scss'

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Router/>
      </div>
    </BrowserRouter>
  )
}

export default App
