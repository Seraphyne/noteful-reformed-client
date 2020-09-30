import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AddNote from './AddNote';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


configure({adapter: new Adapter()});
describe('<AddNote />', () => {
  it('renders without crashing', () => {
    mount(
      <BrowserRouter>
        <AddNote />
      </BrowserRouter>,
    );
  });
});