import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import ThemeMode from '../utils/theme.util'

import settings from '../../content/_settings.json'
import content from '../../content/navbar.json'
import css from '../../styles/structure/navbar.module.scss'

export default function Navbar() {
  const router = useRouter()
  const [menuState, menuToggle] = useState(false)

  useEffect(() => {
    menuToggle(false)
  }, [])

  useEffect(() => {
    const handleRouteChange = () => {
      menuToggle(false)
    }

    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  const toggleMenu = () => {
    menuToggle(!menuState)
  }

  const handleNavigation = (e, url) => {
    e.preventDefault()
    
    if (url.startsWith('/#')) {
      // Navegación interna
      const targetId = url.substring(2)
      const targetElement = document.getElementById(targetId)
      
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' })
        menuToggle(false)
      }
    } else {
      // Navegación externa
      router.push(url)
    }
  }

  return (
    <nav id="Navbar" className={css.container}>
      <ul className={css.menu}>
        <li className={css.menuHeader}>
          <Link className={css.logo} href="/">
            {settings.name}
          </Link>
          <button onClick={toggleMenu} className={css.mobileToggle} data-open={menuState}>
            <div>
              <span></span>
              <span></span>
            </div>
          </button>
        </li>
        <li data-open={menuState} className={css.menuContent}>
          <ul>
            {content.map(({ url, title }, index) => (
              <li key={index}>
                <a href={url} onClick={(e) => handleNavigation(e, url)}>
                  {title}
                </a>
              </li>
            ))}
            <li>
              <ThemeMode />
            </li>
          </ul>
        </li>
      </ul>
      <span onClick={toggleMenu} className={css.menuBlackout} data-open={menuState}></span>
    </nav>
  )
}