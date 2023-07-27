import './App.css'
import axios from "axios";
import {useEffect, useState} from "react";

/*
axios({
  method: 'get',
  url: 'https://reqres.in/api/users?page=2'
}).then(function (response) {
  console.log("GET RESPONSE");
  console.log("Response status", response.status);
  console.log("Response body", response.data);
});

type User = {
    createdAt: string;
    id: string;
    job: string;
    name: string;
}

axios({
    method: 'post',
    url: 'https://reqres.in/api/users',
    data: {
        name: "morpheus",
        job: "leader"
    }
}).then(function (response) {
    console.log("POST");
    console.log("Response status", response.status);
    console.log("Response body", response.data);

    const data = response.data as User;
    console.log("data as User", data);
});

axios({
    method: 'put',
    url: 'https://reqres.in/api/users/2',
    data: {
        name: "morpheus",
        job: "zion resident"
    }
}).then(function (response) {
    console.log("PUT");
    console.log("Response status", response.status);
    console.log("Response body", response.data);

    const data = response.data as User;
    console.log("data as User", data);
});

axios({
    method: 'delete',
    url: 'https://reqres.in/api/users/2'
}).then(function (response) {
    console.log("DELETE");
    console.log("Response status", response.status);
    console.log("Response body", response.data);
});
 */

type User = {
    id: number;
    name: string;
    image: string;
}

function App() {
    const [users, setUsers] = useState<undefined|User[]>(undefined);

    useEffect(() => {
        axios({
            method: 'get',
            url: 'https://rickandmortyapi.com/api/character'
        }).then(function (response) {
            console.log("Response status", response.status);
            console.log("Response body", response.data); // Response body
            setUsers(response.data.results);
        });
    }, []);

    return (users === undefined ? <div>Loading</div> : (
        <ul>
            {users.map(user => <li key={user.id}><img src={user.image}/> {user.name}</li>)}
        </ul>
    ));
}

export default App
