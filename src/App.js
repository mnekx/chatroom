import './App.css';
import { Outlet } from 'react-router-dom';
import { UserProvider } from './context/user';

function App() {
  return (
    <UserProvider>
      <div className='App'>
        <header className='App-header'>
          <nav>this is nav</nav>
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    </UserProvider>
  );
}

export default App;
