import React from "react"

import styles from "./Header.module.scss"
import { ThyLogo } from "../../assets/images"
import { Contact, Help, Home, Sale } from "../../assets/icons"
import { Container, NavItem } from "../"

const Header = () => {
  return (
    <header className={styles.header}>
      <Container className={styles.container}>
        <a className={styles.logoContainer}>
          <img className={styles.logo} src={ThyLogo} alt="Logo" />
        </a>
        <nav className={styles.navigation}>
          <NavItem title="Ana Sayfa" icon={Home} active={true} />
          <NavItem title="Süper Fırsatlar" icon={Sale} />
          <NavItem title="Yardım" icon={Help} />
          <NavItem title="İletişim" icon={Contact} />
        </nav>
      </Container>
    </header>
  )
}

export default Header
