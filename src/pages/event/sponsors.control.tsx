import React, { useState } from "react"
import styled from "styled-components"
import { FiX, FiEdit, FiShoppingCart } from "react-icons/fi"
import {
  IoIosBug,
  IoMdMail,
  IoIosPhonePortrait,
  IoIosHome,
  IoIosPeople,
  IoMdConstruct,
} from "react-icons/io"
import media from "styled-media-query"

import { Hover, Title, Text, Section, Body } from "../../styles/style"
import { EmptyData } from "../../components/placeholders"

const Sponsors = props => {
  return (
    <Body>
      <Body>
        <EmptyData
          message={`This event has no confirmed sponsors. \n \n While Oasis does not manage any part of the funds from sponsors, we require an email from each sponsor inorder to verify the sponsorhip offer in line with our event guidelines.`}
          link="https://my-event.com"
          feature="Event Backers and Sponsors"
        />
      </Body>
    </Body>
  )
}

export default Sponsors
