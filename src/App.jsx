import Header from "./components/Header"
import Main from "./components/Main"
import { menuHeader } from "./data/menuData"

const App = () => {
  return (
    <>
      <Header menu={menuHeader} />
      <Main />
    </>
  )
}

export default App