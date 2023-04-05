
import {submitForm} from './form.js';
import { checkIngoingData, checkOutgoingData } from './data.js';
import './filter.js';

checkIngoingData();
submitForm(checkOutgoingData);
