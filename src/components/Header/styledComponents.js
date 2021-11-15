import styled from 'styled-components'

export const HeaderMain = styled.div`
  padding: 20px 40px;
  background-color: ${props =>
    props.theme === 'DARK' ? '#212121' : '#ffffff'};
  display: flex;
  justify-content: space-between;
  height: 11vh;
  width: 100%;
`

export const WebsiteLogo = styled.img`
  height: 40px;
  width: 150px;
`
export const HeaderUl = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  width: 250px;
  justify-content: space-between;
  align-items: center;
`

export const HeaderLi = styled.li``
export const UserIcon = styled.img`
  height: 32px;
`

export const LogoutBtn = styled.button`
  height: 33px;
  width: 110px;
  background-color: transparent;
  border: ${props =>
    props.theme === 'DARK' ? 'solid 2px #ffffff' : 'solid 2px #3b82f6'};
  font-size: 14px;
  color: ${props => (props.theme === 'DARK' ? '#ffffff' : '#3b82f6')};
  cursor: pointer;
`

export const ModalContainer = styled.div`
  font-size: 12px;
  background-color: ${props =>
    props.theme === 'DARK' ? '#212121' : '#ffffff'};
  width: 380px;
  height: 165px;
  border-radius: 15px;
  padding: 30px;
`

export const ModalHeading = styled.h1`
  width: 100%;
  font-size: 18px;
  font-family: Roboto;
  text-align: center;
  padding: 5px;
  margin-bottom: 20px;
  color: ${props => (props.theme === 'DARK' ? '#ffffff' : '#212121')};
`

export const ModalBtnContainer = styled.div`
  width: 250px;
  padding: 10px 5px;
  margin: auto;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const ModalBtn = styled.button`
  height: 42px;
  width: 110px;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.5px;
  border: 1px solid ${props => (props.blue ? 'transparent' : '#475569')};
  color: ;
  color: ${props => (props.blue ? '#ffffff' : '#475569')};
  background-color: ${props => (props.blue ? '#3b82f6' : 'transparent')};
  cursor: pointer;
`
