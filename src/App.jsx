import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import { menuHeader, menuDcComics, menuShop, menuDc, menuSites, socialMenu } from "./data/menuData"

const App = () => {
  return (
    <>
      <Header menu={menuHeader} />
      <Main menuDcComics={menuDcComics} menuShop={menuShop} menuDc={menuDc} menuSites={menuSites} />
      <Footer socialMenu={socialMenu} />
    </>
  )
}

export default App   