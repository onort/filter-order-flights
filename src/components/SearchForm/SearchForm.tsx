import React, { Component } from "react"
import cx from "classnames"

import styles from "./SearchForm.module.scss"
import {
  Arrival,
  ArrivalDate,
  Departure,
  DepartureDate,
  Person
} from "../../assets/icons"
import { Button, FormField } from "../"

interface Props {
  className?: string
  type?: "primary" | "secondary"
}

class SearchForm extends Component<Props> {
  public static defaultProps = { type: "primary" }

  public render() {
    const classNames = cx(styles.container, this.props.className)
    return (
      <div className={classNames}>
        <FormField icon={Departure} size="normal" />
        <FormField icon={Arrival} size="normal" />
        <FormField icon={DepartureDate} size="normal" />
        <FormField icon={ArrivalDate} size="normal" />
        <FormField icon={Person} size="small" />
        {this.props.type === "primary" ? (
          <Button
            text="Yeniden Ara"
            primary={true}
            className={styles.searchButton}
          />
        ) : (
          <Button
            text="Bilet Ara"
            secondary={true}
            className={styles.searchButton}
          />
        )}
      </div>
    )
  }
}

export default SearchForm
