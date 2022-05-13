let hello=(name)=> ( name == undefined || name == null || name == "") ? "Hello, World!" : "Hello, "
+ name.split("").map((x,i)=> i == 0 ? x = x.toUpperCase() : x = x.toLowerCase() ).join("") + "!"



/*

8kyu- Hello, Name or World!

Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

Examples:

* With `name` = "john"  => return "Hello, John!"
* With `name` = "aliCE" => return "Hello, Alice!"
* With `name` not given 
  or `name` = ""        => return "Hello, World!"

  https://www.codewars.com/kata/57e3f79c9cb119374600046b/train/javascript

  BEST SOLUTİONS
  --------------------------------------------------------------------------

  const hello = s =>
  `Hello, ${s ? (s[0].toUpperCase() + s.slice(1).toLowerCase()) : 'World'}!`;

  --------------------------------------------------------------------------

  function hello(name){
  if (name){
    return "Hello, " + name.substring(0,1).toUpperCase() + name.substring(1).toLowerCase() + '!';
  } else {
    return "Hello, World!";
  }
}

--------------------------------------------------------------------------