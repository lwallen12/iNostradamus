import json
import pymysql

conn = pymysql.connect(host='test1.ce8cn9mhhgds.us-east-1.rds.amazonaws.com', user='Wallen', passwd='MyRDSdb1', db='nostradamus')
myCursor = conn.cursor()


#mystaticmessage = "Insert with Dan here"
myCursor.execute("""SELECT * FROM variablechar""")

myResult = myCursor.fetchall()

myResultString = str(myResult)

print(type(myResult))
print(type(myResult[1]))

i = 0

for x in myResult:
    print(x)

print('-----------')


myResultList  = list(myResult)

print('-----------')
print(type(myResultList))


print(myResultList[0][0])
#print(myResultList[0][1]) ERROR
print(myResultList[1][0])

myNewList = []
i = 0
for x in myResultList:
    myNewList.append(myResultList[i][0])
    i += 1

print('--------------------')
print(myNewList)


print(type(myNewList[0]))
print(type(myNewList))


PassableList=[]

j = 0

for x in myNewList:
    PassableList.append({"message": myNewList[j]})
    j += 1

print('--------------------')


JSONPayload = {}

JSONPayload[1] = PassableList

JSON = json.dumps(JSONPayload)

print(JSON)



    
    
