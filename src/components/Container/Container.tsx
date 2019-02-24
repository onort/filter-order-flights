import React from "react"
import cx from "classnames"

import styles from "./Container.module.scss"

interface Props {
  className?: string
}

const Container: React.SFC<Props> = props => {
  const classNames = cx(styles.container, props.className)
  return <div className={classNames}>{props.children}</div>
}

export default Container
