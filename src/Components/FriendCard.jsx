function urlify(name) {
    let plused = name.replace(/ /g, '+');
    return `https://ui-avatars.com/api/?name=${plused}&background=random`;
}

export default function FriendCard(props) {
    const name = `${props.data.first_name} ${props.data.last_name}`;

    return (
        <div className="friendContainer">
            <img className = "friendContainer__image" src={urlify(name)} />
            <div className="friendContainer__content">
                <h3 className="friend__name">{props.data.first_name} {props.data.last_name}</h3>
                <p className="friend__bio">{props.data.bio}</p>
            </div>
        </div>
    )


}