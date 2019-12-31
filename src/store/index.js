import {createStore} from 'redux';
import reducer from './Reducer/Reducer';

const state = createStore(reducer);
export default state;