import Form from "./components/form";
import SingleRec from "./components/singleRec";
import { useState } from "react";

function App() {
  const[isUpdate, setIsUpdate] = useState("");
  function handleUpdate(data){
  setIsUpdate(data);
  };

  return (
    <div>
     {/* Hare Krishn!!! */}
     <Form DateUpdate = {handleUpdate}></Form>
     <SingleRec updated = {isUpdate}></SingleRec>
    </div>
  );
}

export default App;
