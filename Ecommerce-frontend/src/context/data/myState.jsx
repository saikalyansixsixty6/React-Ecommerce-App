import myContext from "./myContext";


function MyState(props) {
 const state = {
    name:"kalyan",
    rollno:24

 }


  return (
    <div>
      <myContext.Provider value={state}>
        {props.children}
      </myContext.Provider>
    </div>
  )
}

export default MyState
