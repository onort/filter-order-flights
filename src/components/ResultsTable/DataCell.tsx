import React from "react"
import cx from "classnames"

import styles from "./ResultsTable.module.scss"
import { Cell } from "./"

interface Props {
  className?: string
  sub: string
  val: string
}

const DataCell: React.SFC<Props> = props => {
  const { sub, val } = props
  const classNames = cx(styles.dataCell, props.className)
  return (
    <Cell className={classNames}>
      <span className={styles.val}>{val}</span>
      <span className={styles.sub}>{sub}</span>
    </Cell>
  )
}

export default DataCell
