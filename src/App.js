import About from "./About";

export function Introduction(){
  return <h2>What is React?</h2>;
  
} 




function App(){
  return(
    <div>
      <h1>Introduction to ReactJs</h1>
      <Introduction/>
      <About/>
    </div>
  )

}

export default App;
