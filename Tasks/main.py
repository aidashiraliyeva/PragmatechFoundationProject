programMenusu="""
    ----Proqram Menusu----
    1- Qeydiyyatdan keç
    2- Daxil ol
    
"""

"""
1- Qeydiyyatdan keç
"""
users=[]
class User:
    def __init__(self,_id,_ad,_soyad,_email,_username,_password):
        self.Id=_id
        self.Ad=_ad
        self.Soyad=_soyad
        self.email=_email
        self.username=_username
        self.password=_password
        users.append(self)

    def showuser(self):
        print(f'{self.Id} nömrəli user : {self.ad} | {self.soyad} | {self.email}')

def QeydiyyatdanKec():
    def yeniUser():
        global id
        ad=input('Ad : ')
        soyad=input('Soyad : ')
        email=int(input('Email :'))
        username = int(input('Username :'))
        password = int(input('Password :'))

        User(id,ad,soyad,email)
        id+=1

while True:
        emr=input('Qeydiyyatdan kecmek ucun 1 daxil edin (1/2) :')
        if(emr=='1'):
            yeniUser()
        else:
            break

def Usersiyahisi():
    for user in users:
        user.showuser()


"""
2- Daxil Ol
"""

def DaxilOl():
    username = int(input('Username :'))
    password = int(input('Password :'))

while True:
        emr=input('Sistemə daxil olmaq üçün 2 daxil edin (1/2) :')
        if(emr=='2'):
            DaxilOl()
        else:
            break

            ad = input('Ad : ')
            soyad = input('Soyad : ')
            email = input('Email : ')
            username = int(input('Username :'))
            password = int(input('Password :'))