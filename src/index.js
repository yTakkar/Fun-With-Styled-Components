import React from 'react'
import { render } from 'react-dom'
import Modal from './Modal'
import { Theme } from './Styles'
import { ThemeProvider } from 'styled-components'

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={Theme}>
        <div>
          <Modal imageRounded />
          <Modal />
        </div>
      </ThemeProvider>
    )
  }
}

render(<App />, document.getElementById('root'))
