import Layout from './components/layout/layout';
import './styles/App.scss';

function App() {
  const body = document.body;
  body.setAttribute('class', 'dogs');
  return (
    <Layout></Layout>
  );
}

export default App;
