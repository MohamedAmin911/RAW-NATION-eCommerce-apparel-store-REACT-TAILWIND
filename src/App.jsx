import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { useScrollToTop } from './hooks/useScrollToTop';
import About from './pages/About/About';
import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';
import Cart from './pages/Cart/Cart';
import Collections from './pages/Collections/Collections';
import Home from './pages/Home/Home';
import Product from './pages/Product/Product';
import Shop from './pages/Shop/Shop';

function App() {
  const { pathname } = useLocation();
  const isAuthRoute = pathname === '/login' || pathname === '/signup';

  useScrollToTop();

  return (
    <div className="min-h-screen bg-raw-surface text-raw-ink">
      {!isAuthRoute && <Navbar />}
      <div className="flex min-h-screen flex-col">
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        {!isAuthRoute && <Footer />}
      </div>
    </div>
  );
}

export default App;
