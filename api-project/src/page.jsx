import './page.css';
import Header from './components/Header';
import footer from './components/footer';

function Page({ children }) {
  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      
      <Header />
      <img   style={{ width: "30%", height: "auto", display: "block", margin: "auto" }} src="/logo.png" alt="Logo" />
      {children}
      <footer style={{ background: "#333", color: "#fff", textAlign: "center",marginTop:"5px",position: "absolute",
        bottom: 0,
        width: "100%",
        height: "40px",}}>
           2024 M.Bruni. Todos los derechos reservados.
        </footer>
    </div>
  );
}

export default Page;
