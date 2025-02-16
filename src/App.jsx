import { use, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import './index.css'

const StyledH1 = styled.h1`
  color: red; // 確認用
  /* ここに追加したいCSSを記述する */
`;


function App() {
  // const [count, setCount] = useState(0)

const [incompleteTodos, setIncompleteTodos] = useState ([
  "TODOです1",
  "TODOです2"
]);
  return (
    <>
    <div className="input-area">
      <input id="add-text" placeholder="TODOを入力" />
      <button id="add-button">追加</button>
    </div>
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul id="incomplete-list">
      {incompleteTodos.map((todo) => {
        return (
        <li key={todo}>
          <div className="list-row">
            <p className="todo-item">{todo}</p>
            <button>完了</button>
            <button>削除</button>
          </div>
        </li> 
        )
      })}

        
      </ul>
    </div>
    <div className="complete-area">
      <p className="title">完了したTODO</p>
      <ul id="complete-list">
        <li>
          <div className="list-row">
            <p className="todo-item">TODOでした</p>
            <button>戻す</button>
          </div>
        </li> 
        <li>
          <div className="list-row">
            <p className="todo-item">TODOでした</p>
            <button>戻す</button>
          </div>
        </li> 
      </ul>
    </div>
    </>
  )
}

export default App
