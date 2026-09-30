import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import { useEffect } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { Seo } from "./components/Seo";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Cases from "./pages/Cases";
import Contact from "./pages/Contact";
import Dag from "./pages/Dag";
import CaseRenke from "./pages/CaseRenke";
import Diagnostico from "./pages/Diagnostico";
import Privacidade from "./pages/Privacidade";
import Produtos from "./pages/Produtos";
import ProdutoLancamentos from "./pages/ProdutoLancamentos";

/** Navegação client-side não reposiciona o scroll sozinha. */
function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [location]);
  return null;
}

function Router() {
  return (
    <>
      <Seo />
      <ScrollToTop />
      <a href="#conteudo" className="skip-link">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/dag" component={Dag} />
          <Route path="/servicos" component={Services} />
          <Route path="/produtos" component={Produtos} />
          <Route path="/produtos/assistente-de-lancamentos" component={ProdutoLancamentos} />
          <Route path="/sobre" component={About} />
          <Route path="/cases" component={Cases} />
          <Route path="/cases/crm-renke" component={CaseRenke} />
          <Route path="/diagnostico" component={Diagnostico} />
          <Route path="/contato" component={Contact} />
          <Route path="/privacidade" component={Privacidade} />
          <Route path="/404" component={NotFound} />
          {/* Final fallback route */}
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <div className="flex flex-col min-h-screen">
          <Router />
        </div>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
