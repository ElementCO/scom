import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "lib-flexible/flexible";
// 引入variables
import WebApp from "@twa-dev/sdk";
import { RouterProvider } from "react-router-dom";
import Router from "@/routes";
import ConfigProvider from "@/providers/config";

const manifestUrl =
  // "https://raw.githubusercontent.com/ton-community/tutorials/main/03-client/test/public/tonconnect-manifest.json";
  "http://scom.karcherfour-t.top/tonconnect-manifest.json";
const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } },
});

// WebApp.ready();
// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <BrowserRouter>
//     <Layout>
//       <React.StrictMode>
//         <Routes>
//           {RouteList.map((item) => (
//             <Route key={item.path} path={item.path} element={item.element} />
//           ))}
//         </Routes>
//       </React.StrictMode>
//     </Layout>
//   </BrowserRouter>
// );
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <TonConnectUIProvider manifestUrl={manifestUrl}>
    <QueryClientProvider client={queryClient}>
      <ConfigProvider>
        <RouterProvider router={Router}></RouterProvider>
      </ConfigProvider>
    </QueryClientProvider>
  </TonConnectUIProvider>
);
