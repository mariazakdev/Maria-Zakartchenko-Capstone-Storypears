import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import StoryReader from '../../components/StoryReader/StoryReader';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

function StoryPage() {
    const location = useLocation();
    const storyId = location.pathname.split('/').pop();
    const [storyData, setStoryData] = useState(null);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const storyResponse = await axios.get(`http://localhost:8080/fullstories/${storyId}`);
                const usersResponse = await axios.get('http://localhost:8080/users'); 

                setStoryData(storyResponse.data);
                setUsers(usersResponse.data);
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        }

        fetchData();
    }, [storyId]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error fetching data: {error.message}</div>;

    return (
        <div>
            <Header />
            <h1>STORY PAGE</h1>
            <StoryReader storyData={storyData} users={users} />
            <Footer />
        </div>
    );
}

export default StoryPage;
