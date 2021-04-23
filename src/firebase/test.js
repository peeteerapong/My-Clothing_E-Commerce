import firebase from 'firebase/app';
import 'firebase/firestore';


const firestore = firebase.firestore();

firestore.collection('users').doc('FwobHCrW7gbrYfri2SvI')
.collection('cartItem').doc('amjVqh6lMp8pdCb1ZysA');
firestore.doc('/users/FwobHCrW7gbrYfri2SvI/cartItem/amjVqh6lMp8pdCb1ZysA');
firestore.collection('/users/FwobHCrW7gbrYfri2SvI/cartItem');