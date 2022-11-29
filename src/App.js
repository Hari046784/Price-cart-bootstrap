import React from "react";
import Free from "./free";
import Plus from "./plus";
import Pro from "./pro";

const App = () => {
  return (
    <section class="page py-5"> 
      <div class="container">
        <div class="row pt-4">
        <Free />
        <Plus />
        <Pro />
        </div>
      </div>
    </section>
  );
}
export default App;

