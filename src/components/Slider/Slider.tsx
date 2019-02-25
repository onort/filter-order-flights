import React from "react"
import cx from "classnames"

import styles from "./Slider.module.scss"

interface Props {
  className?: string
  currentValue: number
  max: number
  min: number
  onChange: (e: React.ChangeEvent<HTMLElement>) => void
}

// TODO: Slide track color
const Slider: React.SFC<Props> = props => {
  const { currentValue, max, min, onChange } = props
  const classNames = cx(styles.container, props.className)
  return (
    <div className={classNames}>
      <input
        type="range"
        min={min}
        max={max}
        value={currentValue}
        className={styles.slider}
        onChange={onChange}
      />
    </div>
  )
}

Slider.defaultProps = {
  currentValue: 0,
  max: 1,
  min: 0
}

export default Slider
