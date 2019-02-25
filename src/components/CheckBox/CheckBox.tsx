import React from "react"
import cx from "classnames"

import styles from "./CheckBox.module.scss"

interface Props {
  className?: string
  checked?: boolean
  label: string
  onChange: (e: React.InputHTMLAttributes<HTMLElement>) => void
}

const CheckBox: React.SFC<Props> = props => {
  const { checked, label, onChange } = props
  const classNames = cx(styles.container, props.className)
  const checkmarkClasses = cx(styles.checkmark, { [styles.checked]: checked })
  return (
    <label className={classNames}>
      {label}
      <input
        className={styles.checkbox}
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <span className={checkmarkClasses} />
    </label>
  )
}

CheckBox.defaultProps = {
  checked: false
}

export default CheckBox
