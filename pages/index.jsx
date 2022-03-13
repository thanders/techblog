import React, { useState, useEffect, useContext } from "react";
import PageContainer from '../components/PageContainer/PageContainer';
import reviews from '../static/reviews.json';
import tutorials from '../static/tutorials.json';
import MultiCheckbox from '../components/MultiCheckbox/Multicheckbox';
import RowContainer from '../components/RowContainer/RowContainer';
import { header, postListContainer } from './styles.module.css';
import FilterContext from '../FilterContext';
import CardContainer from '../containers/CardContainer/CardContainer';

const MainPage = (props) => {

  const reviewsObj = JSON.parse(JSON.stringify(reviews));
  const tutorialsObj = JSON.parse(JSON.stringify(tutorials));
  
  const [reviewsToDisplay, setReviewsToDisplay] = useState([]);
  const [tutorialsToDisplay, setTutorialsToDisplay] = useState([]);

  useEffect(() => {
    let resultReviews = Object.keys(reviewsObj).map(key => (reviewsObj[key]));
    let resultTutorials = Object.keys(tutorialsObj).map(key => (tutorialsObj[key]));
    setReviewsToDisplay(resultReviews);
    setTutorialsToDisplay(resultTutorials);
  }, [reviewsObj, tutorialsObj]);

  const checkboxConfig = [
    { id: 'tutorials', name: 'Tutorials' },
    { id: 'reviews', name: 'Reviews' }
  ];

  const { filterStatus } = useContext(FilterContext);

  const timestamp = Date().now;

  return (
      <PageContainer
      title='Technology Bear'
      description= 'Technology tutorials and reviews'
      image='https://technologybear.vercel.app/social/bearshare.jpeg'
      pageURL='https://www.technologybear.net/'
      datetime={timestamp}
      keywords='Technology Bear, tutorials, reviews, software engineering'
      type='website'
      >
        <div id={postListContainer} >
          <RowContainer >
            <h2 className={header} >
              Technology Bear
            </h2>
            <MultiCheckbox
              config={checkboxConfig}
            />

          </RowContainer>
          
          {filterStatus.tutorials ? <CardContainer posts={tutorialsToDisplay} postType= 'Tutorials' /> : null}
          {filterStatus.reviews ? <CardContainer posts={reviewsToDisplay} postType= 'Reviews' /> : null}

        </div>
      </PageContainer>
  )
  }
  
  export default MainPage