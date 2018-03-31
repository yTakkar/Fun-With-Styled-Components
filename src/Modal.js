import React from 'react'
import * as Styles from './Styles'

class Modal extends React.Component {
  render() {
    let { imageRounded } = this.props

    return (
      <Styles.Modal imageRounded={imageRounded}>
        <span>Title</span>
        <div>
          <img
            src="https://raw.githubusercontent.com/styled-components/brand/master/styled-components.png"
            alt="Styled components"
          />
          <Styles.Button primary href="#">
            First Link
          </Styles.Button>
          <Styles.Button href="#">Second Link</Styles.Button>
        </div>
      </Styles.Modal>
    )
  }
}

export default Modal
