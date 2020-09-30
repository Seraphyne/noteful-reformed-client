import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Folder from './Folder';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


configure({adapter: new Adapter()});
describe('<Folder />', () => {
  it('renders without crashing', () => {
    mount(
      <BrowserRouter>
        <Folder />
      </BrowserRouter>,
    );
  });
});