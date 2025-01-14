const Header = (props) => {

  const menuItems = props.menu;
  return (
    <header className="container d-flex justify-content-between align-items-center">
      <img src="src/assets/img/dc-logo.png" alt="Logo" />
      <nav>
        <ul>
          {menuItems.map(item => (
            <li>
              <a href={item.url} className={item.isActive ? 'active' : ''}>{item.text}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header