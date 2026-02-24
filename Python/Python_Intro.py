# This is my first Python program (learning print function 0:00)
print("I like macaroni")
print("It's really good!")

# Part 2: 5:49 
# Variables: containers for a value (string, integer, float, boolean)
#            A variable behaves as if it was the value it contains 

# STRINGS  
first_name = "Jaida"
# Creating another variable "food" containing my favorite food 
food = "macaroni"
# Creating another variable "email" 
email = "jaidadorsey07@gmail.com"

# All of these variables are strings: a series of characters (they can include numbers but they are treated as characters )

# To print a variable within a print function you have to use a f-string & curly brackets surronding the variable 
print(f"Hello {first_name}")
print(f"You like {food}")
print(f"Your email is: {email}")

# INTEGERS 
age = 25    # Integers should not be in quotes, if you inclde quotes you cannot 
quantity = 3   # complete arithmetic expressions 
num_of_students = 30 

# printing integers 
print(f"You are {age} years old")
print(f"You are buying {quantity} items")
print(f"Your class has {num_of_students} students")

# FLOATS 
price = 10.99
gpa = 3.2 
distance = 5.5 

# printing floats 
print(f"The price is ${price}")
print(f"Your gpa is: {gpa}")
print(f"You ran {distance}km")

# BOOLEAN (Logical: True or False)
is_student = False
for_sale = True 
is_online = True 
# printing booleans 
print(f"Are you a student?: {is_student}")

# it is unlikely to see booleans used explicitly like this, you will usually see them in if statements 
# For example: 

if is_student:
    print ("You are a student")
else: 
    print("You are NOT a student")

# Or: 

if for_sale: 
    print("That item is for sale")
else: 
    print("That item is not available")

# Or: 

if is_online:
    print("You are online")
else:
    print("You are offline")
    