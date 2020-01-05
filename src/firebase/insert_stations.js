const admin = require('firebase-admin')
const serviceAccount = require('./data/serviceAccountKey.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://rider-life.firebaseio.com"
});

const stationsRef = admin.firestore().collection('stations');

const stations = require('./data/stations.json')
for (let i = 0; i < stations.length; i++) {
  let d = new Date()
  let time = d.getTime();
  let params = {
    stationId: stations[i]['id'],
    name: stations[i]['name'],
    createdAt: time,
    updatedAt: time
  }

  stationsRef.doc().set(params)
}
