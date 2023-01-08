import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import styled from 'styled-components'

const AuthWrapper = ({Children}) => {
  const{isLoading,error}= useAuth0()
  if(isLoading){
    return( <Wrapper>
      <h1>loading..</h1>
    </Wrapper>
    )
  }
  if (error) {
    return (
      <Wrapper>
        {error.message}
      </Wrapper>
    )
  }
  return <>{Children}
  </>
}

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
`

export default AuthWrapper