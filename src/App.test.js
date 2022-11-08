import { UserProvider } from './context/user';
import Home from './features/home/Home';
import { renderWithProviders } from './tests/utils';
import { screen } from '@testing-library/react';
import PostMessage from './features/home/PostMessages';
import ListMessages from './features/home/list-messages/ListMessages';

import messagesReducer, { add } from './features/messages/messagesSlice';

test('renders ListMessages component', () => {
  renderWithProviders(
    <UserProvider>
      <ListMessages />
    </UserProvider>
  );
  expect(screen.getByTestId(/list-messages/i)).toBeTruthy();
});

test('renders PostMessage component', () => {
  renderWithProviders(
    <UserProvider>
      <PostMessage />
    </UserProvider>
  );
  expect(screen.getAllByPlaceholderText(/message/i)).toBeTruthy();
});

test('renders Home component', () => {
  renderWithProviders(
    <UserProvider>
      <Home />
    </UserProvider>
  );
  expect(screen.getAllByPlaceholderText(/message/i)).toBeTruthy();
  expect(screen.getByTestId(/list-messages/i)).toBeTruthy();
});

test('Should return initial messages state', () => {
  const initialState = [
    { user: 'default', message: 'default message' },
    { user: 'default', message: 'Another default message' },
  ];
  expect(messagesReducer(undefined, { type: undefined })).toEqual(initialState);
});

test('Should handle a message being added to an empty list', () => {
  const prevState = [];

  expect(
    messagesReducer(
      prevState,
      add({ user: 'mnkex', message: 'This is the message' })
    )
  ).toEqual([{ user: 'mnkex', message: 'This is the message' }]);
});

test('Should handle a message being added to an existing list', () => {
  const prevState = [{ user: 'mnkex', message: 'This is the message' }];

  expect(
    messagesReducer(
      prevState,
      add({ user: 'isaka', message: 'another message' })
    )
  ).toEqual([
    { user: 'mnkex', message: 'This is the message' },
    { user: 'isaka', message: 'another message' },
  ]);
});
