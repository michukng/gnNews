import { useStoreState } from "easy-peasy";
import { Link } from 'react-router-dom'

const Aside = () => {
  const countries = useStoreState((state) => state.countries);

  return (
    <aside>
      <p>
          Wybierz Państwo
      </p>
      <ul className="ul-aside">
          {countries.map((country) => 
          <li
              key={country.id}>
                  <Link to={`/country/${country.name}`}>
                      <button className="aside-btn">{country.name}</button>
                  </Link>
              </li>
          )}              
      </ul>
    </aside>
  )
}

export default Aside
