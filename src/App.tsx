import { Provider } from "react-redux"
import { ListsField } from "./components/ListsField"
import store from "./store"
import { Header } from "./components/Header"

function App() {
  return (
    <>
      <Header />
      <Provider store={store}>
        <div className="content">
          <ListsField />
        </div>
      </Provider>
    </>
  )
}

export default App