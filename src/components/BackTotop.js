import React, { useEffect, useState } from 'react'
import { BsFillArrowUpCircleFill } from 'react-icons/bs'
import styled from 'styled-components'
const BackTotop = () => {
  const [backToTopButton, setBackToTopButton] = useState(0)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true)
      } else {
        setBackToTopButton(false)
      }
    })
  }, [])
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  return (
    <Wrapper>
      {backToTopButton && (
        <button className='btnTop' onClick={scrollUp}>
          <BsFillArrowUpCircleFill />
        </button>
      )}
    </Wrapper>
  )
}
const Wrapper = styled.section`
.btnTop{
  position: fixed;
  color: var(--clr-secondary);
  font-size: 3rem;
  border-color: transparent;
  background: transparent; 
  bottom: 100px;
  z-index: 5;
  cursor: pointer;
}
`
export default BackTotop
