import Header from '../components/header';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className="container">
      <Header />
      <div className='content'>
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyApp
