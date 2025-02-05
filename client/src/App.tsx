import { Provider } from "react-redux";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useAutoOpenModal } from "./hooks/useAutoOpenModal";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import { store } from "./store/store";
import { SignupModal } from "./components/Modal/Modal";

const App = () => {
  const { isOpen, setIsOpen } = useAutoOpenModal(3000); // Открываем модалку через 3 секунды

  return (
    <Provider store={store}>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="home" element={<Navigate to="/" replace />} />
            {/* Здесь можно добавить другие маршруты */}
          </Routes>
        </main>
        <Footer />

        {/* Модалка рендерится независимо от маршрутов */}
        <>
          <SignupModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </>
      </Router>
    </Provider>
  );
};

export default App;
