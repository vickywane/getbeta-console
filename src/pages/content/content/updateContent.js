import React from 'react'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
  DrawerContent,
  DrawerCloseButton
} from '@chakra-ui/core'
import { InputBody } from './content'
import { Text, MdTitle, Hover, Title, Button, center, StyledHover } from '../../../styles/style'

const UpdateContent = props => {
  return (
    <div>
      <Title> Edit Content </Title> <hr />
      <div>
        <InputBody>
          <label> Content Title </label>
          <input
            type="text"
            //   value={updateTitle}
            //   placeholder={data.title}
            //   onChange={e => {
            //     setUpdateTitle(e.target.value)
            //   }}
          />
        </InputBody>
        <br />
        <InputBody>
          <label> Content Description </label>
          <textarea
            type="text"
            //   value={updateDescription}
            //   placeholder={data.descrp}
            //   onChange={e => setUpdatedDescription(e.target.value)}
          />
        </InputBody>
      </div>
      <DrawerFooter>
        <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
          {/* <Button onClick={onClose} style={{ background: 'grey' }}>
                Cancel
              </Button> */}

          <Button
          // onClick={() => {
          //   handleUpdate()
          //   onClose()
          // }}
          >
            {/* {isLoading ? 'Saving' : 'Save'} Changes.
                {isLoading && (
                  <div style={{ paddingLeft: '.7rem' }}>
                    <Spinner size="sm" animation="border" role="status" />
                  </div>
                )} */}
          </Button>
        </div>
      </DrawerFooter>
    </div>
  )
}

export default UpdateContent
