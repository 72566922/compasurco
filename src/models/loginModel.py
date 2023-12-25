from src.cn.data_base_connection import Database
from src.models.dbModel import dbModel
from src.entities.loginEntity import loginEntity

class loginModel(dbModel):

    def _init_(self):
        dbModel._init_(self)

    
    
    def get_login(self):
        _db = None
        _data = []
        try:
            _db = Database()
            _db.connect(self.host,self.port,self.user,self.password,self.database)
            print('Se conecto a la bd')
            _con_client = _db.get_client() #nombre de la tabla

            _sql = """SELECT l.usuario_login, 
                    l.contraseña_login
                FROM    main.login l; """   

            _cur = _con_client.cursor()
            _cur.execute(_sql,)
            _rows = _cur.fetchall()
        
            for row in _rows:
                _entity  = loginEntity()
                _entity.usuario_login = row[0]
                _entity.contraseña_login = row[1]
                _data.append(_entity)

            _cur.close()
        except(Exception) as e:
            print(str(e))
            #self.add_log(str(e),type(self)._name_)
        finally:
            if _db is not None:
                _db.disconnect()
                print("Se cerro la conexion")
        return _data
    
    def add_login(self,entity):
        _db = None
        _data = []
        try:
            _db = Database()
            _db.connect(self.host,self.port,self.user,self.password,self.database)
            print('Se conecto a la bd')
            _con_client = _db.get_client()

            _sql = """insert into main.login(usuario_login, contraseña_login)
                    values(%s,%s); """   

            _cur = _con_client.cursor()
            _cur.execute(_sql,(entity.usuario_login,entity.contraseña_login))
            _con_client.commit()
            _cur.close()
        except(Exception) as e:
            print(str(e))
            #self.add_log(str(e),type(self)._name_)
        finally:
            if _db is not None:
                _db.disconnect()
                print("Se cerro la conexion")
        return entity

    def update_login(self,entity):
        _db = None
        _data = []
        try:
            _db = Database()
            _db.connect(self.host,self.port,self.user,self.password,self.database)
            print('Se conecto a la bd')
            _con_client = _db.get_client()

            _sql = """update main.login
                    set usuario_login  = %s
                    where contraseña_login = %s;"""   

            _cur = _con_client.cursor()
            _cur.execute(_sql,(entity.usuario_login,entity.contraseña_login))
            _con_client.commit()
            _cur.close()
        except(Exception) as e:
            print(str(e))
            #self.add_log(str(e),type(self)._name_)
        finally:
            if _db is not None:
                _db.disconnect()
                print("Se cerro la conexion")
        return entity

    def delete_login(self,contraseña_login):
        _db = None
        try:
            _db = Database()
            _db.connect(self.host,self.port,self.user,self.password,self.database)
            print('Se conecto a la bd')
            _con_client = _db.get_client()

            _sql = """DELETE FROM main.login
                    WHERE contraseña_login = %s;"""   

            _cur = _con_client.cursor()
            _cur.execute(_sql,(contraseña_login,))
            _con_client.commit()
            _cur.close()
        except(Exception) as e:
            print(str(e))
            #self.add_log(str(e),type(self)._name_)
        finally:
            if _db is not None:
                _db.disconnect()
                print("Se cerro la conexion")
        return contraseña_login
    
    def get_login_by_id(self,contraseña_login):
        _db = None
        _entity = None
        try:
            _db = Database()
            _db.connect(self.host,self.port,self.user,self.password,self.database)
            print('Se conecto a la bd')
            _con_client = _db.get_client()

            _sql = """SELECT l.usuario_login,l.contraseña_login
                        FROM    main.login l
                        WHERE l.contraseña_login = %s;"""   

            _cur = _con_client.cursor()
            _cur.execute(_sql,(contraseña_login,))  
            _rows = _cur.fetchall()

            if(len(_rows) >= 0):
                _entity = loginEntity()
                _entity.usuario_login = _rows[0][0]
                _entity.contraseña_login = _rows[0][1]  

            _cur.close()
        except(Exception) as e:
            print(str(e))
            #self.add_log(str(e),type(self)._name_)
        finally:
            if _db is not None:
                _db.disconnect()
                print("Se cerro la conexion")
        return _entity
    


