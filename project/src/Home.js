import Aside from "./Aside"
import { useStoreActions, useStoreState } from "easy-peasy";
import { useEffect } from "react";
import api from './api/news'
import { Link } from "react-router-dom";

const Home = () => {
  const isLoading = useStoreState((state) => state.isLoading);
  const setIsLoading = useStoreActions((actions) => actions.setIsLoading);
  const countriesNews = useStoreState((state) => state.countriesNews);
  const setCountriesNews = useStoreActions((actions) =>actions.setCountriesNews);
  const fetchError = useStoreState((state) => state.fetchError);
  const setFetchError = useStoreActions((actions) => actions.setFetchError);

  useEffect(() => {
      const fetchNews = async () => {
        setIsLoading(true);
        try {
          const response = await api.get(`v2/top-headlines?country=pl&apiKey=${process.env.REACT_APP_API_KEY}`)
          setCountriesNews(response.data);
          setFetchError(false)
        } catch (err) {
          setFetchError(true)
          console.log(`Error: ${err.message}`)
        } finally {
          setIsLoading(false)
        }
      }
  
      fetchNews();
    }, [])
console.log(countriesNews)
return (
  <div className="main-container">
      <Aside />
      <main>
          {isLoading && <p className="loadingMsg">Ładowanie wiadomości...</p>}
          {!isLoading && !fetchError && <ul>
              {countriesNews.articles?.map((countryNews, index) => (
                <Link to={countryNews.url}>
                  <li key={index} className="liNews">
                      <button>
                          <div className="source">Źródło: {countryNews.source.name}</div>
                          <div className="title">{countryNews.title}</div>
                          <div className="published">{countryNews.publishedAt}</div>
                      </button>
                  </li>
                  </Link>
              ))}
              </ul>}    
          {!isLoading && fetchError && <p style={{color: "red"}}>Wystąpił błąd!</p>}
      </main>
  </div>
)
}

export default Home
