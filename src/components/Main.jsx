const Main = (props) => {

    const menuDcComics = props.menuDcComics;
    const menuShop = props.menuShop;
    const menuDc = props.menuDc;
    const menuSites = props.menuSites;
    return (
        <main>
            <div className="content py-5">
                <div className="container">
                    <p>-- Content Goes Here --</p>
                </div>
            </div>
            <div className="menu">
                <div className="container">
                    <div className="nav">
                        <ul className="d-flex justify-content-around">
                            <li>
                                <a href="#" className="icon d-flex align-items-center">
                                    <img src="/img/buy-comics-digital-comics.png" alt="Digital comics" />
                                    <p>Digital comics</p>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="icon d-flex align-items-center">
                                    <img src="/img/buy-comics-merchandise.png" alt="Merchandise" />
                                    <p>dc merchandise</p>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="icon d-flex align-items-center">
                                    <img src="/img/buy-comics-subscriptions.png" alt="Subscription" />
                                    <p>subscription</p>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="icon d-flex align-items-center">
                                    <img src="img/buy-comics-shop-locator.png" alt="Locator" />
                                    <p>comic shop locator</p>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="icon d-flex align-items-center">
                                    <img src="/img/buy-dc-power-visa.svg" alt="Visa" />
                                    <p>dc power visa</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="fun-art py-4">
                <div className="container d-flex row-cols-2">
                    <div className="col-4 d-flex">
                        <div className="col-4 d-flex flex-column">
                            <nav>
                                <ul>
                                    {menuDcComics.map(comic => (
                                        <li key={`comics-${comic.id}`} className={comic.isTitle ? 'menuTitle' : ''}>
                                            <a href={comic.url} className={comic.isTitle ? 'menuTitle' : ''}>{comic.text}</a>
                                        </li>
                                    ))}
                                </ul>
                                <ul>
                                    {menuShop.map(shop => (
                                        <li key={`shop-${shop.id}`} className={shop.isTitle ? 'menuTitle' : ''}>
                                            <a href={shop.url} className={shop.isTitle ? 'menuTitle' : ''}>{shop.text}</a>
                                        </li>
                                    ))}
                                </ul>

                            </nav>
                        </div>
                        <div className="col-4 d-block">
                            <nav>
                                <ul>
                                    {menuDc.map(dc => (
                                        <li key={`dc-${dc.id}`} className={dc.isTitle ? 'menuTitle' : ''}>
                                            <a href={dc.url} className={dc.isTitle ? 'menuTitle' : ''}>{dc.text}</a>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                        <div className="col-4 d-block">
                            <nav>
                                <ul>
                                    {menuSites.map(site => (
                                        <li key={`site-${site.id}`} className={site.isTitle ? 'menuTitle' : ''}>
                                            <a href={site.url} className={site.isTitle ? 'menuTitle' : ''}>{site.text}</a>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>


                    </div>
                    <div className="logo-bg col-8">

                    </div>

                </div>
            </div>
        </main>
    )
}

export default Main