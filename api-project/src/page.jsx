import './page.css';
import Header from './components/Header';
import footer from './components/footer';
function Page({children}) {
  return (
    <>
    <body style={{position: 'relative',minHeight: '95vh'}}>
      <Header />
      {children}
      <footer/>
    </body>
    </>
  );
}

export default Page;
