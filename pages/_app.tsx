// pages/_app.tsx

import type { AppProps } from 'next/app'
import '../styles/globals.css'
import { Provider } from 'react-redux'
import { store } from '../redux/store'
import { AuthProvider } from '../context/AuthContext'; // Import your AuthProvider
import 'react-toastify/dist/ReactToastify.css';


const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </Provider>
  )
}

export default MyApp;
