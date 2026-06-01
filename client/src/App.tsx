import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Applications from "./pages/Applications";
import Capabilities from "./pages/Capabilities";
import Company from "./pages/Company";
import Contact from "./pages/Contact";


function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/products"} component={Products} />
      <Route path={"/applications"} component={Applications} />
      <Route path={"/capabilities"} component={Capabilities} />
      <Route path={"/company"} component={Company} />
      <Route path={"/contact"} component={Contact} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// 设计哲学：新野兽派工业主义（Neo-Brutalist Industrialism）。
// 应用层使用深色主题承载机械蓝、安全橙和钢铁材质，确保首页的注塑机工业品牌表达保持一致。

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <Router />
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
