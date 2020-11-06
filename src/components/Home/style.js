import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const AllPageMain = styled.div`
display:flex;
flex-direction:column;
justify-content:space-between;
height:100vh;
left: 0;
position: absolute;
background-color: #FFFCFB;
right: 0;
`

export const FullPage = styled.main`
width: 100vw;
height:100%;
background: #FFFFFF;
display:flex;
justify-content :center;
align-items: center;
flex-direction: row;
justify-content: space-around;
@media (max-width: 750px) { 
  flex-direction:column-reverse;
  margin-top: 7vh;
}
`
export const FlexBox = styled.section`
display:flex;
flex-direction:row;
justify-content:center;
width:100%;
@media (max-width: 750px) { 
  flex-direction:column-reverse;
}
`
export const TwoSidersBox = styled.div`
justify-content:center;
align-items:center;
display:flex;
width:50%;
@media (max-width: 750px) { 
  width: 100%;
  padding:30px 0;
}
`


export const TextBox = styled(TwoSidersBox)`
font-family:Roboto;
height:fit-content;
display: flex;
align-self:center;
align-items:flex-start;
flex-direction: column;
  @media (max-width: 750px) { 
align-items:center;
}
`

export const Title = styled.h1`
font-size:70px;
padding:0 20px;
color:#104687;
margin:0;
@media (max-width: 750px) { 
  font-size:60px;  
}
`

export const Text = styled.p`
font-size: 17px;
padding:0 20px;
color: #000000;
margin:0;
@media (max-width: 750px) { 
  font-size:15px;  
}
`

export const ButtonLink = styled(Link)`
font-family: Montserrat;
background-color:#1D4F4F;
padding:10px 20px;
font-weight:bold;
color:#ffffff;
font-size: 15px;
margin: 20px;
text-transform:uppercase;
text-decoration:none;
width:fit-content;
border-radius: 3px;
`

export const Image = styled.img`
height:40vh;
overflow: hidden;
`