import Pilot from "./Pilot";

const PilotsList = ({ pilots }) => {
    return (
        <ul>
            {pilots.map((item) => (<li key={item.id}>
                <Pilot {...item} />
            </li>))}
        </ul>
        
    );
}

export default PilotsList;