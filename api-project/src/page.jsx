import './page.css';
import Header from './components/Header';
import footer from './components/footer';

function Page({ children }) {
  return (
    <div style={{ position: 'relative', minHeight: '95vh' }}>
      <Header />
      {children}
      <footer style={{ background: "#333", color: "#fff", padding: "1rem", textAlign: "center" }}>
          © 2024 M.Bruni. Todos los derechos reservados.
        </footer>
    </div>
  );
}

export default Page;
