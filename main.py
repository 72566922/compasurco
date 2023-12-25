from flask import Flask, jsonify, request, render_template,redirect,session
from flask_jwt_extended import (
    JWTManager, jwt_required, create_access_token,
    get_jwt_claims
)
from src.controllers.loginController import loginController
import os
import hashlib


app = Flask(__name__) 
app.secret_key = "any random string"
app.config['JWT_SECRET_KEY'] = 'cambiar_no_olvidar' 
app.config["IMAGE_UPLOADS"] = "/tmp"
jwt = JWTManager(app)


@app.route('/login', methods=['GET'])
def login():
    _error = request.args.get('error')
    _controller = loginController()
    _data = _controller.get_login()
    print("REGISTRO login")
    for data in _data:
        print("REGISTRO login")
        print(data.usuario_login)
        print(data.contraseña_login)

    if _error is None:
        _error = 0
    print(_error)
    return render_template('login.html',error = _error)

@app.route('/login', methods=['POST'])
def login_post():
    _usuario_login = request.form.get("usuario_login")
    _contraseña_login = request.form.get("contraseña_login")
    _controller = loginController()
    _controller.add_login(_usuario_login,_contraseña_login)  

    return redirect('/login.html')

@app.route('/wa_adadlogin', methods=['GET'])
def wa_adadlogin():
    return redirect('wa_adadlogin.html')

@app.route('/wa_adadlogin', methods=['POST'])
def wa_adadlogin():
    _full_name = request.form.get("idTxtFullName")
    _cod = request.form.get("idTxtCod")
    _controller = loginController()
    _controller.add_login(_full_name,_cod)
    #Mostrar un mensaje de éxito o un mensaje de error.
    return redirect('wa_adadlogin.html')


if __name__ == '_main_':
    app.run(host='127.0.0.1', port=8080,debug=True)