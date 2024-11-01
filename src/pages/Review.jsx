import React from 'react';
import { PageContainer } from '../components/Layout';
import Header from '../components/Header';
import ReviewList from '../components/Review/ReviewList';

function Review() {
  return (
    <>
      <Header />
      <PageContainer>
        <ReviewList />
      </PageContainer>
    </>
  );
}

export default Review;