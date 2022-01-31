import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import { Elements } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';

// Elements
import Landing from '../components/Pages/Landing/Landing';
import Communities from '../components/Pages/Communities/Communities';
import CreateCommunitie from '../components/Pages/CreateCommunitie/CreateCommunitie';
import CommunityPosts from '../components/Pages/CommunityPosts/CommunityPosts';
import HelpPost from '../components/Pages/NewPost/HelpPost';
import EditHelpPost from '../components/Pages/NewPost/EditHelpPost';
import OnlyPostAnswers from '../components/Pages/CommunityPosts/PostList/PostTemplate/Answers/OnlyPostAnswers';
import Login from '../components/Pages/Login/Login';
import Register from '../components/Pages/Register/Register';
import Verify from '../components/Pages/Register/Verify';
import P404 from '../components/Pages/404/P404';
import UniquePost from '../components/Pages/UniquePost/UniquePost';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="communities/" element={<Communities />} />

      <Route
        path="communities/create-communitie"
        element={<CreateCommunitie />}
      />

      <Route path="communities/community-posts" element={<CommunityPosts />} />

      <Route
        path="/communities/:comuTitle/posts"
        element={<CommunityPosts />}
      />
      <Route
        path="/communities/:comuTitle/posts/:idPost"
        element={<OnlyPostAnswers />}
      />

      <Route path="/communities/help-post" element={<HelpPost />} />
      <Route path="/communities/help-post/:id" element={<UniquePost />} />

      <Route path="/communities/edit-help-post" element={<EditHelpPost />} />

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/activate/:hash" element={<Verify />} />

      <Route path="*" element={<P404 />} />
    </Routes>
  );
}

export default Router;
