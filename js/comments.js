import {createPhotoContent} from './data.js';

const commentsList = document.querySelector('.social__comments');

const comment = commentsList.querySelector('.social__comment');
const commenter = comment.querySelector('.social__picture');
const commentText = comment.querySelector('.social__text');


/* <li class="social__comment">
<img class="social__picture"
   src="img/avatar-3.svg"  avatar
   alt="Аватар комментатора фотографии" width="35" height="35"> name
 <p class="social__text">Да это фоташоп!!!!!!!!</p> message
</li> */

