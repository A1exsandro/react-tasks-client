import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckCircle, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

library.add(faCheckCircle, faTrashAlt)

function App() {
  return (
    <div className="App">
      <header className="App-header">
         <h1>Page main</h1>
      </header>
    </div>
  );
}

export default App;
