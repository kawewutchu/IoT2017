from firebase import firebase
firebase = firebase.FirebaseApplication('https://iot2017-d5b6f.firebaseio.com/', None)
new_user = {
    'name' : 'cartB',
    'path' : ["B", "A", "C"]
}

result = firebase.post('/paths', new_user)
print(result)