

function NavBar() {
    return (

        <div>
         <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="/">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <a className="nav-link active" href="/">Home <span className="sr-only">(current)</span></a>
      <a className="nav-link" href="/node_modules">Features</a>
      <a className="nav-link" href="/">Pricing</a>
      <a className="nav-link disabled" href="/" tabindex="-1" aria-disabled="true">Disabled</a>
      <div classname="">
      <form class="form-inline" >
    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
      </div>
    </div>
  </div>
</nav>
        </div>


    )
}

export default NavBar