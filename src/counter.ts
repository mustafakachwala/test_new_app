
// counter.ts
import { ActionReducer, Action } from '@ngrx/store';

export const LEFT_MOVER = 'LEFT_MOVER';
export const RIGHT_MOVER = 'RIGHT_MOVER';
export const RESET = 'RESET';

export function counterReducer(state: number = 0, action: Action) {

  switch (action.type) {
    case LEFT_MOVER:
      return state - 1;

    case RIGHT_MOVER:
      return state + 1;

    case RESET:
      return 0;

    default:
      return state;
  }
}

/*
export const counter = (state = 0, action) => {

}*/
