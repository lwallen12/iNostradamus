import json
import pymysql

def lambda_handler(event, context):

    conn = pymysql.connect(host='test1.ce8cn9mhhgds.us-east-1.rds.amazonaws.com', user='Wallen', passwd='MyRDSdb1', db='nostradamus')
    myCursor = conn.cursor()

    myCursor.execute("""SELECT * FROM variablechar""")
    myResult = myCursor.fetchall()

    print('---myResult-----')
    print(type(myResult))
    print(myResult)

    myResultList  = list(myResult)

    print('--------myResultList=-----')
    print(type(myResultList))
    print(myResultList)

    myNewList = []
    i = 0

    print(myResultList[1][0])

    for x in myResultList:
        myNewList.append(myResultList[i][0])
        i += 1

    print('--MyNewList----')
    print(type(myNewList))
    print(myNewList)


    PassableList=[]

    j = 0

    for x in myNewList:
        PassableList.append({"message": myNewList[j]})
        j += 1


    print('----PassableList----')
    print(type(PassableList))
    print(PassableList)
    print('------')

    print('------finalresult----')


    JSONPayload = {}

    JSONPayload["Items"] = PassableList
    JSON = json.dumps(JSONPayload)
    print(JSON)


    print('-----------')
    print('-----------')
    print('-----------')
    print('-----------')
    Dumps = json.dumps(myResult)
    print(Dumps)
    print('---Dumps myResult----')

    return myResultList

event = 'e'
context = 'c'

lambda_handler(event, context)
