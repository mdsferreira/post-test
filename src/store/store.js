import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers/index'

const store = applyMiddleware(thunk)(createStore)(reducers);
export default store;