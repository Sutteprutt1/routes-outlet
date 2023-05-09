import AppRouter from './App/AppRouter/AppRouter';
import Footer from './Components/Partials/Footer';
import Header from './Components/Partials/Header';
import { useFetch } from './Hooks/fetch';
import ProductsTest from './ProductsTest';

function App() {
  const url = "https://dummyjson.com/products"
  const { apiData, loading, error } = useFetch(url, "products");
  console.log(apiData);

  //Tjekker om det er færdig med at load
  if(loading) {
    return <div>Loading...</div>
  }

  //Tjekker om der er nogle errors
  if(error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <>
    <Header />
    <ProductsTest items={apiData} />
    <AppRouter />
    <Footer />
    </>
  );
}

export default App;
