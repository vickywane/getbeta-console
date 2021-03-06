import React, { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import { FiPlus, FiUploadCloud } from 'react-icons/fi'
import { useDropzone } from 'react-dropzone'
import { Spinner } from 'react-bootstrap'

import {
  Body,
  Text,
  Button,
  Title,
  center,
  Hover,
  StyledHover,
  CreateCourseInputField as InputField
} from '../../styles/style'
import Header from '../../components/headers/header'

const Image = styled.img`
  object-fit: contain;
  width: 250px;
  height: 200px;
`

const UpgradeAccount = props => {
  const {} = props

  const [VendorName, setVendorName] = useState('')
  const [VendorDescription, setVendorDescription] = useState('')
  const [MobileNo, setMobileNo] = useState('')
  const [VendorImage, setVendorImage] = useState('')
  const [VendorImageName, setVendorImageName] = useState(null)
  const [Email, setEmail] = useState('')

  const handleSubmit = () => {
    //upgradeToVendor(VendorName, VendorDescription, MobileNo, VendorDuration, VendorImage)
  }

  const onDrop = useCallback(([file]) => {
    setVendorImage(file)
    setVendorImageName(file.name)
  }, [])

  const { getRootProps, isDragActive, isDragAccept, getInputProps, isDragReject } = useDropzone({
    onDrop,
    accept: 'image/jpeg , image/jpg, image.png'
  })

  return (
    <div>
      <Header goBack={true} screen="Upgrade to Vendor account" />

      <Body style={{ padding: '2rem 2rem' }}>
        <br />

        <div style={{ display: 'flex' }}>
          <div
            {...getRootProps({
              isDragActive,
              isDragAccept,
              isDragReject
            })}
          >
            <Image src={require('../../assets/images/image-icon.png')} />
            {isDragActive && <Text align="center"> Drop Image here </Text>}
          </div>

          <div style={{ ...center }}>
            {!VendorImageName ? (
              <StyledHover
                {...getRootProps({
                  isDragActive,
                  isDragAccept,
                  isDragReject
                })}
                style={{ display: 'flex' }}
              >
                <input {...getInputProps()} />
                <Hover style={{ margin: '0 0.7rem', ...center }}>
                  <FiUploadCloud style={{ fontSize: '1.8rem' }} />
                </Hover>

                <div style={{ paddingTop: '10px' }}>
                  <Text small style={{ fontWeight: 600 }}>
                    Upload Vendor Image{' '}
                  </Text>
                </div>
              </StyledHover>
            ) : (
              <Text> {VendorImageName} </Text>
            )}
          </div>
        </div>
        <hr />
        <form onSubmit={() => handleSubmit()}>
          <InputField>
            <label>Full Name </label>
            <input
              onChange={e => setVendorName(e.target.value)}
              value={VendorName}
              type="text"
              placeholder="Full Name"
            />
          </InputField>

          <InputField>
            <label>Biography </label>
            <textarea
              onChange={e => setVendorDescription(e.target.value)}
              value={VendorDescription}
              type="text"
              placeholder="A description of your new Vendor"
            />
          </InputField>

          <InputField>
            <label> Email Address</label>
            <input
              placeholder="Email Address"
              type="email"
              value={Email}
              onChange={e => setEmail(e.target.value)}
            />
          </InputField>

          <InputField>
            <label> Mobile Number </label>
            <input
              onChange={e => setMobileNo(e.target.value)}
              value={MobileNo}
              type="number"
              placeholder="+234-XXXX-XXXX"
            />
          </InputField>
        </form>
        <br />
        <div style={{ paddingLeft: '2%' }}>
          <Button
            style={{
              background: VendorName.length < 5 && 'transparent',
              color: VendorName.length < 5 && '#0072ce'
            }}
            disabled={VendorName.length < 5}
            onClick={() => handleSubmit()}
          >
            Upgrade Account
          </Button>
        </div>
      </Body>
    </div>
  )
}

export default UpgradeAccount
