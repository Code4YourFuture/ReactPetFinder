import './css/header.css'

export function Header() {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={"img/PetFinderLogo.png"} alt="Pet Finder Logo" width="80" height="80" />
          </a>
          <div className="d-flex justify-content-center w-100">
            <h1 className="text-center text-white">Help them find their fur-ever home!</h1>
          </div>
        </div>
      </nav>
    )
}