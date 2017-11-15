from firebase import firebase
firebase = firebase.FirebaseApplication('https://iot2017-d5b6f.firebaseio.com/', None)
new_user = {
    'name' : 'carta',
    'path' : ["C", "A", "B"],
    'time' : [1, 2, 5],
    'date' : "21/12/2017"
}

result = firebase.post('/paths', new_user)
print(result)