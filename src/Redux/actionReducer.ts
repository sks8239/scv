import { Action } from 'redux';

// 문제 타입
export interface Question {
    question: string;
    choices: string[];
    correctAnswer: string;
}

// 액션 타입
export interface SetQuestionsAction extends Action {
    type: 'SET_QUESTIONS';
    payload: Question[];
}

export interface SetAnswersAction extends Action {
    type: 'SET_ANSWERS';
    payload: string[];
}

export interface UpdateScoreAction extends Action {
    type: 'UPDATE_SCORE';
    payload: number;
}

// export const resetScore = (): ResetScoreAction => ({
//     type: 'RESET_SCORE',
// });

export type ActionTypes = SetQuestionsAction | SetAnswersAction | UpdateScoreAction;

// 액션 생성 함수
export const setQuestions = (questions: Question[]): SetQuestionsAction => ({
    type: 'SET_QUESTIONS',
    payload: questions,
});

export const setAnswers = (answers: string[]): SetAnswersAction => ({
    type: 'SET_ANSWERS',
    payload: answers,
});

export const updateScore = (score: number): UpdateScoreAction => ({
    type: 'UPDATE_SCORE',
    payload: score,
});

// 리듀서
export interface QuizState {
    questions: Question[];
    answers: string[];
    score: number;
}

const initialState: QuizState = {
    questions: [],
    answers: [],
    score: 0,
};

export const quizReducer = (state = initialState, action: ActionTypes): QuizState => {
    switch (action.type) {
        case 'SET_QUESTIONS':
            return { ...state, questions: action.payload };
        case 'SET_ANSWERS':
            return { ...state, answers: action.payload };
        case 'UPDATE_SCORE':
            return { ...state, score: state.score + action.payload };
        // case 'RESET_SCORE':
        //     return { ...state, score: 0 };
        default:
            return state;
    }
};
