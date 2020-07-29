import React from 'react'
import { Body, Text } from '../../styles/style'
import { Footer, Header, Loader } from '../../components'
import { useQuery } from '@apollo/react-hooks'
import { GET_USER } from '../../data/queries'

const ProfilePreview = (props): JSX.Element => {
  const id = props.match.params.id

  const { data, loading, error } = useQuery(GET_USER, {
    variables: {
      id: id,
      name: ''
    }
  })

  if (loading) {
    return <Loader type={'loading'} />
  }

  if (error) {
    console.log(error)

    return (
      <Loader
        type={'error'}
        error={error.graphQLErrors[0].message}
        path={error.graphQLErrors[0].path[0]}
      />
    )
  }

  if (data) {
    const { name } = data.user

    return (
      <div>
        <Header />
        <br />
        <Body>
          <Text> Profile preview of {name}</Text>
        </Body>
        <Footer />
      </div>
    )
  }
}

export default ProfilePreview
