import firebase from 'firebase/app';
import 'firebase/database';
import uuid from 'uuid';

const setUser = async(user) => {
  await firebase.database().ref(`/users/${user.id}`).set(user);
}

const getUser = (id) => {
  return firebase.database().ref(`/users/${id}`).once('value')
    .then(snapshot => Object.assign(snapshot.val(), {id: snapshot.key}));
}

const getTopUsers = () => {
  return firebase.database().ref(`/arena-results`).orderByChild('level').limitToLast(10).once('value')
    .then(snapshot => {
      const resultQuery = [];
      snapshot.forEach(childSnapshot => {
        resultQuery.unshift( Object.assign( childSnapshot.val(), { uuid: childSnapshot.key } ));
      });
      return resultQuery;
    });
}

const getUserResults = (id) => {
  return firebase.database().ref(`/arena-results`).orderByChild('id').equalTo(id).once('value')
    .then(snapshot => {
      const resultQuery = [];
      snapshot.forEach(childSnapshot => {
        resultQuery.unshift( Object.assign( childSnapshot.val(), { uuid: childSnapshot.key } ));
      });
      return resultQuery.sort( (a, b) => b.level - a.level);
    });
}

const getActiveSession = (id) => {
  return firebase.database().ref(`/arena-sessions/${id}`).once('value')
    .then(snapshot => snapshot.val());
}

const setActiveSession = async(id, level = 0, heroHP = 100, enemyHP = 100, enemyName = '') => {
  await firebase.database().ref(`/arena-sessions/${id}`).set({
    level,
    heroHP,
    enemyHP,
    enemyName,
  });
}

const setResult = async(id, name, level) => {
  await firebase.database().ref(`/arena-results/${uuid()}`).set({
    id,
    level,
    date: (new Date()).toString(),
    name,
  });
}

export { setUser, getUser, getTopUsers, getUserResults, getActiveSession, setActiveSession, setResult };