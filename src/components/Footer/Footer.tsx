import React from "react"

import styles from "./Footer.module.scss"
import { Container, FooterMenuGroup } from "../"
import { ThyLogo } from "../../assets/images"

export const menuGroupA = {
  links: [
    { text: "Anasayfa", uri: "#" },
    { text: "Şehir & Gezi Rehberi", uri: "#" },
    { text: "Fırsatlar", uri: "#" },
    { text: "Keşfet", uri: "#" },
    { text: "Yardım", uri: "#" },
    { text: "İletişim", uri: "#" }
  ],
  title: "Sayfalar"
}

export const menuGroupB = {
  links: [
    { text: "İstanbul", uri: "#" },
    { text: "Ankara", uri: "#" },
    { text: "İzmir", uri: "#" },
    { text: "New York", uri: "#" },
    { text: "Roma", uri: "#" },
    { text: "Venedik", uri: "#" },
    { text: "Amsterdam", uri: "#" }
  ],
  title: "Popüler Şehirler"
}

export const menuGroupC = {
  links: [
    { text: "Online Check-in", uri: "#" },
    { text: "Genel Uçuş Kuralları", uri: "#" },
    { text: "Yolcu Hakları", uri: "#" }
  ],
  title: "Merak Edilenler"
}

export const menuGroupD = {
  links: [
    { text: "İletişim", uri: "#" },
    { text: "Twitter", uri: "#" },
    { text: "Facebook", uri: "#" }
  ],
  title: "Bize Ulaşın"
}

const Footer: React.SFC = () => {
  return (
    <footer className={styles.footer}>
      <Container className={styles.footerContainer}>
        <div className={styles.branding}>
          <img className={styles.logo} src={ThyLogo} alt="Logo" />
          <p className={styles.textContent}>
            Fusce vehicula dolor arcu, sit amet blandit dolor mollis nec. Donec
            viverra eleifend lacus, vitae ullamcorper metus. Sed sollicitudin
            ipsum quis nunc sollicitudin ultrices.
          </p>
        </div>
        <div className={styles.menu}>
          <FooterMenuGroup title={menuGroupA.title} links={menuGroupA.links} />
          <FooterMenuGroup title={menuGroupB.title} links={menuGroupB.links} />
          <FooterMenuGroup title={menuGroupC.title} links={menuGroupC.links} />
          <FooterMenuGroup title={menuGroupD.title} links={menuGroupD.links} />
        </div>
      </Container>
    </footer>
  )
}

export default Footer
