import React from "react"
import cx from "classnames"

import styles from "./ResultsTable.module.scss"
import { Cell } from "./"

interface Props {
  className?: string
  detailCell?: boolean
  sub: string
  val: string
}

const DataCell: React.SFC<Props> = props => {
  const { detailCell, sub, val } = props
  const classNames = cx(
    styles.dataCell,
    { [styles.detailCell]: detailCell },
    props.className
  )
  return (
    <Cell className={classNames}>
      <span className={styles.val}>{val}</span>
      <span className={styles.sub}>{sub}</span>
      {props.children}
    </Cell>
  )
}

DataCell.defaultProps = {
  detailCell: false
}

export default DataCell
