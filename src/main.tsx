import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "lib-flexible/flexible";
// 引入variables
import WebApp from "@twa-dev/sdk";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import RouteList from "@/routes";
import Layout from "@/layout";

WebApp.ready();
ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Layout>
      <Routes>
        {RouteList.map((item) => (
          <Route key={item.path} path={item.path} element={item.element} />
        ))}
      </Routes>
    </Layout>
  </BrowserRouter>
);
