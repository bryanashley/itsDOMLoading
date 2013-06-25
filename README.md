## itsDOMLoading
itsDOMLoading uses a Mutation Observer to allow for setting defined callbacks for specific selectors. This allows you to execute code whenever a specified element is added to the dom

## Usage
Currently itsDOMLoading is set to listen to the body. To change the scope, set a selector or a node like so:

	itsDOMLoading.scope = '.myClass';
	\\ or
	itsDOMLoading.scope = myNode;

To initialize itsDOMLoading, simply call itsDOMLoading.listen() when the page is loaded and define the triggers as shown.

On Page Load

    itsDOMLoading.listen();

Add Triggers like so

    itsDOMLoading.addTrigger(".test", function(node){
      console.log(node, "was added to the page, it has a class of test");
    });

The callback defined accepts the added node as the first argument.

## Dependencies
selector will use the $ object if available otherwise document.querySelectorAll.
You can change this like so:

     itsDOMLoading.selector = mySelectorFunction

## Notes
Because itsDOMLoading uses a Mutation Observer, it currently does not support IE/Opera.


## License
Copyright (c) 2013 Bryan Ashley, released under the MIT license.