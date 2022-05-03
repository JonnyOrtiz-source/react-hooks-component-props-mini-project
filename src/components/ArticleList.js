import React from 'react';
import Article from './Article';

function ArticleList({ posts }) {
   const postElement = posts.map((post) => {
      return <Article key={post.id} {...post} />;
   });
   return (
      <div>
         <main>{postElement}</main>
      </div>
   );
}

export default ArticleList;
