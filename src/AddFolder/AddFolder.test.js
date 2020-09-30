import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AddFolder from './AddFolder';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


configure({adapter: new Adapter()});
describe('<AddFolder />', () => {
  it('renders without crashing', () => {
    mount(
      <BrowserRouter>
        <AddFolder />
      </BrowserRouter>,
    );
  });
});