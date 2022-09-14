import { useEffect, useState } from "react";
import FriendCard from "./Components/FriendCard";

export default function App() {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // const [search, setSearch] = useState('');

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}users`)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setFriends(data);
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
        console.log(err);
      });
  }, []);
  // when a button is clicked, it deltets the friend from the list
  const deleteFriend = (id) => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}delete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFriends(friends.filter((friend) => friend.id !== id));
      });
      console.log(`${id} : "deleted"`)

  };
  // when a button is clicked, it adds a friend to the list
  const addFriend = (friend) => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}save`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(friend),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFriends([...friends, data]);
      }
      );
  };

  // when a button is clicked, it updates the friend in the list
  // const updateFriend = (friend) => {
  //   fetch(`${process.env.REACT_APP_BACKEND_URL}users/${friend.id}`, {
  //     method: "PUT",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(friend),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setFriends(
  //         friends.map((friend) => (friend.id === data.id ? data : friend))
  //       );
  //     });
  // };

  return (
    <>
      <ul>
        <p>Friends</p>
        {loading ? <h1>Loading...</h1> : null}
        {error ? <h1>Error</h1> : null}
        {friends.map((friend) => (
          <>
            <FriendCard key={friend.id} data={friend} />
            <button key={"B1"+ friend.id} onClick={() => deleteFriend(friend.id)}>Delete</button>
          </>
        ))}
      </ul>
      <button
        onClick={() => addFriend({
          first_name: "Cam",
          last_name: "T",
          bio: "Youre a nerd",
        })}
      >
        {" "}
        Add Clone
      </button>
      {/* Maps API */}
      <p>{process.env.REACT_APP_BACKEND_URL}</p>
    </>
  );
}
