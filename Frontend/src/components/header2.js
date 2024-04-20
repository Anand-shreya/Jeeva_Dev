import styled, { css } from "styled-components";

const HeadWrapper = styled.div`
color: #000;
text-align: center;
font-family: "Poppins", sans-serif;
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: 110.5%; /* 66.3px */
border-radius: 15px;
background: #E86838;
height:70px;
width:500px;
margin-bottom:10px;
color:#F6DADA;
`;

function Header2() {
  return (
    <HeadWrapper>
      <h1>My Recordbook</h1>
    </HeadWrapper>
  );
}

export default Header2;
