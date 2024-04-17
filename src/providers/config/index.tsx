import { FC, createContext, ReactElement, useState, useEffect } from "react";
import { getHomeConfig } from "@/apis/index";

type ConfigContextState = {
  appName: string;
};

const contextDefaultValues: ConfigContextState = {
  appName: "Lottery",
};

const ConfigContext = createContext<ConfigContextState>(contextDefaultValues);

type ProviderPorps = {
  children: ReactElement;
};

const ConfigProvider: FC<ProviderPorps> = (props) => {
  const [config, setConfig] = useState(contextDefaultValues);

  useEffect(() => {
    getHomeConfig().then((res) => {
      console.log(res);
      // setConfig(res);
    });
  }, []);

  return (
    <ConfigContext.Provider value={config}>
      {props.children}
    </ConfigContext.Provider>
  );
};

export default ConfigProvider;
