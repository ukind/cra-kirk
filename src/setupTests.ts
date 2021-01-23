import Enzyme from 'enzyme';
import EnzymeAdapter17 from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new EnzymeAdapter17() });
