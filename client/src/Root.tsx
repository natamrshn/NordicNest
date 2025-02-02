import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
} from "react-router-dom";

const App = () => <h1>Магазин мебели</h1>;
const HomePage = () => <h1>Главная</h1>;
const CatalogPage = () => <h1>Каталог</h1>;
const CartPage = () => <h1>Корзина</h1>;
const NotFoundPage = () => <h1>404 - Страница не найдена</h1>;

export const Root = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage/>} />
        <Route path="home" element={<Navigate to="/" replace />} />
        <Route path="catalog" element={<CatalogPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  </Router>
);
