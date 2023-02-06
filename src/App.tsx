import './App.css'
import { Routes, Route } from 'react-router-dom'
import Signup from 'pages/Signup'
import Signin from 'pages/Signin'
import Todo from 'pages/Todo'
import NvaigationBar from 'components/gnb/NvaigationBar'
import setNoConsole from 'utils/noConsole'

function App() {
  // 상용에서 error 이외의 로그를 남기지 않게 함
  setNoConsole()

  return (
    <div className="App">
      <NvaigationBar />
      <Routes>
        {/* TODO : / 경로로 온 경우엔 어디로 이동시킬까?? /todo 를 기본 경로로 하는 방법은 없을까? */}
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/todo" element={<Todo />}></Route>
      </Routes>
    </div>
  )
}

export default App
