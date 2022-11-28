# check AM or PM
# if AM print it => if 12 make it 00
# else if PM add 12 with it and print

# givenTime = str(input("enter 12H format time-string"))

def convertTimeFormat(giventime):
    length = len(giventime)
    timeString = giventime[0:length-2]
    extension = giventime[length - 2 : length]
    hh = timeString[0:2]
    result = ""
    if(extension == "AM"):
        if(int(hh) == 12):
            hh = "00"
        result = hh + timeString[2:len(timeString)]

    elif(extension == "PM"):
        if(int(hh) == 12):
            result = timeString
        else:
            hh = int(hh) + 12
            result = str(hh) + timeString[2:len(timeString)]
    
    print(result)


convertTimeFormat("12:05:00PM")