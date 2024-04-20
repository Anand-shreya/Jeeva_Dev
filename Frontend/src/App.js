import Form from "./components/form";
import SingleRec from "./components/singleRec";
import Header1 from "./components/header1";
import Header2 from "./components/header2";
import { useState } from "react";
import styled, { css } from "styled-components";

<style>
@import url('https://fonts.googleapis.com/css2?family=Belanosima&family=Foldit:wght@300;400;500&family=Lato:wght@400;700&family=Narnoor&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:wght@400;500;700&display=swap');
</style>

const MainWrapper = styled.div`
  // border:2px solid red;
  display:flex;
  flex-direction:row;
  // align-item:center;
  justify-content:space-between;
  padding 3px;
  margin:4px;
 

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;
const SubWrapper = styled.div`
  // border:1px solid brown;
  display:flex;
  flex-direction:column;
  align-items:center;
`;

const SubWrapper2 = styled.div`
  // border:1px solid brown;
  margin-top:30px;
  margin-right:30px;
  display:flex;
  flex-direction:column;
  align-items:center;
`;
function App() {
  // To auto Update the table content when a new record is entered
  const [isUpdate, setIsUpdate] = useState("");
  function handleUpdate(data) {
    setIsUpdate(data);
  }

  return (
    <MainWrapper>
      {/* Hare Krishn!!! */}
    <SubWrapper>
      <Header1></Header1>
      <Form DataUpdate={handleUpdate}></Form>
      </SubWrapper>
      <SubWrapper2>
      <Header2></Header2>
      <SingleRec updated={isUpdate}></SingleRec>
      </SubWrapper2>
    </MainWrapper>
  );
}

export default App;
