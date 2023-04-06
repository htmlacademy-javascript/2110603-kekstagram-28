import {createPhotoThumbnails} from './thumbnail.js';
import {showBigPhoto} from './big-photo.js';
import {closeImgEditing} from './form.js';
import {getData, sendData} from './api.js';
import {showGettingAlert, showSendingSuccessMessage, showSendingErrorMessage} from './alert-messages.js';
import {init, createSortedGallery} from './filter.js';

export const checkIngoingData = async () => {
  try {
    const loadedGallery = await getData();
    init(loadedGallery);
    createPhotoThumbnails(createSortedGallery());
    showBigPhoto(createSortedGallery());
  } catch (error) {
    showGettingAlert(error.message);
  }
};

export const checkOutgoingData = async (data) => {
  try {
    await sendData(data);
    closeImgEditing();
    showSendingSuccessMessage();
  } catch {
    showSendingErrorMessage();
  }
};
