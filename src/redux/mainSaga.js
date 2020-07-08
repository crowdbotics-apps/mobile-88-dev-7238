import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import EmailAuth8393Saga from '../features/EmailAuth8393/redux/sagas';
import CalendarView8392Saga from '../features/CalendarView8392/redux/sagas';
import CalendarSaga from '../features/Calendar/redux/sagas';
import EmailAuthSaga from '../features/EmailAuth/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
EmailAuth8393Saga,
CalendarView8392Saga,
CalendarSaga,
EmailAuthSaga,
    
  ]);
}