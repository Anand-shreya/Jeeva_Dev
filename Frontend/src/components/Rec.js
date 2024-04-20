import styled from "styled-components";

const RecWrap = styled.div`
  // color: #000;
  // font-family: "Poppins", sans-serif;
  // font-size: 20px;
  // font-style: normal;
  // font-weight: 400;
  // line-height: normal;
  
  display:flex;

`;

const PatientWrap = styled.div`
width: 200px;
height: 150px;
flex-shrink: 0;
background: #E86838;
border-radius:35px  0px 0px 35px ;
display:flex;
flex-direction:column;
justify-content:center;
// border:2px solid green;

color: #F6DADA;
text-align: center;
font-family: "Poppins", sans-serif;;
font-size: 25px;
font-style: normal;
font-weight: 400;
line-height: normal;
`;
const DocWrap = styled.div`
  border:1px solid #919296;
  padding:  20px 30px;
  border-radius:0px  35px 35px 0px ;
`;
const Date = styled.div`
color: #919296;
font-family: Poppins;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: normal;
`;
const DocName = styled.div`
color: #393939;
// text-align: center;
font-family: Poppins;
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: normal;
`;
const Audio = styled.audio`
height:45px;
margin:5px 0px  5px 0px;
`;


const Rec = (props) => {
  return (
    <RecWrap>
      {/* <div>
      {(
        <audio controls>
          <source src={`data:audio/mpeg;base64,${props.audio}`} type="audio/mpeg" />
        </audio>
      )}
      {props.Dname}
      {props.Pname}
      {props.Age}
      {props.Date}
      </div> */}
            
            <PatientWrap>
            <div> {props.Pname}
             </div>
            
             <div>{props.Age}
            </div>
            </PatientWrap>
            <DocWrap>
             
             <Date>{props.Date.substr(0,10)}
             </Date>
             {props.audio && (
              <Audio controls>
                <source src={`data:audio/mpeg;base64,${props.audio}`} type="audio/mpeg" />
              </Audio>
            )}
            <DocName>{props.Dname}
            </DocName>
            </DocWrap>
    </RecWrap>
  );
};

export default Rec;

