const Main = () => {
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
                                <img src="src/assets/img/buy-comics-digital-comics.png" alt="Digital comics"/>
                                <p>Digital comics</p>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="icon d-flex align-items-center">
                                <img src="src/assets/img/buy-comics-merchandise.png" alt="Merchandise"/>
                                <p>dc merchandise</p>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="icon d-flex align-items-center">
                                <img src="src/assets/img/buy-comics-subscriptions.png" alt="Subscription"/>
                                <p>subscription</p>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="icon d-flex align-items-center">
                                <img src="src/assets/img/buy-comics-shop-locator.png" alt="Locator"/>
                                <p>comic shop locator</p>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="icon d-flex align-items-center">
                                <img src="src/assets/img/buy-dc-power-visa.svg" alt="Visa"/>
                                <p>dc power visa</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="fun-art">
            <div className="container d-flex row-cols-2">
                <div className="col-6">
                    <nav>

                    </nav>
                </div>
                <div className="logo-bg col-6">

                </div>

            </div>
        </div>
    </main>
  )
}

export default Main