import json
import pymysql

def lambda_handler(event, context):

    conn = pymysql.connect(host='test1.ce8cn9mhhgds.us-east-1.rds.amazonaws.com', user='Wallen', passwd='MyRDSdb1', db='nostradamus')
    myCursor = conn.cursor()

    myCursor.execute("""SELECT * FROM variablechar""")
    myResult = myCursor.fetchall()

    myResultList  = list(myResult)

    myNewList = []
    i = 0

    for x in myResultList:
        myNewList.append(myResultList[i][0])
        i += 1

    PassableList=[]

    j = 0

    for x in myNewList:
        PassableList.append({"message": myNewList[j]})
        j += 1

    print(PassableList)
    print('------')


    JSONPayload = {}

    JSONPayload["Items"] = PassableList
    JSON = json.dumps(JSONPayload)
    print(JSON)

    return JSON

event = 'e'
context = 'c'

lambda_handler(event, context)
