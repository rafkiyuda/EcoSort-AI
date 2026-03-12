import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Wallet from './pages/Wallet';
import Shop from './pages/Shop';
import Scanner from './pages/Scanner';
import RVMMap from './pages/RVMMap';
import Profile from './pages/Profile';
import ActivityHistory from './pages/ActivityHistory';
import ChallengeDetail from './pages/ChallengeDetail';
import Badges from './pages/Badges';
import Reports from './pages/Reports';
import Promos from './pages/Promos';
import Help from './pages/Help';
import Settings from './pages/Settings';
import Security from './pages/Security';
import BottomNav from './components/BottomNav';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen pb-20 overflow-y-auto">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/map" element={<RVMMap />} />
          <Route path="/scanner" element={<Scanner />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/activity" element={<ActivityHistory />} />
          <Route path="/challenge/:id" element={<ChallengeDetail />} />
          <Route path="/badges" element={<Badges />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/promos" element={<Promos />} />
          <Route path="/help" element={<Help />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/security" element={<Security />} />
        </Routes>
        <BottomNav />
      </div>
    </Router>
  );
}

export default App;
