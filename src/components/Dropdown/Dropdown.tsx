import React, { Component } from "react"
import cx from "classnames"

import styles from "./Dropdown.module.scss"
import { OrderingOption } from "../../types"

interface Props {
  onSelect: (value: string) => void
  orderingOtions: OrderingOption[]
  selectedOrder: OrderingOption
  title?: string
}

interface State {
  open: boolean
}

class Dropdown extends Component<Props, State> {
  public state = {
    open: false
  }

  public handleSelect = (value: string) => {
    this.props.onSelect(value)
    this.toggle()
  }

  public toggle = () => {
    this.setState(state => ({ open: !state.open }))
  }

  public render() {
    const { title, orderingOtions, selectedOrder } = this.props
    const { open } = this.state
    return (
      <div className={styles.container}>
        {title && <span className={styles.title}>{title}</span>}
        <div className={styles.dropdown}>
          <div className={styles.selected} onClick={this.toggle}>
            <div className={styles.selectedItem}>{selectedOrder.text}</div>
            <div className={cx(styles.arrow, { [styles.arrowUp]: open })} />
          </div>
          {open && (
            <ul className={styles.dropdownList}>
              {orderingOtions.map(option => (
                <li
                  key={option.value}
                  className={styles.dropdownItem}
                  onClick={this.handleSelect.bind(this, option.value)}
                >
                  {option.text}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default Dropdown
