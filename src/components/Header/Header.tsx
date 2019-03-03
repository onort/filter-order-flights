import React, { Component } from "react"
import cx from "classnames"

import styles from "./Header.module.scss"
import { ThyLogo } from "../../assets/images"
import { Contact, Help, Home, Menu, Sale } from "../../assets/icons"
import { Container, NavItem } from "../"

interface State {
  menuOpen: boolean
}

class Header extends Component<any, State> {
  public state = {
    menuOpen: false
  }

  public toggleMenu = () =>
    this.setState(state => ({ menuOpen: !state.menuOpen }))

  public render() {
    return (
      <header className={styles.header}>
        <Container className={styles.container}>
          <a className={styles.logoContainer}>
            <img className={styles.logo} src={ThyLogo} alt="Logo" />
          </a>
          <img
            className={styles.burger}
            src={Menu}
            alt="Menu Icon"
            onClick={this.toggleMenu}
          />
          <nav
            className={cx(styles.navigation, {
              [styles.menuOpen]: this.state.menuOpen
            })}
            onClick={this.toggleMenu}
          >
            <NavItem title="Ana Sayfa" icon={Home} active={true} uri="#" />
            <NavItem title="Süper Fırsatlar" icon={Sale} uri="#" />
            <NavItem title="Yardım" icon={Help} uri="#" />
            <NavItem title="İletişim" icon={Contact} uri="#" />
          </nav>
        </Container>
      </header>
    )
  }
}

export default Header
