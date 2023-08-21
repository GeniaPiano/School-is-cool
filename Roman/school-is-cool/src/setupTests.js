import '@testing-library/jest-dom';
import { setupServer } from 'msw/node';
import { handlers } from './mocks/handlers';
import { createDataBase } from './mocks/browser';
//
// const server = setupServer(...handlers);
//
// beforeAll( () => {
//   createDataBase(); // tworzymy zmokowaną bazę danych przed rozpoczęciem testowania
//   server.listen()
//
// });
//
// afterEach(() => server.resetHandlers());
// afterAll(() => server.close());