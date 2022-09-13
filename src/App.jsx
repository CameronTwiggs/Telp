import {useEffect, useState} from 'react';
import FriendCard from './Components/FriendCard';

export default function App() {
    // const [friends, setFriends] = useState([]);
    // const [search, setSearch] = useState('');
    const [filteredFriends, setFilteredFriends] = useState([]);

    useEffect(() => {
        fetch('https://telp-backend.herokuapp.com/users')
            .then(res => res.json())
            .then(data => {
                // setFriends(data.results);
                setFilteredFriends(data.results);
            })
    }, []);

  return (
    <>  
      {filteredFriends.map(friend => (
        <FriendCard key={friend.id} data={friend} />
      ))}
    </>
    );
}

