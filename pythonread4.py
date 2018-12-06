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

    JSONDumps = json.dumps(myResultList)

    print('JSONDumps: ' + JSONDumps)

    return JSONDumps

event = 'e'
context = 'c'

lambda_handler(event, context)
