import styled from "styled-components";
import Logo from "../images/Logo.png";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Belanosima&family=Foldit:wght@300;400;500&family=Lato:wght@400;700&family=Narnoor&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:wght@400;500;700&display=swap');
</style>;
const HeadWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
const Image = styled.img`
  width: 150px;
`;
const H1 = styled.h1`
  color: #000;
  font-family: "Poppins", sans-serif;
  font-size: 60px;
  font-style: normal;
  font-weight: 700;
  line-height: 110.5%; /* 66.3px */
`;
function Header1() {
  return (
    <HeadWrapper>
      <Image src={Logo} alt="Jeeva AI" />
      <H1>Medical Data Bank</H1>
    </HeadWrapper>
  );
}

export default Header1;
