import './App.css';
import { Outlet } from 'react-router-dom';
import { UserProvider } from './context/user';
import Header from './features/Header'

function App() {
  return (
    <UserProvider>
      <div className='App'>
        <header className='App-header'>
          <Header/>
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    </UserProvider>
  );
}

export default App;
