import Form from "./components/form";
import SingleRec from "./components/singleRec";
import { useState } from "react";

function App() {
  // To auto Update the table content when a new record is entered
  const [isUpdate, setIsUpdate] = useState("");
  function handleUpdate(data) {
    setIsUpdate(data);
  }

  return (
    <div>
      {/* Hare Krishn!!! */}
      <Form DataUpdate={handleUpdate}></Form>
      <SingleRec updated={isUpdate}></SingleRec>
    </div>
  );
}

export default App;
