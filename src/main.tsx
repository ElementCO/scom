import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'lib-flexible/flexible';
// 引入variables
import WebApp from '@twa-dev/sdk'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// 导入路由组件
import Root from '@/components/root.tsx'
// 导入错误组件
import ErrorPage from '@/components/error-page/error'

// 导入邀请好友组件
import InviteFriends from '@/components/Invite-friends/Invite-friends.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'InviteFriends',
        element: <InviteFriends />,
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
