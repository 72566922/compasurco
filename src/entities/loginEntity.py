import json
from collections import namedtuple

class loginEntity:
    def __init__(self, usuario_login=None, contraseña_login=None):
        self.usuario_login = usuario_login
        self.contraseña_login = contraseña_login
    def toJSON(self):
        return json.dumps(self, default=lambda o: o.__dict__, sort_keys=True, indent=4)

    def requestToClass(self, request):
        data = request.get_json() 
        values = json.loads(json.dumps(data), object_hook=lambda d: namedtuple('X', d.keys())(*d.values()))
        self.usuario_login = values.usuario_login
        self.contraseña_login = values.contraseña_login

