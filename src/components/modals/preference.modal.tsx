import React from "react"

import { Head, Body, Title } from "../../styles/style"
import Preference from "../../pages/settings/preference"

const PreferenceModal = (props): JSX.Element => {
  return (
    <Body>
      <Head>
        {" "}
        <Title> User Preference </Title>{" "}
      </Head>

      <Preference />
    </Body>
  )
}

export default PreferenceModal
