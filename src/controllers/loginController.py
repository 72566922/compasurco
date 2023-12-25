from src.models.loginModel import loginmodel 
from src.entities.responseEntity import responseEntity
from src.controllers.responseController import responseController
from src.entities.loginEntity import loginEntity

class loginController(responseController):

    def get_login(self):
        _message = None
        _status = self.interruption
        _data= None
        try:
            _model = loginModel()
            _data = _model.get_login()
            print(_data)
            _status = self.OK
            _message = self.messageOK
        except(Exception) as e:
            _status = self.interruption
            _message = self.messageInterruption + str(e)
            print('error: '+ str(e))
        return _data
    
    def add_login(self,_usuario_login, _contraseña_login):
        _message = None
        _status = self.interruption
        _data= None
        try:
            _entity = loginEntity(_usuario_login, _contraseña_login) 
            #_entity.usuario_login = _usuario_login
            #_entity.contraseña_login = _contraseña_login
            _model = loginModel()
            _data = _model.add_login(_entity)
            _status = self.OK
            _message = self.messageOK
        except(Exception) as e:
            _status = self.interruption
            _message = self.messageInterruption + str(e)
            print('error: '+ str(e))
        return _data

    def update_login(self,request):
        _message = None
        _status = self.interruption
        _data= None
        try:
            _entity = loginEntity()
            _entity.requestToClass(request)
            _model = loginModell()
            _data = _model.update_login(_entity)
            _status = self.OK
            _message = self.messageOK
        except(Exception) as e:
            _status = self.interruption
            _message = self.messageInterruption + str(e)
            print('error: '+ str(e))
        return responseEntity(_status,_message,_data).toJSON()

    
    def delete_login(self,index):
        _message = None
        _status = self.interruption
        _cod = None
        try:
            _model = loginModell()
            _cod = _model.delete_login(index)
            _status = self.OK
            _message = self.messageOK
        except(Exception) as e:
            _status = self.interruption
            _message = self.messageInterruption + str(e)
            print('error: '+ str(e))
        return responseEntity(_status,_message,_cod).toJSON()

    def get_login_by_id(self,index):
        _message = None
        _status = self.interruption
        _entity = None
        try:
            _model = loginModell()
            _entity = _model.get_login_by_id(index)
            _status = self.OK
            _message = self.messageOK
        except(Exception) as e:
            _status = self.interruption
            _message = self.messageInterruption + str(e)
            print('error: '+ str(e))
        return responseEntity(_status,_message,_entity).toJSON()