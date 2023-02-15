import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import CakeContainer from "./components/CakeContainer";
import HookCakeContainer from "./components/HookCakeContainer";
import IcecreamContainer from "./components/IcecreamContainer";
import HookIcecreamContainer from "./components/HookIcecreamContainer";
import DynamicCakeContainer from "./components/DynamicCakeContainer";
import PropsContainer from "./components/PropsContainer";
import UserContainer from "./components/UserContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserContainer></UserContainer>
        <hr />
        <PropsContainer cake></PropsContainer>
        <PropsContainer></PropsContainer>
        <hr />
        <DynamicCakeContainer></DynamicCakeContainer>
        <hr />
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
