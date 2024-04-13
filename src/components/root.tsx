import { Link, useNavigate, Outlet } from 'react-router-dom'
import React, { useState } from 'react'
import WebApp from '@twa-dev/sdk'
import { FC } from "react";
import { Button } from 'react-vant';

import './root.scss'
const Root: FC = () => {
  WebApp.ready();
  const [count, setCount] = useState(0)
  const navigate = useNavigate()
  const toTest = (id: number) => () => {
    navigate(`/test${id}`)
  }
  return (
    <div>
      <Button type='primary'>Primary</Button>
      <Button type='info'>Info</Button>
      <Button type='default'>Default</Button>
      <Button type='warning'>Warning</Button>
      <Button type='danger'>Dangeer</Button>

      <button onClick={() => WebApp.showAlert(`Hello World! Current count is ${count}`)}>
        显示警告
      </button>
      <h1>Hello World <span>你好</span></h1>
      <Link to="/test1">test1页面</Link>
      <br />
      <Link to="/test2">test2页面</Link>
      <br />
      <button onClick={toTest(1)}>test1页面</button>
      <br />
      <button onClick={toTest(2)}>test2页面</button>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  )
}
export default Root;
