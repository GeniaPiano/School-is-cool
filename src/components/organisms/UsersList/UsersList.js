import React from 'react';
import UsersListItem from  'components/molecules/UsersListItem/UsersListItem';
import {StyledList} from "./UsersList.styles";
import {Title} from "../../atoms/Title/Title";


const UsersList = ({users}) => {
        return (
        <>

            <Title>Students List</Title>
            <StyledList>
                {users.map((userData) => (
                    <UsersListItem key={userData.name} userData={userData}/>
                ))}
            </StyledList>

        </>
    )
}














        // mockApi(users, 2000)
        //     .then(data => {
        //         this.setState({isLoading: false})
        //         this.setState({users: data})
        //     })
        //     .catch(err => console.log(err))








export default UsersList;
