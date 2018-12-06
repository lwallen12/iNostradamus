import json


def lambda_handler(event, context):

    JSONTutorial = str({"Items":[{"date":1541033186981,"message":"Dan doesn't now how too spell"},{"date":1541990955844,"message":"TEST"},{"date":1541903878860,"message":"value 4"},{"date":89,"message":"manually insterted"},{"date":11111,"message":"\"also manually insterted\""},{"date":1541991177422,"message":"I THINK THIS MADE IT TO MYSQL!"}],"Count":6,"ScannedCount":6})
    
    myJSON = {"HardCodedJSON":
        [
            {"Item":"Value1"},
            {"Item":"Value2"},
            {"Item":"Value3"}
        ]
        
        }

    #print(myJSON)
    
    return JSONTutorial

#event = 'e'
#context = 'c'

#lambda_handler(event, context)
