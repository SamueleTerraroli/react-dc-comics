import Header from "./components/Header"
import Main from "./components/Main"
import { menuHeader, menuDcComics, menuShop, menuDc, menuSites } from "./data/menuData"

const App = () => {
  return (
    <>
      <Header menu={menuHeader} />
      <Main menuDcComics={menuDcComics} menuShop={menuShop} menuDc={menuDc} menuSites={menuSites} />
    </>
  )
}

export default App