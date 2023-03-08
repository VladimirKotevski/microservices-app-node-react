
import 'bootstrap/dist/css/bootstrap.css';
import buildClient from '../api/build-client';
import Header from '../components/header';

const AppComponent = ({ Component, pageProps, currentAdminUser }) => {
  return (
    <div>
      <Header currentAdminUser={currentAdminUser} />
      <div className='container'>
      <Component currentAdminUser={currentAdminUser} {...pageProps} />
      </div>
    </div>
  );
};

AppComponent.getInitialProps = async appContext => {
  const client = buildClient(appContext.ctx);
  const { data } = await client.get('/api/users/currentuser', { withCredentials: true });

  let pageProps = {};
  if (appContext.Component.getInitialProps) {
    pageProps = await appContext.Component.getInitialProps(appContext.ctx, client, data.currentAdminUser);
  }

  return {
    pageProps,
    ...data
  };
};

export default AppComponent;