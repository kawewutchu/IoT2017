from firebase import firebase
firebase = firebase.FirebaseApplication('https://iot2017-d5b6f.firebaseio.com/', None)
new_user = {
    'name' : 'cartB',
    'path' : ["C", "A", "B"],
    'time' : ["2", "4", "5"],
    'date' : "21/12/2017"
}

result = firebase.post('/paths', new_user)
print(result)