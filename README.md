
qmin.js
========

A very minimal $ / jQuery implementation with plugin support.  

Only three methods
are provided: find, map, and forEach.  $() also return a $ instance,
so the "instanceof" operator still works with $.

1. .find() implements the jQuery searching behavior that most 
   people are familiar with.  Namely .find() starts searching from the 
   parent node, not the document root as querySelectorAll() does.

   In order to ensure the jQuery behavior is performed,
   qmin.js creates a temporary class on the parent.  Next
   it adds the temporary class name to the beginning of the selector.
   This is the selector qmin.js then uses to perform the selector search.
  
2. .forEach() loops through all the element nodes contained in
   the $ instance.  The method returns the $ instance.

3. .map() loops through all the elements like .forEach() does,
   but returns instead a $ instance of all the elements returned by
   the callback function.
    
Plugins
==========

The $.fn property as in jQuery serves as the prototype for
a $ instance.  For example to add an .on() method to the
instance you can use:

      $.fn.on = function(name, callback){
          return this.forEach(function(el){
              el.addEventListener(name, callback);
          })
      };

Now you can write:

      $(document).on('click', el => {});

Callback Argument
==================

Both .find() and $() support a callback function as the second
argument.  This provides a functional shortcut instead of chaining 
using .forEach().

So instead of writing $('#app').forEach(el => {}) you can call:

      $('#app', el => {});




