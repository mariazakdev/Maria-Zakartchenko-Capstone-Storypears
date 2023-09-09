import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import StoryReader from '../../components/StoryReader/StoryReader';
import { useLocation } from 'react-router-dom';
import userService from '../../services/userService'; 

function StoryPage() {
    const location = useLocation();
    const storyData = location.state?.story || {};
    
 console.log(storyData);
    const [users, setUsers] = useState([]);
    console.log(location.state?.test);
    // Getting users 
    useEffect(() => {
        async function fetchUsers() {
            try {
                const usersData = await userService.getUsers(); 
                setUsers(usersData);
            } catch (error) {
                console.error("Failed to fetch users:", error);
            }
        }

        fetchUsers();
    }, []);
   

return(  
        <div>
            <Header />
            <h1>STORY PAGE</h1>
            <StoryReader storyData={storyData} users={users} />
            <Footer />
        </div>
    );
}

export default StoryPage;
