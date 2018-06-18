import firebase from 'firebase/app';
import 'firebase/auth';

const fbSignUp = async(email, password) => {
    return await firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .catch(error => {
      switch(error.code) {
        case 'auth/email-already-in-use':
          return {error: 'Данный почтовый адрес уже используется'};
        case 'auth/weak-password':
          return {error: 'Длина пароля должна быть больше 6 символов'};
        case 'auth/invalid-email':
          return {error: 'Проверьте правильность ввода почты'};
      }
    });
}

const fbLogIn = async(email, password) => {
  return await firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch(error => {
      switch(error.code) {
        case 'auth/email-already-in-use':
          return {error: 'Данный почтовый адрес уже используется'};
        case 'auth/user-not-found':
          return {error: 'Данному почтовому адресу не соответствует ни одна учетная запись'};
        case 'auth/invalid-email':
          return {error: 'Проверьте правильность ввода почты'};
        case 'auth/wrong-password':
          return {error: 'Неправильный пароль'};
      }
    });
};

const fbLogOut = async(email, password) => {
  await firebase
    .auth()
    .signOut();
};

const checkLoggedUser = async () => {
  return new Promise((resolve) => {
    firebase.auth().onAuthStateChanged(user => {
      resolve(user ? user.uid : '');
    })
  });
}

export { fbSignUp, fbLogIn, fbLogOut, checkLoggedUser };