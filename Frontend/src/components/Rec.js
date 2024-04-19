const Rec = (props) => {
  return (
    <div>
      <div>
      {(
        <audio controls>
          <source src={`data:audio/mpeg;base64,${props.audio}`} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      )}
      {props.Dname}
      {props.Pname}
      {props.Age}
      {props.Date}
      </div>
    </div>
  );
};

export default Rec;

