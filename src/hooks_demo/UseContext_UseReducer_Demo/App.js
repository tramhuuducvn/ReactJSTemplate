import { useStore, actions } from "./store";


const App = () => {
    const [state, dispatch] = useStore();
    const {todos, todoInput} = state;
    
    console.log('todo input: ', todoInput);
    
    return (
        <div style={{padding: 32}}>
            <input
                value={state.todoInput}
                placeholder={"Enter todo..."}
                onChange={e => {
                    dispatch(actions.setTodoInput(e.target.value));
                }}
            />
        </div>
    )
}

export default App;