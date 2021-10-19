import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { userLoginReducer } from './reducers/userReducers'

const reducer = combineReducers({
    userLogin:userLoginReducer
})

const userInfoFromStorage = localStorage.getItem('userInfo')
? JSON.parse(localStorage.getItem('userInfo'))
: null

const initailState = {
    userLogin:{userInfo:userInfoFromStorage}
}

const middleware = [thunk]

const store = createStore(
    reducer,
    initailState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store