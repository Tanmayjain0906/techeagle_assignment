import Todo from "./component/Todo"
import Signup from "./component/Form/Singup"
import Login from "./component/Form/Login"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </div>
  )
}

export default App
