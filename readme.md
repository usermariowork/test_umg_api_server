# **Cloud Computing - Tarea 1 y actividad 2**

### **Using 5 post and 5 get methods**

Here we have 5 post methods and 5 get methods fron api.toys

## **Documentation**

#### You can use http://localhost:8080/ for all methods, here we have 13 options including the ones that we did during class but I will only cover the documentation for the 5 post and 5 get main methods

# **GET**

### We can play rock, paper scissors against the computer 

-Choose paper
-Choose rock
-Choose scissors

```
GET http://localhost:8080/rock/
```

### **RESPONSE EXAMPLE**

```
{
    "cpu": "scissors",
    "player": "",
    "winner": ""
}
```

### With this option you are just getting the response of the computer but we have a post method in whic you can send your option through the API (rock/paper/scissors)




### We can get dialing codes

-Get dialing codes

```
GET http://localhost:8080/dialingcodes
```

### **RESPONSE EXAMPLE**

```
We got a lot of lines of code so we will skip the example unu
```





### We can get our random medieval name!

-Get a medieval name

```
GET http://localhost:8080/medievalname
```

### **RESPONSE EXAMPLE**

```
{
    "results": [
        "Louve+wolf"
    ]
}
```

### With this option you are just getting a single medieval name but we have a post method in wich we can send the number of medieval names we want








### We can do a coinflip

-Do a coinflip
-get heads
-get tails

```
GET http://localhost:8080/coinflip
```

### **RESPONSE EXAMPLE**

```
{
    "result": "tails"
}
```





### We can do a diceroll

-Do a diceroll
-Get 1
-Get 2
-Get 3
-Get 4
-Get 5
-Get 6


```
GET http://localhost:8080/diceroll
```

### **RESPONSE EXAMPLE**

```
{
    "dice": "d6",
    "rolls": [
        2
    ]
}
```





---

# **POSTS**

### You have to use postman to give a JSON so we can do a POST request


### We can play rock, paper, scissors

### **REQUEST URL**

```
http://localhost:8080/rockpost
```

### **REQUEST BODY:**

```
{
    "text" : "rock"
}
```

#### We must put rock, paper or scissors in the request body so we get a correct response


### **RESPONSE BODY**

```
{
    "cpu": "rock",
    "player": "rock",
    "winner": "draw",
    "move": ""
}
```
### We can have a different response body depending on what the computer answered and if you won the game or not







### We can get dialing codes

### **REQUEST URL**

```
http://localhost:8080/dialingpost
```

### **REQUEST BODY:**

```
{
    "text" : "numeric"
}
```

#### We must put numeric, alpha-2, alpha-3, etc.


### **RESPONSE BODY**

```
There is a lot of lines so we will skip this one
```
### We can have a different response body






### We can get several medieval names

### **REQUEST URL**

```
http://localhost:8080/medievalpost
```

### **REQUEST BODY:**

```
{
    "text" : "5"
}
```

#### We must put the number of names we want


### **RESPONSE BODY**

```
{
    "results": [
        "Amfrid",
        "Imbart",
        "Gilbert",
        "Phareman"
    ]
}
```
### We can have a different response body










### We can get several medieval names

### **REQUEST URL**

```
http://localhost:8080/medievalpost
```

### **REQUEST BODY:**

```
{
    "text" : "5"
}
```

#### We must put the number of names we want


### **RESPONSE BODY**

```
{
    "results": [
        "Amfrid",
        "Imbart",
        "Gilbert",
        "Phareman"
    ]
}
```
### We can have a different response body









### We can get several wormnames

### **REQUEST URL**

```
http://localhost:8080/wormpost
```

### **REQUEST BODY:**

```
{
    "text" : "5"
}
```

#### We must put the number of names we want


### **RESPONSE BODY**

```
{
    "results": [
        "Ether Trogg",
        "GranPC",
        "Ivan V",
        "Clapper"
    ]
}
```
### We can have a different response body











### We can get random characters

### **REQUEST URL**

```
http://localhost:8080/character
```

### **REQUEST BODY:**

```
{
    "text" : "human"
}
```

#### We must put "human", "charr", "asura", "norn", "sylvari".


### **RESPONSE BODY**

```
{
    "species": "human",
    "gender": "female",
    "age": 60,
    "class": "ranger",
    "mastery": "soulbeast",
    "professions": [
        "Weaponsmith",
        "Huntsman",
        "Artificer",
        "Scribe"
    ],
    "body": {
        "height": "Average",
        "shape": "Overweight"
    },
    "starting_gear": "stalker",
    "personality": "dignity",
    "personal_story": {
        "stage1": "nobility",
        "stage2": "missed opportunity",
        "stage3": "kormir"
    },
    "order": "vigil"
}
```
### We can have a different response body



