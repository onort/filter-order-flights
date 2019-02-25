import React, { Component } from "react"

import styles from "./Dropdown.module.scss"

interface Props {
  selectedItem?: string
  title?: string
}

interface State {
  open: boolean
  selectedItem: string
}

class Dropdown extends Component<Props, State> {
  public state = {
    open: false,
    selectedItem: this.props.selectedItem ? this.props.selectedItem : ""
  }

  public toggle = () => {
    this.setState(state => ({ open: !state.open }))
  }

  public render() {
    const { title } = this.props
    const { open, selectedItem } = this.state
    return (
      <div className={styles.container}>
        {title && <span className={styles.title}>{title}</span>}
        <div className={styles.dropdown}>
          <div className={styles.selected} onClick={this.toggle}>
            <div className={styles.selectedItem}>{selectedItem}</div>
          </div>
          {open && (
            <ul className={styles.dropdownList}>
              <li className={styles.dropdownItem}>Option A</li>
              <li className={styles.dropdownItem}>Option B</li>
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default Dropdown
