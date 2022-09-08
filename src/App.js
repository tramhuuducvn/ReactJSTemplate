import './App.css';
// import UseStateDemo from './hooks_demo/UseStateDemo';
// import UseEffectDemo from './hooks_demo/UseEffectDemo';
// import { ImperativeHandle } from './hooks_demo/ImperativeHandle';
// import UseCallbackDemo from './hooks_demo/UseCallbackDemo';
// import UseMemoDemo from './hooks_demo/UseMemoDemo';
// import UseReducerDemo from './hooks_demo/UseReducerDemo';
import ContextReducerDemo from './hooks_demo/UseContext_UseReducer_Demo';
import UseStateDemo from './hooks_demo/UseStateDemo';


function App() {

  const List = ({title, children})=>{
    console.log('@DUKE', children);
    children[0]();
    return (
      <div>
        <h1>{title}</h1>
      </div>
    )
  }

  return (
    // <UseEffectDemo />
    // <UseCallbackDemo />
    // <ContextReducerDemo />
    // <List title={"Bong Dua"}>
    //   {[()=>{console.log('Hello ae');}]}
    // </List>
    <UseStateDemo />
  );
}

export default App;
