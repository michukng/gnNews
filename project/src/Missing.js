import { Link } from "react-router-dom";
import Aside from "./Aside";

const Missing = () => {
    return (
        <div className="main-container">
            <Aside />
            <main>            
                <p className="loadingMsg">
                    Strona nie została znaleziona.
                    <Link to='/'>
                        Wróć na stronę główną.
                    </Link>
                </p>
            </main>
        </div>
    )
}

export default Missing;