

export default function FriendCard(friend) {
    return (
        <li className="card">
            <p>{friend.data.first_name}</p>
            <p>{friend.data.last_name}</p>
            <p>{friend.data.bio}</p>
        </li>
    )
}