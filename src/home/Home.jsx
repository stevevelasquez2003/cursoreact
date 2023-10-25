import './Home.css'
export function Home() {

  return (
    < >
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark menu fixed-top">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Navbar
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Link
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" aria-disabled="true">
                    Disabled
                  </a>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>

      </header>

      <div className="banner text-white fw-bold">

        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, suscipit? Ea libero at dolores eaque voluptas quia vel eum quo cumque architecto. Ipsam quasi odio numquam temporibus veritatis minima nesciunt!</p>
        <button className='btn btn-outline-dark fw-bold'>Conocenos</button>

      </div>
      <div className="container">
          <div className="row p-5">
              <div className="col-12 align-self-center text-center">
                  <h5>LA CASA DEL HORROR</h5>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus illum eligendi, sapiente tenetur, unde aspernatur est saepe aut mollitia natus ad. Perspiciatis vero dicta a, rem optio perferendis enim facere.</p>
                  <img src="../../src/assets/img/jack.png" alt="foto " className='img-fluid w-80'/>
              </div>
              
          </div>
          <div className="row"></div>
      </div>
      <div className="banner2"></div>

      <div className="container-fluid">
        <div className="row">
            <div className="col-12">
                <img src="../../src/assets/img/banner3.jpg" alt="foto" className='img-fluid w-100' />
            </div>
        </div>
          <div className="row row-cols-1 row-cols-md-3 my-5">
              <div className="col text-center">
                  <div className="card h-100 shadow p-3">
                      <img src="../../src/assets/img/fondo5.webp" alt="foto" className='img-fluid ' />
                      <h3>Servicio 1</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum doloremque libero illum saepe! Ipsa deserunt illum ducimus maxime, dolor saepe perferendis incidunt facere laboriosam. Itaque nihil qui earum unde. Veritatis.</p>
                      <hr />
                      <h5 className='fw-bold text-success'>$500.000 COP</h5>
                      <button className='btn btn-info'>Ampliar</button>
                  </div>
              </div>
              <div className="col">
              <div className="card h-100 shadow p-3">
                      <img src="../../src/assets/img/fondo4.jpg" alt="foto" className='img-fluid ' />
                      <h3>Servicio 2</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum rem in officia delectus esse hic dolor atque molestiae harum! Iure eos alias velit dolore, rerum ullam! Praesentium ratione dolorem earum natus magnam nam nihil officiis sunt consequuntur recusandae voluptates accusamus ab excepturi explicabo impedit repellendus, labore aliquid velit alias voluptatum vel similique nemo? Maiores amet quo beatae eveniet laborum enim, harum dolorum quis atque fugit asperiores rem ea. Corrupti vel adipisci, error quod culpa illo eaque non. Debitis rem ipsum officia harum facilis, hic voluptatem distinctio voluptate tempore voluptas? Inventore nulla cum eaque incidunt neque? Esse quis accusamus fuga repudiandae.</p>
                      <hr />
                      <h5 className='fw-bold text-success'>$500.000 COP</h5>
                      <button className='btn btn-info'>
                        Ampliar
                        <i class="bi bi-shop-window"></i>
                      </button>
                  </div>
              </div>
              <div className="col">
              <div className="card h-100  shadow p-3">
                      <img src="../../src/assets/img/fondo6.jpg" alt="foto" className='img-fluid ' />
                      <h3>Servicio 3</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum doloremque libero illum saepe! Ipsa deserunt illum ducimus maxime, dolor saepe perferendis incidunt facere laboriosam. Itaque nihil qui earum unde. Veritatis.</p>
                      <hr />
                      <h5 className='fw-bold text-success'>$500.000 COP</h5>
                      <button className='btn btn-info'>Ampliar</button>
                  </div>
              </div>


          </div>
      </div>

          <footer>
              <div className="container-fluid bg-dark text-white">
                <div className="row p-5">
                  <div className="col-6 text-end border-end">
                    <h5>Medellin-Colombia</h5>
                      <h5>Todos los derechos &copy;</h5>
                  </div>
                  <div className="col-6 align-self-center">
                  <i class="bi bi-instagram p-2 fs-4">Instagram</i> <br />
                  <i class="bi bi-facebook p-2 fs-4">Facebook</i><br />
                  <i class="bi bi-twitter-x p-2 fs-4">Twitter</i>
                  <i class="bi bi-tiktok p-2 fs-4">Tiktok</i><br />
                  </div>
                </div>
            </div>
          </footer>

    </>
  )

}