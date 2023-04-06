
import {submitForm} from './form.js';
import { checkIngoingData, checkOutgoingData } from './data.js';

checkIngoingData();
submitForm(checkOutgoingData);
