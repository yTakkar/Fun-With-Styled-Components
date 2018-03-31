import Styled from 'styled-components'

const Theme = {
  primaryColor: 'green'
}

const Modal = Styled.div`
  > span:first-of-type {
    display: block;
    font-weight: 600;
    font-size: 18px;
  }

  & img {
    width: 200px;
    height: 200px;
    display: block;
    border-radius: ${props => (props.imageRounded ? '3px' : null)};
  }

  & a {
    text-decoration: none;
  }
`

const Button = Styled.a`
  background: ${props => props.theme.primaryColor};
  font-weight: bold;
  padding: 6px 12px;
  display: inline-block;
  border-radius: 2px;
  color: #1b2733;

  &:hover {
    background: ${props => `light${props.theme.primaryColor}`};
  }
`

export { Theme, Modal, Button }
