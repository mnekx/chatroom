import './App.css';
import ListMessage from './features/ListMessages';
import PostMessage from './features/PostMessages';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <nav>this is nav</nav>
      </header>
      <main>
        <ListMessage />
        <PostMessage />
      </main>
      <footer>
        <p>this is footer</p>
      </footer>
    </div>
  );
}

export default App;
