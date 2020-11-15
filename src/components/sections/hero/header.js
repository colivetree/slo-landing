import React, { useState, useEffect, Component } from "react"
import styled from "styled-components"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"

import { Container } from "../../global"



const Header = () => {
  const [state, setState] = useState({
    number: "cenas",
    name: "",
  });

  const data = useStaticQuery(graphql`
    query {
      file(sourceInstanceName: { eq: "product" }, name: { eq: "plan-again" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `);

// const client = require('twilio')(accountSid, authToken); 


  const handleSubmit = event => {
    event.preventDefault()
    var m_number = state.number;

    fetch('https://twilio-integration.colivetree.workers.dev/?customer='+m_number)
        .then(response => response.json())
    console.log(state.number);

    setState({number: m_number,name:m_number})
  };
  
  const handleInputChange = event=> {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    setState({
      number: value,
      name:""
    });
  };

  return(
    <HeaderWrapper id="top">
      <Container>
        <Flex>
        <ImageWrapper>
            <StyledImage fluid={data.file.childImageSharp.fluid} />
            <br/>
            <HeaderButton>plan a new trip</HeaderButton>
          </ImageWrapper>
          <Divider></Divider>
          <HeaderTextGroup>
            <h1> wherever you go, go slo </h1>
            <h2> we plan the trip of your life. </h2>
            <h2> for free. </h2>
            <h2>text us your phone number below to get started.</h2>
            <Response isVisible={state.name}>{state.name}</Response>
            <HeaderForm onSubmit={handleSubmit}>
              <HeaderInput placeholder="your phone number" onChange={handleInputChange}/>
              <HeaderButton>start</HeaderButton>
            </HeaderForm>
          </HeaderTextGroup>
        </Flex>
      </Container>
    </HeaderWrapper>
    );
}


const HeaderWrapper = styled.header`
background-color: #F7ECDF;
padding: 160px 0 80px 0;
position: relative;
clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 5vw));
@media (max-width: ${props => props.theme.screen.md}) {
}
`
const Subtitle = styled.h5`
font-size: 16px;
color: ${props => props.theme.color.accent};
letter-spacing: 0px;
margin-bottom: 16px;
`

const Divider = styled.div`
height: 100%;
border-left: 2px solid ${props => props.theme.color.primary};
width: 5px;
padding-left:2rem;
`

const HeaderTextGroup = styled.div`
margin: 0;
display:flex;
flex-direction:column;
justify-content:flex-end;


> div {
  width: 120%;
  margin-bottom: -4.5%;

  @media (max-width: ${props => props.theme.screen.md}) {
    margin: 0 16px;
  }
}

h1 {
  margin: 0 0 24px;
  color: ${props => props.theme.color.primary};
}

h2 {
  margin-bottom: 0;
  marging-left:12px;
  font-size: 22px;
  line-height: 30px;
  padding: 1rem;
  background-color: #8C7A78;
  color:white;
  width:fit-content;
  border-radius: 4px;
  ${props => props.theme.font_size.regular};
}

h2:after{
  position:relative;
  left: 38px;
  bottom: -30px;
  border: 15px solid;
  border-color: #fff transparent transparent #fff;
}

p {
  margin-bottom: 48px;
}
`

const Response = styled.div`
margin-bottom: 0 !important;
margin-top:1rem;
font-size: 22px;
line-height: 30px;
padding: 1rem;
align-self:flex-end;
background-color: #cab2af;
color:white;
width:fit-content !important;
border-radius: 4px;
display: ${props=>props.isVisible===""?"none":"block"};
${props => props.theme.font_size.regular};`

const Flex = styled.div`

display: grid;
justify-content: space-between;
align-content: center;
grid-template-columns: 25% 1fr 75%;
@media (max-width: ${props => props.theme.screen.md}) {
  grid-template-columns: 1fr;
  grid-gap: 64px;
}
`

const HeaderForm = styled.form`
display: flex;
flex-direction: row;
padding-bottom: 16px;
padding-top: 150px;
@media (max-width: ${props => props.theme.screen.sm}) {
  flex-direction: column;
}
`

const FormSubtitle = styled.span`
${props => props.theme.font_size.xxsmall}
`

const FormSubtitleLink = styled(Link)`
color: ${props => props.theme.color.secondary};
padding-bottom: 1px;
margin-left: 8px;
text-decoration: none;
border-bottom: 1px solid ${props => props.theme.color.secondary};
`

const HeaderInput = styled.input`
font-weight: 500;
font-size: 16px;
color: ${props => props.theme.color.primary};
line-height: 42px;
width: 100%;
text-align: left;
height: 60px;
border-width: 1px;
border-style: solid;
border-color: ${props => props.theme.color.secondary};
border-image: initial;
border-radius: 4px;
padding: 8px 16px;
outline: 0px;
&:focus {
  box-shadow: inset ${props => props.theme.color.secondary} 0px 0px 0px 2px;
}
@media (max-width: ${props => props.theme.screen.md}) {
  margin-bottom: 8px;
}
@media (max-width: ${props => props.theme.screen.sm}) {
  display: block;
  width: 100%;
}
`

const HeaderButton = styled.button`
font-weight: 500;
font-size: 14px;
color: white;
letter-spacing: 1px;
height: 60px;
display: block;
margin-left: 12px;
text-transform: lowercase;
cursor: pointer;
white-space: nowrap;
background: ${props => props.theme.color.secondary};
border-radius: 4px;
padding: 0px 40px;
border-width: 0px;
border-style: initial;
border-color: initial;
border-image: initial;
outline: 0px;
&:hover {
  box-shadow: rgba(110, 120, 152, 0.22) 0px 2px 10px 0px;
}
@media (max-width: ${props => props.theme.screen.md}) {
}
@media (max-width: ${props => props.theme.screen.sm}) {
  margin-left: 0;
}
`
const ImageWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: self-start;
padding-bottom: 16px;
@media (max-width: ${props => props.theme.screen.md}) {
  justify-self: center;
  display:none
}
`

const StyledImage = styled(Img)`
width: 220px;
@media (max-width: ${props => props.theme.screen.md}) {
  width: 180px;
}
@media (max-width: ${props => props.theme.screen.sm}) {
  width: 100px;
  display: none;
}
`

export default Header

