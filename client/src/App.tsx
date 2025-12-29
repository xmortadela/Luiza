import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";

/**
 * DESIGN PHILOSOPHY: Minimalismo Funcional com Urgência Psicológica
 * - Tema claro para máxima clareza e confiança
 * - Estrutura simples e direta
 * - Foco total em conversão
 */

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/404"} component={NotFound} />
      {/* Fallback para 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      {/* Tema claro otimizado para conversão */}
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
