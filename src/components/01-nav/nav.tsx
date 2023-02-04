import '../../styles/components/nav.scss'
import logo from '../../public/images/logo-light-background.png'

export const Nav = () => {
  return (
    <nav className="nav">
        <div className="logo">
            <img className='nav-logo' src={logo} alt="logo" />
        </div>
        <div className="nav-links">
            <ul>
                <li><a href="#">gallery</a></li>
                <li><a href="#" className='highlight-dark'>Merch</a></li>
                <li><a href="#"><h2 className='highlight'>Join Us!</h2></a></li>
            </ul>
        </div>
    </nav>
  )
}
