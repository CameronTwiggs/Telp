
export default function FriendCard(data) {
    return (
        <div className="card">
            <p>{data.first_name}</p>
            <p>{data.last_name}</p>
            <p>{data.bio}</p>
        </div>
    )
}