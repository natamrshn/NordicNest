import { Provider } from "react-redux";
import { Outlet } from "react-router-dom";
import { store } from "./store";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
    </Provider>
  );
};

export default App;
