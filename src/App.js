import './App.css';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <nav>this is nav</nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
