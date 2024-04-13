import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// 引入variables
import WebApp from '@twa-dev/sdk'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// 导入路由组件
import Root from '@/components/root.tsx'
// 导入错误组件
import ErrorPage from '@/components/error-page/error'

// 导入 test1 组件
import Test1 from '@/components/testRouter/test1.tsx'
import Test2 from '@/components/testRouter/test2.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'test1',
        element: <Test1 />,
      },
      {
        path: 'test2',
        element: <Test2 />,
      }
    ]
  }
])
WebApp.ready();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
