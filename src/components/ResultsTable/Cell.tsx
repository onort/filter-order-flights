import React from "react"
import cx from "classnames"

import styles from "./ResultsTable.module.scss"

interface Props {
  className?: string
}

const Cell: React.SFC<Props> = props => {
  const classNames = cx(styles.cell, props.className)

  return <div className={classNames}>{props.children}</div>
}

export default Cell
