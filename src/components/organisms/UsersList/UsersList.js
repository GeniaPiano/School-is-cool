import React, {useState, useEffect} from 'react';
import {users as usersData} from 'data/users';
import UsersListItem from  'components/molecules/UsersListItem/UsersListItem';
import {Wrapper, StyledList, Title} from "./UsersList.styles";


const mockApi = () => {
    return new Promise((resolve, reject) => {
        setTimeout (() => {
            if (usersData) {
                resolve([...usersData]);
            } else {
                reject({message: 'Error'})
            }
        }, 1000)
    })
}


const UsersList = () => {
    const [ users, setUsers ] = useState([]);
    const [isLoading, setLoadingState] = useState([]);

    useEffect(()=> {

        setLoadingState(true);
        mockApi()
            .then(data => {
                setLoadingState(false)
                setUsers(data)
            })
            .catch(err => console.log(err));
        // return () => {
        //     window.removeEventListener('eventName', functionName)
        // } //component will anmount

    }, []);



    const deleteUser = (name) => {
        const filteredUsers = users.filter(user => user.name !== name);
        setUsers(filteredUsers);
    };

      return (
        <Wrapper>
        <Title>{isLoading ? 'Loading...' : 'Users list'}</Title>
        <StyledList>
            {users.map((userData) => (
                <UsersListItem deleteUser={deleteUser} key={userData.name} userData={userData}/>
            ))}
        </StyledList>
    </Wrapper>
    )
}














        // mockApi(users, 2000)
        //     .then(data => {
        //         this.setState({isLoading: false})
        //         this.setState({users: data})
        //     })
        //     .catch(err => console.log(err))








export default UsersList;
