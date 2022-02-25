import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from '../../assets/styles/global';
import defaultTheme from '../../assets/styles/themes/default';

import Header from '../Header';
import PageRoutes from '../../Routes';

import { Container } from './styles';
import UpButton from '../UpButton';

export default function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />

        <Container>
          <UpButton />
          <Header />
          <PageRoutes />
        </Container>

      </ThemeProvider>
    </BrowserRouter>
  );
}
