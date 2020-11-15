import React from "react"
import styled from "styled-components"
import AnchorLink from "react-anchor-link-smooth-scroll"

import { Container } from "../global"

const openInNewTab = (url) => {
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
  if (newWindow) newWindow.opener = null
}

const Footer = () => (
  <FooterWrapper id="footer">
    <BrandContainer>
      <Logo>feels slo, but good slo</Logo>
    </BrandContainer>
    <FooterColumnContainer>
      <FooterColumn>
        <span>built by</span>
        <ul>
          <li>
            <a href="https://www.nomadriver.co">
                nomad river
              </a>
          </li>
        </ul>
      </FooterColumn>
      <FooterColumn>
        <span>supported by</span>
        <ul>
          <li>
            <a href="http://www.centro.portugal2020.pt/">
                PORTUGAL 2020 
              </a>
          </li>
        </ul>
      </FooterColumn>
      <FooterColumn>
        <span>social</span>
        <ul>
          <li>linkedIn</li>
          <li>instagram</li>
        </ul>
      </FooterColumn>
    </FooterColumnContainer>
  </FooterWrapper>
)

const FooterWrapper = styled.footer`
  background-color: white;
  margin: 80px 0 0;
  padding: 0 0 80px;
`

const Logo = styled.div`
  font-family: ${props => props.theme.font.extrabold};
  ${props => props.theme.font_size.regular};
  color: ${props => props.theme.color.black.regular};
  text-decoration: none;
  letter-spacing: 1px;
  margin: 0;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 9;
  text-decoration: none;
  outline: 0px;
`

const BrandContainer = styled(Container)`
  position: relative;
  padding-top: 48px;
  display: flex;
  align-items: flex-end;

  @media (max-width: ${props => props.theme.screen.sm}) {
  }
`
const FooterColumnContainer = styled(Container)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 32px;
  padding-top: 2rem;
  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 32px;
  }
`
const FooterColumn = styled.div`
  span {
    font-size: 16px;
    font-family: ${props => props.theme.font.bold};
    color: ${props => props.theme.color.primary};
  }
  ul {
    list-style: none;
    margin: 16px 0;
    padding: 0;
    color: ${props => props.theme.color.black.regular};
    li {
      margin-bottom: 12px;
      font-family: ${props => props.theme.font.normal};
      font-size: 15px;
      a {
        color: ${props => props.theme.color.primary};
        text-decoration: none;
      }
      a:hover{
        text-decoration:underline;
      }
      a:visited{
        text-decoration: none;
      }
    }
  }
`

export default Footer
