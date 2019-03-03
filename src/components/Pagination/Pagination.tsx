import React from "react"
import cx from "classnames"

import styles from "./Pagination.module.scss"
import { Container } from "../"

interface Props {
  activeIndex: number
  onClick: (page: number) => void
  totalPages: number
}

const Pagination: React.SFC<Props> = props => {
  const { activeIndex, totalPages } = props
  const pagesArray = Array.from(Array(totalPages).keys(), i => i + 1)

  return (
    <section className={styles.paginationWrapper}>
      <Container className={styles.paginationContainer}>
        {pagesArray.map(pageNumber => (
          <button
            key={pageNumber}
            className={cx(styles.page, {
              [styles.active]: activeIndex === pageNumber
            })}
            onClick={props.onClick.bind(null, pageNumber)}
          >
            {pageNumber}
          </button>
        ))}
      </Container>
    </section>
  )
}

export default Pagination
