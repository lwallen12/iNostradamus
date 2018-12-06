import json
import pymysql

#Going to try and run this from Lambda

def lambda_handler(event, context):
    ThaJSONobj = json.dumps(event)

    mystaticmessage = event["message"]
    
    conn = pymysql.connect(host='test1.ce8cn9mhhgds.us-east-1.rds.amazonaws.com', user='Wallen', passwd='MyRDSdb1', db='nostradamus')
    myCursor = conn.cursor()
    #mystaticmessage = "A Message from Python Lambda"    
    myCursor.execute("""INSERT INTO variablechar (message) VALUES (%s)""", (mystaticmessage))
    conn.commit()
    conn.close()
    return mystaticmessage + ' inserted into rds'

#event = 'EVENT'
#context = 'Context'

#lambda_handler(event, context)
