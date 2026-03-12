import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Wallet from './pages/Wallet';
import Shop from './pages/Shop';
import Scanner from './pages/Scanner';
import RVMMap from './pages/RVMMap';
import Profile from './pages/Profile';
import BottomNav from './components/BottomNav';

function App() {
  return (
    <Router>
      <div className="min-h-screen pb-20 overflow-y-auto">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/map" element={<RVMMap />} />
          <Route path="/scan" element={<Scanner />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <BottomNav />
      </div>
    </Router>
  );
}

export default App;
