import logo from './logo.svg';
import './App.css';

import FnComponent from './components/functionComp';
import ClassComponent from './components/classComponents';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/navbar';
import HomeComponent from './components/home';
import AboutComponent from './components/about';
import ContactComponent from './components/contact';
import ServiceComponent from './components/service';
import TargetComponent from './components/targetComponent';
import Usecallback from "./hooks/useCallback"
import ParentComponent from './components/parentComponent';
import ThirdComponent from './components/thirdComponent';
import CounterComponent from './hooks/stateComponent';
import HooksComponent from "./hooks/useEffect";
import MemoComponent from "./hooks/memo";
import UseCallbackComp from "./hooks/useCallbackComponent2"
import UseRef from './hooks/useRef'
import Condition from "./hooks/conditionalRendering"
import MyListComponent from './hooks/listMap';
import FormComponent from "./components/form"
import ListMAp from "./hooks/listMap"

function App() {
  return (
    <div className="App">
    <h1>Fita React</h1>
    <FormComponent/>
    {/* <ListMAp/> */}
    {/* <CounterComponent/> */}
    {/* <HooksComponent/> */}
    {/* <MemoComponent/> */}
    {/* <UseCallbackComp/> */}
    {/* <UseRef/> */}
    {/* <Condition condition={true}/> */}
    {/* <MyListComponent/> */}
    {/* <ParentComponent/> */}
    {/*<ThirdComponent/>
    <CounterComponent/>
    <FnComponent/>
    <ClassComponent/>
      <Routes>
          <Route path="/"  element={<HomeComponent/>} />
          <Route path="/about/:id"  element={<AboutComponent/>} />
          <Route path="/contact"  element={<ContactComponent/>} />
          <Route path="/service"  element={<ServiceComponent/>} />
          <Route path="/targetRoute/:id" element={<TargetComponent/>}  />
      </Routes>
      <Usecallback/> */}
    
    </div>
  );
}

export default App;
