import React from "react"
import cx from "classnames"

import styles from "./NavItem.module.scss"

interface Props {
  className?: string
  active?: boolean
  icon?: string
  title: string
}

const NavItem: React.SFC<Props> = props => {
  const classNames = cx(
    styles.item,
    { [styles.active]: props.active },
    props.className
  )
  return (
    <a className={classNames}>
      <img className={styles.icon} src={props.icon} alt={props.title} />
      <span className={styles.title}>{props.title}</span>
    </a>
  )
}

export default NavItem
