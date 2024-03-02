const Pilot = ( {name, email, age, active, avatar} ) => {
    return (
        <>
            <img src={avatar} alt="name" width="180" />
            <h2>{name}</h2>
            <p>age: {age}</p>
            <p>email: {email}</p>
            <p>status: {active ? "Active" : "Retired"}</p>
        </>
    );
}

export default Pilot;