import pymysql

# connect to the MySQL server
mydb = pymysql.connect(
    host="localhost",
    user="root",
    password="password"
)

# create a new database
mycursor = mydb.cursor()
mycursor.execute("CREATE DATABASE formjsdb")

# connect to the new database
mydb = pymysql.connect(
    host="localhost",
    user="root",
    password="password",
    database="formjsdb"
)

# create a new table
mycursor = mydb.cursor()
mycursor.execute("CREATE TABLE formjstable (fname VARCHAR(255), lname VARCHAR(255), email VARCHAR(255), dob VARCHAR(255), gender VARCHAR(255), adl1 VARCHAR(255), adl2 VARCHAR(255), city VARCHAR(255), state VARCHAR(255), country VARCHAR(255), zipcode INT)")
