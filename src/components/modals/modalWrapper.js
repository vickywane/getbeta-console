import React from 'react'
import { Modal } from 'react-bootstrap'
import { FiX } from 'react-icons/fi'
import { Body, Title, StyledHover } from '../../styles/style'

const center = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

const ModalWrapper = props => {
  const { children, title, visibility, size, closeModal } = props

  return (
    <Modal style={{ marginTop: '3rem' }} show={visibility} onHide={() => closeModal()} size={size}>
      <Body style={{ padding: '1rem 1rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', height: '50px' }}>
          <div style={{ ...center }}>
            <Title color="#0072ce" small>
              {title}{' '}
            </Title>
          </div>

          <StyledHover onClick={() => closeModal()} style={{ ...center }}>
            <FiX style={{ fontSize: '1.7rem' }} />
          </StyledHover>
        </div>
        <hr />

        <div style={{ margin: '0.8rem 0' }}>{children}</div>
      </Body>
    </Modal>
  )
}

export default ModalWrapper