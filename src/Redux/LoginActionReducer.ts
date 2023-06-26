export interface LoginState {
    isLoading: boolean;
    error: string | null;
  }
  
  const initialState: LoginState = {
    isLoading: false,
    error: null,
  };
  
  export interface LoginUserAction {
    type: "LOGIN_USER";
  }
  
  export interface LoginUserSuccessAction {
    type: "LOGIN_USER_SUCCESS";
  }
  
  export interface LoginUserFailureAction {
    type: "LOGIN_USER_FAILURE";
    payload: string;
  }
  
  export type ActionTypes =
    | LoginUserAction
    | LoginUserSuccessAction
    | LoginUserFailureAction;
  
  export const loginUser = (userData: { id: string, password: string }) => {
    return (dispatch: any) => {
      dispatch({ type: "LOGIN_USER" });
  
      // 로그인 로직 구현
  
      // 서버 요청 전송
      fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      })
        .then((response) => response.json())
        .then((data) => {
          // 서버 응답 처리
  
          // 로그인 성공
          dispatch({ type: "LOGIN_USER_SUCCESS" });
  
          // 로그인 실패
          // dispatch({ type: "LOGIN_USER_FAILURE", payload: "로그인 실패 메시지" });
        })
        .catch((error) => {
          // 에러 처리
          dispatch({ type: "LOGIN_USER_FAILURE", payload: "네트워크 오류" });
          console.error(error);
        });
    };
  };
  
  export const loginReducer = (state = initialState, action: ActionTypes): LoginState => {
    switch (action.type) {
      case "LOGIN_USER":
        return {
          ...state,
          isLoading: true,
          error: null,
        };
      case "LOGIN_USER_SUCCESS":
        return {
          ...state,
          isLoading: false,
        };
      case "LOGIN_USER_FAILURE":
        return {
          ...state,
          isLoading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  