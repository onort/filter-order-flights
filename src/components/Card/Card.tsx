import React from "react"
import cx from "classnames"

import styles from "./Card.module.scss"

interface Props {
  className?: string
}

const Card: React.SFC<Props> = props => {
  const classNames = cx(styles.container, props.className)
  return <div className={classNames}>{props.children}</div>
}

export default Card
