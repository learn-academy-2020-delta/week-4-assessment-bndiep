# ASSESSMENT 4: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.  

1. What is an instance variable in Ruby? How is it different from other variables?

  Your answer: An instance variable is one that lives inside a class and is local to that class' methods. Unlike JavaScript functions, it does not need to be declared with a keyword. Instance variables are named with an '@' symbol. They can be of any data type and can reassigned later to be of another data type.

  Researched answer: An instance varaible has a name beginning with '@' and is confined to what object self refers to. They have the nil value until they are initialized and are do not need to be decalred. Each instance variable is dynamically appended to an object when it is first referenced. They stored data. Every object has its own scope so whenever a object contains instance variables that have been assigned, those variables can be used anywhere within the object, whereever there is a method. With that being said, instance variables cannot be accessed outside of its class. This is called encapsulation, in which the object's data is protected from the outside its scope.



2. What is a block in Ruby?

  Your answer: Blocks are anonymous, built-in methods in Ruby that are most frequnetly used. Some examples are .times or .map.

  Researched answer: Blocks are essentially methods that do not have a name and do not belong to an object. They are anonymous pieces of code that can accept input in the form of arguments and return a value. Blocks can only be created by passing them to a method when the method is called. They allow users to write more flexible code and are easy to read. The block is defined after the method call in between the do and end keywords. They consist of chunks of code.



3. Ruby has an implicit return. What does that mean?

  Your answer: Ruby recongizes that the last line of a block before then end will be returned. This means that the keyword 'return' is not required because it implied that the line will return. To explicitly return, the user can then use the 'return' keyword.

  Researched answer: When the keyword 'return' is not explicity called with a method in Ruby, the value of the last executed instruction/evaluation in the method definition is called an implicit return. It is common to not use the 'return' keyword in favor of minimal code. Using an explicit return can stop the entire method too soon or it can lead to errors.



4. What is object-oriented programming? How is it different than functional programming?

  Your answer: In object-oriented programming, all the data being manipulated are objects. Objects contain methods that can be invoked onto variables that are not declared with a keyword. Functional program works with different data types but the variables need to be declared first with the keyword let, var, or const. It also emphasizes the importance of logic and creating functions to manipulate data.

  Researched answer: OOP is a computer programming model that organizes software design around data or objects rather than functions and logic. An object is defined as a data field that has unique attributes and behavior. This model focuses on manipulating objects rather than manipulation by logic. OOP allows for code reusability, scalability, and efficiency. In functional programming, data cannot be stored in objects and can only be altered by creating functions. It attempts to avoid changing state and mutable data. The output of a function should always be the same with the same inputs of the function. Functions purely rely on the arguments of the function, so if a user provides the same arguments for a function, the output of the function will always be the same. It is very logic based. In OOP, objects represent the tangeable thing the user is programming. Objects hold data about them in attributes and these attributes can be manipulated through methods that are given to that object. The biggest difference is that OOP has the ability to encapsulate data from outside access so it can hide variables from within its class--which is great for security. One issue with OOP though is that it is not reusable unlike functional programming. Most functions depend on the class that is using them so another class cannot use the same functions. One issue with functional programming is that its purely data manipulation so it can challenging to convert real world scenarios into data if emperical data doesn't quite exist or requires some creative thinking.



5. What is the difference between a class and an object?

  Your answer: A class is the data and behavior of an object. It contains all the properties and methods of an object. An object is an instance of a class. It is made up of properties or key-value pairs. An object can have functions within it's properties as well.

  Researched answer: In Ruby, an object is any piece of data like the value 1 or the string 'hello', while a class is the kind of data like integer or string. A class is a blueprint from which objects are created. An object is an instance of a class. In Ruby, a class a defined by the keyword class followed by the name of the class, with the first letter being capitalized. The class is terminated with the end keyword and all the data is defined between the class definition/name and the end. Methods that can act on objects are defined within the class. New objects are created my initializing a variable to a class using the new method like object_name = Class_name.new



6. STRETCH: What is `attr_accessor`?

  Your answer: I'm not sure, but from the way it is written, this looks like a method that accesses something. I will make sure to research what it does.

  Researched answer: Stands for attribute accessor. Instance varaibles cannot be accessed outside its class. Encapsulation is when an object's data is protected from the outside world. To access or expose the instance varaible to the outside word, attribute accessors are necessary. Only methods can access instance variables--a NoMethodError will appear if the user attempts to retrieve the variable outside its scope. A simple shortcut to the getter methods (to retrieve the instance variable) is attr_accessor :instance_variable_name. It essentially sets up getters and setters for instance variables.



## Looking Ahead: Terms for Next Week
- PostgreSQL - the world's most advanced open source database management system that uses and extends the SQL(structured query language--used to communicate with a database) language combined with many features that safely store and scale the most complicated data workloads; it offers modern features such as complex queries, foreign keys, reiggers, updatable views, transactional integrity, and multiversion concurrency control
- API - application programming interface which defines the interactions between multiple software intermediaries; defines the kinds of calls or requests that can be made, how to make them, the data formats that should be used. the conventions to follow
- CRUD - create, read, update, and delete which are the four basic functions of persistent storage/functionality of an API; common in construting web apps because it provides a memorable framework for developers to create full, usable models
- Ruby on Rails - a web application development framework written in Ruby; designed to amek programming web apps easier while also allow developers to write less code while accomplishing more than other programming languages and frameworks; has 2 main philosphies: DRY and convention over configuration
- ORM - object-relational mapping which is a programming technique for converting data between incompatible type systems using OOP; it creates a virtual object database that can be used from within the programming language; allos the developer to write queries in a preferred programming language rather than in SQL
- Active Record - the model in the Model-View-Controller (design software pattern used for developing UI that divides logic into 3 interconnected elements) method which is the layer of system responsible for representing business data nad logic; objects can carray persistent data and behavior which operates on data; it is an approach to accessing data in a database
