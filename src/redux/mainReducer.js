import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import CalendarView8487Reducer from '../features/CalendarView8487/redux/reducers';
import EmailAuth8486Reducer from '../features/EmailAuth8486/redux/reducers';
import EmailAuth8393Reducer from '../features/EmailAuth8393/redux/reducers';
import CalendarView8392Reducer from '../features/CalendarView8392/redux/reducers';
import CalendarReducer from '../features/Calendar/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
CalendarView8487: CalendarView8487Reducer,
EmailAuth8486: EmailAuth8486Reducer,
EmailAuth8393: EmailAuth8393Reducer,
CalendarView8392: CalendarView8392Reducer,
Calendar: CalendarReducer,
EmailAuth: EmailAuthReducer,

});