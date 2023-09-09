import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import WriterProfile from '../../components/WriterProfile/WriterProfile';
import { useLocation } from 'react-router-dom';
import { getAllStoryTrees , getAllStoryBranches } from '../../services/storyService';



function WriterProfilePage() {
  const location = useLocation();
    const writerData = location.state?.writerData;
    const [branches, setBranches] = useState([]);
    const [stories, setStories] = useState([]);

    const { username } = useParams();

    useEffect(() => {
      getAllStoryTrees()
          .then(response => {
              setStories(response.data.filter(story => story.content && story.content.some(c => c.user_id === writerData.id)));
          })
          .catch(error => {
              console.error("Error fetching stories: ", error);
          });
  }, [writerData]);

  useEffect(() => {
    getAllStoryBranches()
        .then(response => {
            setBranches(response.data);
        })
        .catch(error => {
            console.error("Error fetching branches: ", error);
        });
}, []);


    return (
      <div className='site'>
      <Header />
      <section className='site__content'>

            <WriterProfile writerData={writerData} />
            </section>
            <Footer />
        </div>
    );
}

export default WriterProfilePage;
