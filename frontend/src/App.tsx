import Login from "./components/Login/Login"

const App = () => {
  return (
    <div>

      <h1 
      style={{
        top:"100px",
      margin:"50px"
    }}
      >Implementing Google OAuth in MERN</h1>
    <div style={{
      margin:"100px"
    }}>

    <Login />

      </div>
    </div>
  )
}

export default App