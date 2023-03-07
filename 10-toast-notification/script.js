import Toast from './Toast.js';

const toast = new Toast({
  position: 'top-left',
  text: 'Hello world',
  // autoClose: false,
});

setTimeout(() => {
  toast.update({ text: 'Byeee' });
}, 4000);
