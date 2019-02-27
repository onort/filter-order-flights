import React from "react"
import cx from "classnames"

import styles from "./ResultsTable.module.scss"
import { PegasusLogo } from "../../assets/images"
import { Button } from "../"
import { Cell, DataCell, Row } from "./"

interface Props {
  className?: string
}

const Result: React.SFC<Props> = props => {
  const classNames = cx(styles.row, props.className)

  return (
    <Row className={classNames}>
      <Cell>
        <img className={styles.logo} src={PegasusLogo} alt="Logo" />
      </Cell>
      <DataCell sub="ADB" val="20:40" />
      <DataCell sub="SAW" val="23:50" />
      <DataCell sub="3 saat 10 dakika" val="1 Aktarma" />
      <Cell className={styles.priceCell}>
        <div className={styles.price}>
          <div className={styles.dataCell}>
            <span className={styles.val}>69 TL</span>
            <span className={styles.sub}>Turkish Airlines</span>
          </div>
          <div className={styles.buttonContainer}>
            <Button className={styles.viewButton} text="Incele" />
          </div>
        </div>
      </Cell>
    </Row>
  )
}

export default Result
