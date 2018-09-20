import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

chai.use(chaiEnzyme());
