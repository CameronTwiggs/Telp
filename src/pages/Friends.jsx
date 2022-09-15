import { useEffect, useState } from "react";
import FriendCard from "../Components/FriendCard";




export default function Friends() {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);



  const deleteFriend = (id) => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}delete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFriends(friends.filter((friend) => friend.id !== id));
      });
    console.log(`${id} : "deleted"`);
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
      });
  };

  const generateRandomFriend = () => {
    const names = ["John", "Jane", "Bob", "Sally", "Joe", "Mary", "Tom", "Sue", "Bill", "Sara", "Jim", "Sarah", "Mike", "Linda", "Steve", "Donna", "Greg", "Carol", "Jeff", "Ruth", "Mark", "Patricia", "Paul", "Barbara", "George", "Jennifer", "Kevin", "Elizabeth", "Ronald", "Maria", "Tim", "Susan", "Kenneth", "Margaret", "Brian", "Dorothy", "Anthony", "Lisa", "Jason", "Nancy", "Jose", "Karen", "Charles", "Betty", "Scott", "Helen", "Eric", "Sandra", "Frank", "Ashley", "Stephen", "Donna", "Andrew", "Kimberly", "Raymond", "Carolyn", "Gregory", "Michelle", "Joshua", "Emily", "Jerry", "Amanda", "Dennis", "Melissa", "Walter", "Deborah", "Patrick", "Stephanie", "Peter", "Rebecca", "Harold", "Laura", "Douglas", "Sharon", "Henry", "Cynthia", "Carl", "Kathleen", "Arthur", "Amy", "Ryan", "Shirley", "Roger", "Angela", "Joe", "Anna", "Juan", "Ruth", "Jack", "Brenda", "Albert", "Pamela", "Jonathan", "Nicole", "Justin", "Katherine", "Terry", "Samantha", "Gerald", "Christine", "Keith", "Catherine", "Samuel", "Virginia", "Willie", "Debra", "Roy", "Rachel", "Eugene", "Janet", "Billy", "Emma", "Bruce", "Carolyn", "Albert", "Maria", "Willie", "Heather", "Gabriel", "Diane", "Alan", "Julie", "Louis", "Joyce", "Harry", "Evelyn", "Wayne", "Joan", "Ralph", "Victoria", "Roy", "Kelly", "Ethan", "Christina", "Bobby", "Lauren", "Dylan", "Martha", "Johnny", "Judith", "Phillip", "Cheryl", "Jordan", "Megan", "Bryan", "Andrea", "Harry", "Olivia", "Roy",];
    const bio = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

     return {
      first_name: names[Math.floor(Math.random() * names.length)],
      last_name: names[Math.floor(Math.random() * names.length)],
      bio: bio,
    }
  };

  const updateFriend = (friend) => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}users/${friend.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(friend),
    })
      .then((res) => res.json())
      .then((data) => {
        setFriends(
          friends.map((friend) => (friend.id === data.id ? data : friend))
        );
      });
  };
  


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



    return (
        <>
          <h2 className="title">Friends.</h2>
          <button onClick={() => addFriend(generateRandomFriend())}> Add Random Friend </button>
          <ul className="friendlist">
            {loading ? <h1>Loading...</h1> : null}
            {error ? <h1>Error</h1> : null}
            {friends.map((friend, index) => (
              <li className="friend">
                {/* Techincally the div className="friendContainer" */}
                <FriendCard key={friend.id} data={friend}  /> 
                <button className="button-28 friend_button--delete" key={index} onClick={() => deleteFriend(friend.id)}>Delete</button>
              </li>
            ))}
          </ul>
        </>
    )
}