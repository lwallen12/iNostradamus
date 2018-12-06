import json
import pymysql
import urllib

def lambda_handler(event, context):
    userID = event['userID']
    
    conn = pymysql.connect(host='test1.ce8cn9mhhgds.us-east-1.rds.amazonaws.com', user='Wallen', passwd='MyRDSdb1', db='nostradamus')
    myCursor = conn.cursor()

    myCursor.execute("""SELECT * FROM WSCHAMP2019 WHERE USER_WHOLE_NAME = %s""", userID)
    myResult = myCursor.fetchall()
    
    print(myResult)
    
    myResultList = list(myResult[0])
    print(myResultList)
    
    keyValueList = []
    
    keyValueList.append({"EntryID": str(myResultList[0]), "UserName": myResultList[1]})
    keyValueList.append({"WSWinner": myResultList[2], "SecondPlace": myResultList[3],"NumberGames": myResultList[4],"MVP": myResultList[5],
                         "TacoStealer": myResultList[6],"MostHomers": myResultList[7],"Why": myResultList[8],"Comments": myResultList[9]})

    
        
    print(keyValueList)
        
    JSONInit = {}
    
    JSONInit["Predictions"] = keyValueList
    
    print(JSONInit)

    return JSONInit
    
    #No need to encode the JSON, Lambda does it for us, the following two lines
    #are for checking only
    #JSON = json.dumps(JSONInit)
    #print(JSON)
    
    
#event = 'e'
#context = 'c'

#lambda_handler(event, context)
