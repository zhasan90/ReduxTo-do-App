import { createRoot } from "react-dom/client";
import MainView from "./components/main-view/main-view";
import { createStore } from "redux";
import todos from "./reducers";
import { addTodo, toggleTodo } from "./actions";
import "./index.scss";

const store = createStore(todos);
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

store.dispatch(addTodo("dispatch my first action"));
store.dispatch(addTodo("dispatch my second action"));
store.dispatch(addTodo("dispatch my third action"));
store.dispatch(toggleTodo(0));

console.log("state after adding first todo", store.getState());
console.log("state after adding second todo", store.getState());
console.log("state after adding third todo", store.getState());
console.log("state after toggling first todo", store.getState());

function App() {
  return <MainView />;
}

root.render(<App />);
