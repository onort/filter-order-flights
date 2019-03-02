/* stylelint-disable declaration-block-trailing-semicolon */
import React from "react"
import cx from "classnames"

import styles from "./Slider.module.scss"

interface Props {
  className?: string
  currentValue: number
  max: number
  min: number
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Slider: React.SFC<Props> = props => {
  const { currentValue, max, min, onChange } = props
  const classNames = cx(styles.container, props.className)
  const trackerWidth = (currentValue / max) * 100 - 2
  return (
    <div className={classNames}>
      <div
        className={styles.sliderTrack}
        style={{ width: `${trackerWidth}%` }}
      />
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
