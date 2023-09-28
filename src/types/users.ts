
export enum UsersActionTypes {
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
    FETCH_USERS_ERROR = 'FETCH_USERS_ERROR'
}

interface UsersFetchAction {
    type: UsersActionTypes.FETCH_USERS;
}

interface UsersFetchSuccessAction {
    type: UsersActionTypes.FETCH_USERS_SUCCESS;
    payload: any[];
}

interface UsersFetchErrorAction {
    type: UsersActionTypes.FETCH_USERS_ERROR;
    payload: string;
}

export type UsersAction = UsersFetchAction | UsersFetchSuccessAction | UsersFetchErrorAction;

export interface UsersState {
    users: any[];
    loading: boolean;
    error: null | string;
}