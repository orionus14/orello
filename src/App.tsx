import { Provider } from "react-redux"
import { ListsField } from "./components/ListsField"
import store from "./store"

function App() {
  return (
    <Provider store={store}>
    <div className="content">
      <ListsField />
    </div>
    </Provider>
  )
}

export default App