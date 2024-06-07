import { socialLinks, pageLinks } from "../data.js"

export const Footer = () => {
    return (
        <footer className="section footer">
            <ul className="footer-links">
                {
                    pageLinks.map(pageLinksMap => {
                        const {id, href, text} = pageLinksMap;
                        return (
                            <li key={id}>
                                <a href={href} className="footer-link">{text}</a>
                            </li>
                        )
                    })
                }
            </ul>
            <ul className="footer-icons">
                    {
                        socialLinks.map((socialLinkMap) => {
                            return <li key={socialLinkMap.id}>
                                <a href={socialLinkMap.href} 
                                target="_blank" 
                                rel='noreferrer'
                                className="footer-icon"
                                ><i className={socialLinkMap.icon}></i
                                ></a>
                            </li>
                        })
                    }

                </ul>

            <p className="copyright">
                copyright &copy; Backroads travel tours company
                <span id="date"></span> all rights reserved
            </p>
        </footer>
    )
}
