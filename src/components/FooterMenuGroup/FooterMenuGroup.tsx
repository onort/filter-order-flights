import React from "react"

import styles from "./FooterMenuGroup.module.scss"

interface Link {
  text: string
  uri: string
}

interface Props {
  links: Link[]
  title: string
}

const FooterMenuGroup: React.SFC<Props> = props => {
  const { links, title } = props
  return (
    <div className={styles.container}>
      <h5 className={styles.title}>{title}</h5>
      <ul className={styles.list}>
        {links.map(link => (
          <li key={link.text} className={styles.item}>
            <a href={link.uri}>{link.text}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FooterMenuGroup
