import { Dispatch } from 'redux';

interface UserData {
    id: string;
    password: string;
    confirmPassword: string;
    name: string;
    school: string;
    email: string;
    phone: string;
  }

export interface SignUpState {
  isLoading: boolean;
  error: string | null;
}

const initialState: SignUpState = {
  isLoading: false,
  error: null,
};

export interface SignUpUserAction {
  type: "SIGNUP_USER";
}

export interface SignUpUserSuccessAction {
  type: "SIGNUP_USER_SUCCESS";
}

export interface SignUpUserFailureAction {
  type: "SIGNUP_USER_FAILURE";
  payload: string;
}

export type ActionTypes =
  | SignUpUserAction
  | SignUpUserSuccessAction
  | SignUpUserFailureAction;

export const signUpUser = (userData: UserData) => {
  return (dispatch: Dispatch<ActionTypes>) => {
    dispatch({ type: "SIGNUP_USER" });

    // 회원가입 로직 구현

    // 서버 요청 전송
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => {
        // 서버 응답 처리

        // 회원가입 성공
        dispatch({ type: "SIGNUP_USER_SUCCESS" });

        // 회원가입 실패
        // dispatch({ type: "SIGNUP_USER_FAILURE", payload: "회원가입 실패 메시지" });
      })
      .catch((error) => {
        // 에러 처리
        dispatch({ type: "SIGNUP_USER_FAILURE", payload: "네트워크 오류" });
        console.error(error);
      });
  };
};

export const signUpReducer = (
  state = initialState,
  action: ActionTypes
): SignUpState => {
  switch (action.type) {
    case "SIGNUP_USER":
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case "SIGNUP_USER_SUCCESS":
      return {
        ...state,
        isLoading: false,
      };
    case "SIGNUP_USER_FAILURE":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
