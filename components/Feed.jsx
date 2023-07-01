'use client';

import { useEffect, useState } from 'react';
import PromptCard from './PromptCard';

const PromptCardList = ({ data, handleTagClick }) => {
  console.log('ovde ce ide');
  console.log(data);
  return (
    <div className="mt-16 prompt_layout">
      {[1, 2, 3, 4, 5, 6, 7].map((post) => {
        return (
          <PromptCard
            key={post._id}
            post={post}
            handleTagClick={handleTagClick}
          />
        );
      })}
    </div>
  );
};

function Feed() {
  const [searchText, setSearchText] = useState('');
  const [posts, setPosts] = useState([]);

  function handleSearchChange(e) {}

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch('/api/prompt');
      const data = response.json();

      setPosts(data);
    }

    fetchPosts();
  }, []);

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          className="peer search_input"
          required
          placeholder="Search for a tag or a username"
          value={searchText}
          onChange={handleSearchChange}
        />
      </form>

      <PromptCardList data={posts} handleTagClick={() => {}} />
    </section>
  );
}

export default Feed;
