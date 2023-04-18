import { combineReducers } from "@reduxjs/toolkit";

import {contactsReduser} from './tasks/contactsSlice';
import {filterReduser} from './tasks/filterSlice';

const rootReducer = combineReducers({
    contacts: contactsReduser,
    filter: filterReduser,
});

export {rootReducer};