export interface InterviewState {
    languageContent: string[];
    languageComment: string[][];
    exampleComment: string[];
    activeLanguage: string;
    showContent: boolean[];
    currentPage: number;
}

const initialState: InterviewState = {
    languageContent: [],
    languageComment: [],
    exampleComment: [],
    activeLanguage: "",
    showContent: [],
    currentPage: 1,
};

export interface SetLanguageContentAction {
    type: "SET_LANGUAGE_CONTENT";
    payload: string[];
}

export interface SetLanguageCommentAction {
    type: "SET_LANGUAGE_COMMENT";
    payload: string[][];
}

export interface SetExampleCommentAction {
    type: "SET_EXAMPLE_COMMENT";
    payload: string[];
}

export interface SetActiveLanguageAction {
    type: "SET_ACTIVE_LANGUAGE";
    payload: string;
}

export interface SetShowContentAction {
    type: "SET_SHOW_CONTENT";
    payload: boolean[];
}

export interface SetCurrentPageAction {
    type: "SET_CURRENT_PAGE";
    payload: number;
}

export type ActionTypes =
    | SetLanguageContentAction
    | SetLanguageCommentAction
    | SetExampleCommentAction
    | SetActiveLanguageAction
    | SetShowContentAction
    | SetCurrentPageAction;

export const setLanguageContent = (content: string[]): SetLanguageContentAction => {
    return {
        type: "SET_LANGUAGE_CONTENT",
        payload: content,
    };
};

export const setLanguageComment = (comment: string[][]): SetLanguageCommentAction => {
    return {
        type: "SET_LANGUAGE_COMMENT",
        payload: comment,
    };
};

export const setExampleComment = (example: string[]): SetExampleCommentAction => {
    return {
        type: "SET_EXAMPLE_COMMENT",
        payload: example,
    };
};

export const setActiveLanguage = (language: string): SetActiveLanguageAction => {
    return {
        type: "SET_ACTIVE_LANGUAGE",
        payload: language,
    };
};

export const setShowContent = (show: boolean[]): SetShowContentAction => {
    return {
        type: "SET_SHOW_CONTENT",
        payload: show,
    };
};

export const setCurrentPage = (page: number): SetCurrentPageAction => {
    return {
        type: "SET_CURRENT_PAGE",
        payload: page,
    };
};

export const interviewReducer = (
    state = initialState,
    action: ActionTypes
): InterviewState => {
    switch (action.type) {
        case "SET_LANGUAGE_CONTENT":
            return {
                ...state,
                languageContent: action.payload,
            };
        case "SET_LANGUAGE_COMMENT":
            return {
                ...state,
                languageComment: action.payload,
            };
        case "SET_EXAMPLE_COMMENT":
            return {
                ...state,
                exampleComment: action.payload,
            };
        case "SET_ACTIVE_LANGUAGE":
            return {
                ...state,
                activeLanguage: action.payload,
            };
        case "SET_SHOW_CONTENT":
            return {
                ...state,
                showContent: action.payload,
            };
        case "SET_CURRENT_PAGE":
            return {
                ...state,
                currentPage: action.payload,
            };
        default:
            return state;
    }
};
