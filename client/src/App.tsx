import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"; // Используем Router и Routes
import { store } from "./store"; // Импортируем store
import Header from "./components/Header/Header"; // Импортируем Header
import Footer from "./components/Footer/Footer"; // Импортируем Footer
import Home from "./pages/Home"; // Импортируем Home

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <main>
          <Routes>
            {/* Главная страница */}
            <Route path="/" element={<Home />} />

            {/* Путь home перенаправляет на главную */}
            <Route path="home" element={<Navigate to="/" replace />} />

            {/* Страница 404 */}
          </Routes>
        </main>
        <Footer />
      </Router>
    </Provider>
  );
};

export default App;
