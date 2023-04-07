
import {submitForm} from './form.js';
// import { checkIngoingData, checkOutgoingData } from './data.js';
import { sendData, getData } from './api.js';
// checkIngoingData();
// submitForm(checkOutgoingData);
submitForm(sendData);
getData();
