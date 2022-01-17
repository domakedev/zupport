/* eslint-disable import/order */
import { screen } from '@testing-library/react';
import { render } from '../../../../__test__/test-utils';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import CommunityPosts from '../PostList/PostTemplate/PostTemplate';
import dataPost from '../../../../mocks/dataPost';
import {
  softNumber,
  getPostTime,
} from '../../../../controller/CommunityPostCtr/utilities';

const post = dataPost[0];

beforeEach(() => {
  render(
    <CommunityPosts
      userPhoto={post.userPhoto}
      userName={post.userName}
      timePost={getPostTime(post.timePost)}
      postTitle={post.postTitle}
      postDescription={post.postDescription}
      points={softNumber(post.points)} // "24374"
      userPoints={post.userPoints}
      resolved={post.resolved}
      likes={softNumber(post.likes)} // "64397"
      urlPost={post.image}
    />
  );
});

const getText = (value = '') => {
  const textElement = screen.getByText(value);
  return textElement;
};

describe('Unit test for Post Page', () => {
  test('It should render the title of a post', async () => {
    expect(getText(dataPost[0].postTitle)).toBeInTheDocument();
  });

  test('It should render the description of a post', async () => {
    expect(getText(dataPost[0].postDescription)).toBeInTheDocument();
  });
  test('It should render the points of the post', async () => {
    expect(getText(softNumber(dataPost[0].points))).toBeInTheDocument();
  });
  test('It should render the publication time of the posts', async () => {
    expect(getText(getPostTime(dataPost[0].timePost))).toBeInTheDocument();
  });
  test('It should render the option to like a post', () => {
    const buttonElement = screen.getAllByRole('button', {
      name: /Te apoyo/i,
    })[0];
    userEvent.click(buttonElement);
    expect(buttonElement).toBeInTheDocument();
  });
  test('It should render the option to comment on a post', () => {
    const buttonElement = screen.getAllByRole('button', {
      name: /Responder/i,
    })[0];
    userEvent.click(buttonElement);
    expect(buttonElement).toBeInTheDocument();
  });
});
