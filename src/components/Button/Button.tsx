import React from "react"
import cx from "classnames"

import styles from "./Button.module.scss"

type ButtonHTMLType = "submit" | "button" | "reset"

interface Props {
  className?: string
  onClick?: (e: React.MouseEvent<HTMLElement>) => void
  primary?: boolean
  secondary?: boolean
  text: string
  type?: ButtonHTMLType
}

const Button: React.SFC<Props> = props => {
  const { onClick, primary, secondary, text, type } = props
  const classNames = cx(
    styles.button,
    {
      [styles.primary]: primary,
      [styles.secondary]: secondary
    },
    props.className
  )
  return (
    <button className={classNames} type={type} onClick={onClick}>
      <span className={styles.text}>{text}</span>
    </button>
  )
}

Button.defaultProps = {
  type: "button"
}

export default Button
