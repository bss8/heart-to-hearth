// Get current username
var user = firebase.auth().currentUser;

// Create a Storage Ref w/ username
var storageRef = firebase.storage().ref(user + '/profilePicture/' + file.name);

// Upload file
var task = storageRef.put(file);