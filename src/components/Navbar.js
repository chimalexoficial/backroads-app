import logo from '../images/logo.svg'
import { pageLinks, socialLinks } from '../data.js'


export const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-center">
                <div className="nav-header">
                    <img src={logo} className="nav-logo" alt="backroads" />
                    <button type="button" className="nav-toggle" id="nav-toggle">
                        <i className="fas fa-bars"></i>
                    </button>
                </div>
                <ul className="nav-links" id="nav-links">
                    {
                        pageLinks.map(pageLinkMap => {
                            return <li key={pageLinkMap.id}>
                                <a href={pageLinkMap.href} className="nav-link"> {pageLinkMap.text} </a>
                            </li>
                        }
                        )
                    }
                </ul>

                <ul className="nav-icons">
                    {
                        socialLinks.map((socialLinkMap) => {
                            return <li key={socialLinkMap.id}>
                                <a href={socialLinkMap.href} 
                                target="_blank" 
                                rel='noreferrer'
                                className="nav-icon"
                                ><i className={socialLinkMap.icon}></i
                                ></a>
                            </li>
                        })
                    }

                </ul>
            </div>
        </nav>
    )
}