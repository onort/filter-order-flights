import React from "react"
import cx from "classnames"

import styles from "./ResultsTable.module.scss"

interface Props {
  className?: string
}

const Row: React.SFC<Props> = props => {
  const classNames = cx(styles.row, props.className)

  return <div className={classNames}>{props.children}</div>
}

export default Row
