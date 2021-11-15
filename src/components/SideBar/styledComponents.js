import styled from 'styled-components'

export const SideBarMain = styled.div`
  width: 17%;
  height: 89vh;
  overflow: hidden;
  background-color: ${props =>
    props.theme === 'DARK' ? '#212121' : '#ffffff'};
  @media (max-width: 768px) {
    display: none;
  }
`
export const SideBarUl = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`

export const SideBarLi = styled.li`
  height: 45px;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  background-color: ${props => (props.path ? props.bgColor : 'transparent')};
  font-weight: ${props => (props.path ? 600 : 400)};
  z-index: 1;
`
export const SideBarLink = styled.p`
  font-size: 16px;
  margin-left: 25px;
  pointer-events: none;
  color: ${props => (props.theme === 'DARK' ? '#e1edf7' : '#000000')};
  letter-spacing: 0.5px;
`

export const SideBarLastLi = styled.li`
  height: 160px;
  width: 18%;
  margin-bottom: 10px;
  position: absolute;
  bottom: 0;
`

export const SideContactDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 185px;
  justify-content: space-between;
  padding: 0 20px;
`

export const SideBarImg = styled.img`
  height: 40px;
`

export const SideContactH = styled.h1`
  font-size: 20px;
  margin-bottom: 15px;
  padding: 0 20px;
  color: ${props => (props.theme === 'DARK' ? '#e1edf7 ' : '#000000')};
`

export const SideContactP = styled.p`
  margin-top: 16px;
  font-size: 16px;
  padding: 0 22px;
  width: 89%;
  color: ${props => (props.theme === 'DARK' ? '#e1edf7' : '#000000')};
`
