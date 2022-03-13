import React from "react";
import Card from '../../components/Card/Card';
import PostSummary from '../../components/PostSummary/PostSummary';
import Link from 'next/link'
import { cardContainer } from './styles.module.css';

export default function CardContainer(props) {

  const { posts, postType } = props;

  return (
      <div id={cardContainer}>
        {postType}
        <div id='publicationCardView'>
          { posts.map((elem, key) => {
            return(
              <Link key={key} href={elem.route} passHref>
                <a>
                  <Card key={key}>
                    <PostSummary
                      key={key}
                      title={elem.title}
                      manufacturer={elem.manufacturer}
                      reviewDate={elem.reviewDate}
                    />
                  </Card>
                </a>
              </Link>
            );
          })}
        </div>
      </div>
  );
}