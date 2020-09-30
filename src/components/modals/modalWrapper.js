import React from 'react'
import { Modal } from 'react-bootstrap'
import { FiX } from 'react-icons/fi'
import { Body, Title, StyledHover, center } from '../../styles/style'

const ModalWrapper = props => {
  const { children, title, visibility, size, closeModal, icon } = props

  return (
    <Modal style={{ marginTop: '3rem' }} show={visibility} onHide={() => closeModal()} size={size}>
      <Body style={{ padding: '0.5rem 1rem' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            height: '45px',
            padding: '1rem 0',
            borderBottom: '1px solid #c0c0c0'
          }}
        >
          <div style={{ display: 'flex' }}>
            <div style={{ ...center, marginRight: '0.5rem', color: '#0072ce' }}>{icon}</div>

            <div style={{ ...center }}>
              <Title color="#0072ce" small>
                {title}{' '}
              </Title>
            </div>
          </div>

          <div
            onClick={() => closeModal()}
            style={{ ...center, cursor: 'pointer', color: '#0072ce' }}
          >
            <FiX style={{ fontSize: '1.4rem' }} />
          </div>
        </div>

        <div style={{ margin: '0.5rem 0' }}>{children}</div>
      </Body>
    </Modal>
  )
}

export default ModalWrapper
