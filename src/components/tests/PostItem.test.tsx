import React from 'react';
import { render, screen } from '@testing-library/react';
import PostItem from '../PostItem';
import { IPost } from '../../models/IPost';

test('renders post', () => {
    const post: IPost = {
        id: 1,
        title: 'Foo',
        body: 'Bar'
    }
  render(<PostItem post={post} remove={()=>{}} update={() => {}} />);
  const titleElement = screen.getByText(/Foo/i);
  const postBodyElement = screen.getByText(/Bar/i);
  expect(titleElement).toBeInTheDocument();
  expect(postBodyElement).toBeInTheDocument();
  //screen.debug();
  expect(titleElement).toMatchSnapshot();
});
