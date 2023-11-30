import { useEffect } from "react"
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { useActions } from "../../hooks/useActions";


export const Header = () => {
  const location = useLocation();
  const burgerStatus = useSelector(state => state.burger.status);
  const { 
    burgerOpen, 
    burgerClose 
  } = useActions();

  const burgerClick = () => {
    burgerStatus ? burgerClose() : burgerOpen()
  }

  const menu = [
    { href: '/blog/', aria: 'Go to: Blog', title: 'Blog' }, 
    { href: '/post/', aria: 'Go to: Newsletter', title: 'Newsletter' },  
    { href: '/', aria: 'Go to: Twitter', title: 'Twitter' }, 
    { href: '/blog/blog2', aria: 'Go to: Twitter', title: 'Blog2' }, 
  ]

  useEffect(() => {
    if (burgerStatus) {
      burgerClose();
    }     
  }, [location]);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrap">
          <div className="logo">
            <Link to="/" className="ic ic-logo-h" aria-label="Go to Home page Ixartz’s Blog">Ixartz’s Blog</Link>
          </div>
          <button data-status={burgerStatus} className={`btn burger ic ic-burger visible-xs ${burgerStatus ? 'active' : ''}`} onClick={burgerClick}></button>
          <nav className={`navigation ${burgerStatus ? 'opened' : ''}`}>
            <ul>
              { menu.map((link, i) => (
                <li key={i}>
                  <Link to={link.href} className="link ellipsis" title={link.title} aria-label={link.aria}>{link.title}</Link>
                </li>
              )) }
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
