import React from "react"
import cx from "classnames"

import styles from "./FilterSection.module.scss"

interface Props {
  className?: string
  canSelectAll?: boolean
  infoText?: string
  onSelectAll?: (e: React.MouseEvent<HTMLElement>) => void
  title: string
}

const FilterSection: React.SFC<Props> = props => {
  const { canSelectAll, infoText, onSelectAll, title } = props
  const classNames = cx(styles.container, props.className)
  return (
    <div className={classNames}>
      <div className={styles.header}>
        <span className={styles.title}>{title}</span>
        {infoText && <span className={styles.infoText}>{infoText}</span>}
        {canSelectAll && (
          <span className={styles.selectAll} onClick={onSelectAll}>
            Tümünü Seç
          </span>
        )}
      </div>
      <div className={styles.body}>{props.children}</div>
    </div>
  )
}

FilterSection.defaultProps = {
  canSelectAll: false
}

export default FilterSection
