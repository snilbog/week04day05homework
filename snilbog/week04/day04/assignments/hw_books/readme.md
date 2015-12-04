#SQL HW

For each item below figure out the approriate SQL. Create a text file that contains all of your answers and submit it in the Homework repo.

**READ THIS:** To have a more visual representation of your databases and tables, feel free to download [PG Commander (Mac)](https://eggerapps.at/pgcommander/) or [pgAdmin (Mac/Linux)](http://www.pgadmin.org/download/). These are GUI clients for your PostgreSQL server.

Also, if you can't connect to your database, make sure the server is running! (Running Postgres on Mac, or running `pgserver` on Linux)

##Getting Started

To get started we'll need to import the booktown.sql file.

1. open terminal
2. use the command `psql -f booktown.sql`
3. type `psql` to open your psql console
4. type \list to ensure the booktown database was successfully completed

##Submitting the Homework

* Write all of your SQL commands into a text file, and submit that file as your homework.

##Order
1. Find all subjects sorted by subject
2. Find all subjects sorted by location

##Where
1. Find the book "Little Women"
2. Find all books containing the word "Python"
3. Find all subjects with the location "Main St" sort them by subject


##Joins

1. Find all books about Computers list ONLY book title

* Find all books and display ONLY
	* Book title
	* Author's first name
	* Author's last name
	* Book subject

* Find all books that are listed in the stock table
	* Sort them by retail price (most expensive first)
	* Display ONLY: title and price

* Find the book "Dune" and display ONLY
	* Book title
	* ISBN number
	* Publisher name
	* Retail price

* Find all shipments sorted by ship date display ONLY:
	* Customer first name
	* Customer last name
	* ship date
	* book title

##Grouping and Counting

1. Get the COUNT of all books
* Get the COUNT of all Locations
* Get the COUNT of each unique location in the subjects table. Display the count and the location name. (hint: requires GROUP BY).
* List all books. Display the book_id, title, and a count of how many editions each book has. (hint: requires GROUP BY and JOIN)



####YAY! You're done!!
