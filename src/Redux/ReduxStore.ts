import { createStore, combineReducers } from 'redux';
import { quizReducer, QuizState } from './actionReducer';

export interface RootState {
    quiz: QuizState;
}

const rootReducer = combineReducers<RootState>({
    quiz: quizReducer,
});

const store = createStore(rootReducer);

export default store;