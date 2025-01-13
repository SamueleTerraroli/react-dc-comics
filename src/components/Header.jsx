const Header = () => {
  return (
    <header className="container d-flex justify-content-between align-items-center">
     <img src="src/assets/img/dc-logo.png" alt="Logo" />
     <nav>
        <ul>
            <li><a href="#">characters</a></li>
            <li><a href="#" className="active">comics</a></li>
            <li><a href="#">movies</a></li>
            <li><a href="#">tv</a></li>
            <li><a href="#">games</a></li>
            <li><a href="#">collectibles</a></li>
            <li><a href="#">videos</a></li>
            <li><a href="#">fans</a></li>
            <li><a href="#">news</a></li>
            <li><a href="#">shop</a></li>
        </ul>
     </nav> 
    </header>
  )
}

export default Header