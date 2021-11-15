import Popup from 'reactjs-popup'
import {withRouter} from 'react-router-dom'
import Cookie from 'js-cookie'
import {FaMoon} from 'react-icons/fa'
import {BiSun} from 'react-icons/bi'
import MainContext from '../../context/MainContext'
import './index.css'

import {
  HeaderMain,
  WebsiteLogo,
  HeaderUl,
  HeaderLi,
  UserIcon,
  LogoutBtn,
  ModalContainer,
  ModalHeading,
  ModalBtnContainer,
  ModalBtn,
} from './styledComponents'

const Header = props => (
  <MainContext.Consumer>
    {value => {
      const {activeTheme, changeTheme} = value
      const onClickTheme = () => {
        changeTheme()
      }
      const logOutConf = () => {
        Cookie.remove('jwt_token')
        const {history} = props
        history.replace('/login')
      }
      return (
        <HeaderMain theme={activeTheme}>
          <WebsiteLogo
            src={
              activeTheme === 'DARK'
                ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
            }
            alt="website-logo"
          />
          <HeaderUl>
            <HeaderLi onClick={onClickTheme}>
              {activeTheme === 'DARK' ? (
                <BiSun size="25px" color="#ffffff" />
              ) : (
                <FaMoon size="25px" />
              )}
            </HeaderLi>
            <HeaderLi>
              <UserIcon
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />
            </HeaderLi>
            <HeaderLi>
              <Popup
                trigger={
                  <LogoutBtn type="button" className="button">
                    Logout
                  </LogoutBtn>
                }
                modal
                className="popup-content"
              >
                {close => (
                  <ModalContainer theme={activeTheme}>
                    <ModalHeading theme={activeTheme}>
                      Are you sure you want to logout ?
                    </ModalHeading>

                    <ModalBtnContainer className="actions">
                      <ModalBtn
                        type="button"
                        className="button"
                        onClick={close}
                      >
                        Close
                      </ModalBtn>
                      <ModalBtn
                        type="button"
                        blue
                        className="button"
                        onClick={() => {
                          logOutConf()
                          close()
                        }}
                      >
                        Confirm
                      </ModalBtn>
                    </ModalBtnContainer>
                  </ModalContainer>
                )}
              </Popup>
            </HeaderLi>
          </HeaderUl>
        </HeaderMain>
      )
    }}
  </MainContext.Consumer>
)

export default withRouter(Header)
