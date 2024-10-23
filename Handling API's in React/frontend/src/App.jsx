import { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css'

function App() {
  
  // const { products, error, loader } = CustomReactQuery('/api/products');

  
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(true);
  const [search, setSearch] = useState('');
  
  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      try {
        setLoader(true);
        setError(false);
        const response = await axios.get('/api/products?search=' + search, {
          signal: controller.signal
        });
        console.log(response.data);
        setProducts(response.data);
        setLoader(false);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log(`Request Cancelled ${error.message}`);
          return;
        }

        setError(true);
        setLoader(false);
      }
    })();


    // Cleanup method (unmount method)

    return () => {
      controller.abort();
    }

  }, [search]);


  return (
    <>
      <h1>Handling API in frontend</h1>
      <input type="text" placeholder='Search' value={search} onChange={(e) => setSearch(e.target.value)} />
      {loader && <h1>Loading ⏳⏳⏳</h1>}

      {error && <h1>Something Went Wrong❌❌❌</h1>}

      <h2>Number of Products: {products.length}</h2>
    </>
  )
}

export default App;


// const CustomReactQuery = (urlPath) => {
//   const [products, setProducts] = useState([]);
//   const [error, setError] = useState(false);
//   const [loader, setLoader] = useState(true);

//   useEffect(() => {
//     ; (async () => {
//       try {
//         setLoader(true);
//         setError(false);
//         const response = await axios.get(urlPath);
//         console.log(response.data);
//         setProducts(response.data);
//         setLoader(false);
//       } catch (error) {
//         setError(true);
//         setLoader(false);
//       }
//     })();
//   }, []);

//   return { products, error, loader };
// }