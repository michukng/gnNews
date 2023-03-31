import { useStoreState, useStoreActions } from "easy-peasy";

const Footer = () => {
    const time = useStoreState((state) => state.time);
    const setTime = useStoreActions((actions) => actions.setTime);
    const countriesNews = useStoreState((state) => state.countriesNews);
    
    const currentTime = () => {
        return new Date().toLocaleTimeString()
    }

    const Timer = () => {
        setInterval(() => {setTime(currentTime())}, 1000)
    }

    Timer();

    return (
        <footer>
            {countriesNews.articles?.length > 0 ? <p>{countriesNews.articles.length} wiadomości na stronie</p> : <p>Brak wiadomości!</p>}
            <p>{time}</p>          
        </footer>
    )
};

export default Footer;