import firebase from 'firebase'

export const config = {
  apiKey: 'AIzaSyDtx273xjcTq2sf8iHwD5pd5tBs24oS56c',
  authDomain: 'vuechat-bcaf1.firebaseapp.com',
  databaseURL: 'https://vuechat-bcaf1.firebaseio.com',
  projectId: 'vuechat-bcaf1',
  storageBucket: 'vuechat-bcaf1.appspot.com',
  messagingSenderId: '834688825698'

}

firebase.initializeApp(config)

var firebaseRef = firebase.database().ref()
export default firebase
export var chatRef = firebaseRef.child('chat')
