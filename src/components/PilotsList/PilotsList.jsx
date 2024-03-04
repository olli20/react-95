import './PilotsList.css'
import Pilot from "../Pilot/Pilot";

const PilotsList = ({ pilots }) => {
    return (
        <ul className="list">
            {pilots.map((item) => (<li key={item.id}>
                <Pilot {...item} />
            </li>))}
        </ul>
        
    );
}

export default PilotsList;