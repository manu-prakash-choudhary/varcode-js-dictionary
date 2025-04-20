// src/components/Hariram/ArticleLayout.jsx
import React from 'react';
import ArticleNavigation from './ArticleNavigation';

const ArticleLayout = ({ children }) => {
  return (
    <div className="article-container p-4 w-[80%]">
      <div className="article-content">
        {children}
      </div>
      
      <ArticleNavigation />
    </div>
  );
};

export default ArticleLayout;