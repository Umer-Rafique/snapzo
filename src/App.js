import './App.css';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard/Dashboard';
import Snap from './pages/snap/Snap';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Dashboard /> */}
      <Snap />
    </div>
  );
}

export default App;
