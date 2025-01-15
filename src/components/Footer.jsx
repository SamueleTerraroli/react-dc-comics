const Footer = (props) => {

    const socialMenu = props.socialMenu;
    return (
        <footer className="d-flex align-content-center">
            <div className="container d-flex align-items-center justify-content-between">

                <a href="#" className="StBtn">SIGN-UP NOW!</a>

                <nav className="d-flex align-items-center">
                    <a href="#" className="follow">FOLLOW US</a>
                    <ul>
                        {socialMenu.map(img => (
                            <li key={`img-${img.id}`}>
                                <a href={img.url}><img src={img.img} /></a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>


        </footer>
    )
}

export default Footer