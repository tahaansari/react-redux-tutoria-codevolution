import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import CakeContainer from "./components/CakeContainer";
import HookCakeContainer from "./components/HookCakeContainer";
import IcecreamContainer from "./components/IcecreamContainer";
import HookIcecreamContainer from "./components/HookIcecreamContainer";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer></CakeContainer>
        <HookCakeContainer></HookCakeContainer>
        <hr />
        <IcecreamContainer></IcecreamContainer>
        <HookIcecreamContainer></HookIcecreamContainer>
      </div>
    </Provider>
  );
}

export default App;
