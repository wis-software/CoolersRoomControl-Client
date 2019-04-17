import {handleActions} from 'redux-actions';

import * as types from '../types/entitiesTypes';
import {BIND_COOLERS_TO_ROOM} from '../../screens/Rooms/constants/roomsConstants';

import {arrCoolers} from '../seed/entities';

const initialState = {
	rooms: [],
	coolers: arrCoolers,
	value: 0,
};

const entitiesReducer = handleActions({
	[types.INCREMENT_VALUE]: (state: any) => ({
		...state,
		value: state.value + 1,
	}),
	[BIND_COOLERS_TO_ROOM]: (state: any, {payload: {coolers}}) => ({
		...state,
		coolers,
	}),
}, initialState);

export default entitiesReducer;
