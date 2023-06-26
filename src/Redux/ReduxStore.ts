import { createStore, combineReducers } from 'redux';
import { quizReducer, QuizState } from './QuizActionReducer';
import {interviewReducer, InterviewState} from "./InterviewActionReducer";
import { loginReducer,LoginState } from "./LoginActionReducer"
import { signUpReducer, SignUpState } from './SignUpActionReducer';

export interface RootState {
    quiz: QuizState;
    interview : InterviewState;
    login : LoginState;
    signUp : SignUpState;
}

const rootReducer = combineReducers<RootState>({
    quiz: quizReducer,
    interview: interviewReducer,
    login : loginReducer,
    signUp : signUpReducer
});

const store = createStore(rootReducer);

export default store;
