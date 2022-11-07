import './App.css';
import ListMessage from "./features/ListMessage";
import PostMessage from "./features/PostMessage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav></nav>
      </header>
      <main><ListMessage/></main>
      <footer><PostMessage/></footer>
    </div>
  );
}

export default App;
