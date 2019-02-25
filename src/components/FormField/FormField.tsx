import React from "react"
import cx from "classnames"

import styles from "./FormField.module.scss"

interface Props {
  className?: string
  icon: string
  iconAlt?: string
  size?: "small" | "normal"
}

// TODO: Unit Tests
const FormField: React.SFC<Props> = props => {
  const classNames = cx(
    styles.container,
    {
      [styles.small]: props.size === "small"
    },
    props.className
  )
  return (
    <div className={classNames}>
      <img className={styles.icon} src={props.icon} alt={props.iconAlt} />
      <input className={styles.input} />
    </div>
  )
}

FormField.defaultProps = {
  size: "normal"
}

export default FormField
