export const Header = () => {
    return `<div class="container">
            <a href="welcomePage.html">
                <img src="./src/background/Navbar Brand.png" alt="Brand">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto navbar_content_ul">
                    <li class="nav-item">
                        <a class="nav-link" href="welcomePage.html#about">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="welcomePage.html#mechanism">Mechanism</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="welcomePage.html#latest">Latest Update</a>
                    </li>
                    <li class="nav-item register">
                        <a class="nav-link" href="register.html">Register</a>
                    </li>
                </ul>
            </div>
        </div>`
};