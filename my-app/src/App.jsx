import './App.css'
import Greeting from './Greeting'

function App() {


  return (
    <>
      <div>
        <Greeting />
        <p>
          Bienvenue dans mon application React
        </p><br />
        <p> La date et l'heure actuelles sont : {new Date().toLocaleDateString()}</p>
      </div>

    </>
  )
}

export default App
