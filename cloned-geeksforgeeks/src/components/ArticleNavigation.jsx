// src/components/Hariram/ArticleNavigation.jsx
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import htmlTopics from '../utils/HTMLSidebar';

const ArticleNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  
  // Helper function to flatten your nested topics structure
  const flattenTopics = (topics) => {
    let result = [];
    
    topics.forEach(topic => {
      if (topic.link) {
        result.push(topic);
      }
      
      if (topic.subTopics && topic.subTopics.length > 0) {
        result = [...result, ...topic.subTopics];
      }
    });
    
    return result;
  };
  
  // Get all articles in a flat array
  const allArticles = flattenTopics(htmlTopics);
  const currentIndex = allArticles.findIndex(article => article.link === currentPath);
  
  const handlePreviousArticle = () => {
    if (currentIndex > 0) {
      navigate(allArticles[currentIndex - 1].link);
    }
  };
  
  const handleNextArticle = () => {
    if (currentIndex !== -1 && currentIndex < allArticles.length - 1) {
      navigate(allArticles[currentIndex + 1].link);
    }
  };
  
  return (
    <div className="flex justify-between mt-8 mb-4">
      {currentIndex > 0 ? (
        <button 
          onClick={handlePreviousArticle}
          className="rounded-full border border-gray-300 px-6 py-3 font-medium hover:bg-red-100 transition-colors"
        >
          &lt; Previous Article
        </button>
      ) : (
        <div></div> // Empty div for spacing
      )}
      
      {currentIndex < allArticles.length - 1 && (
        <button 
          onClick={handleNextArticle}
          className="rounded-full border border-gray-300 px-6 py-3 font-medium hover:bg-red-100 transition-colors"
        >
          Next Article &gt;
        </button>
      )}
    </div>
  );
};

export default ArticleNavigation;