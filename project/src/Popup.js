import { useStoreActions, useStoreState } from "easy-peasy"

const Popup = () => {
    const trigger = useStoreState((state) => state.trigger);
    const setTrigger = useStoreActions((actions) => actions.setTrigger);
    
    const handleClosePopUp = () => {
        if (trigger) {
            setTrigger(false);
        };
    };

    if (!trigger) return;

  return (
    <div className="popup-container">
        <div className="popup">
            <p>Dzień dobry! Na początku chciałbym podziękować za zaproszenie do drugiego etapu, mimo, że nie udało mi się napisać projektu zgodnie ze wszystkim punktami, które były zawarte w opisie zadania to uważam, że ten projekt w pewnym stopniu dał mi się rozwinąć. Największą trudność miałem z Reduxem, na etapie mojej nauki jeszcze nie doszedłem do Reduxa, jednak w tutorialu, który obecnie oglądam, były pokazane zagadnienia z Easy Peasy, więc postanowiłem to wykorzystać. Przeszkodą dla mnie były również popupy z wiadomościami, dlatego postanowiłem rozwiązać ten problem poprzez LINK. Duży problem mam jeszcze z responsywnością strony, dlatego tutaj też jej nie użyłem. Największą frajdę sprawiło mi API, poniewaz pierwszy raz je użyłem w projekcie. Dodatkowo fajnie było się dowiedzieć jak zrobić Popup.</p>
            <button onClick={handleClosePopUp}>Zamknij</button>
        </div>      
    </div>
  )
}

export default Popup