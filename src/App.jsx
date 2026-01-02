import { useState } from "react";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      {/* <div className="container max-w-4xl mx-auto my-5 px-5 rounded-xl p-4 bg-violet-100">
        <h1 className="text-xl font-bold">Your Todos</h1>
      </div> */}
      <div className="mx-10">
        <div className="container  mx-auto my-5 px-5 rounded-xl p-4 bg-violet-100 min-h-[80vh]">
          <div className="addTodos">
            <h2 className="text-lg font-bold">Add a Todo</h2>
            <input type="text" className="border rounded px-2 py-1 mr-2 w-1/2"/>
            <button className="bg-purple-500  hover:bg-purple-800 text-sm font-bold text-white px-3 py-1 rounded">Add</button>
          </div>
          <h2 className="text-xl font-bold">Your Todos</h2>
        <div className="todos">
          <div className="todo flex justify-between">
            <div className="text">Lorem ipsum dolor sit amet consectetur adipisicing.</div>
            <div className="buttons flex gap-3">
              <button  className="bg-purple-500 hover:bg-purple-800 text-sm font-bold text-white px-2 py-1 rounded">Edit</button>
              <button  className="bg-purple-500 hover:bg-purple-800 text-sm font-bold text-white px-2 py-1 rounded">Delete</button>
            </div>
            
          </div>
        </div>
        </div>
      </div>
    </>
  );
}

export default App;
