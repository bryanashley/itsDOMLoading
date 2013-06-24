## itsDOMLoading
itsDOMLoading uses a Mutation Observer to allow for setting defined callbacks for specific selectors. This allows you to execute code whenever a specified element is added to the dom

## Usage
Currently itsDOMLoading is set to listen to the body, future versions will allow for changing the scope of the observer. To initialize itsDOMLoading, simply call itsDOMLoading.listen() when the page is loaded and define the triggers as shown.

On Page Load

    itsDOMLoading.listen();

Add Triggers like so 

    itsDOMLoading.addTrigger(".test", function(){
      console.log(this, "was added to the page, it has a class of test");
    });

The callback defined accepts the added node as "this" as a jQuery object.

## Dependencies
itsDOMLoading requires jQuery for selector matching.

## Notes
Because itsDOMLoading uses a Mutation Observer, it currently does not support IE/Opera.
    

## License
Copyright (c) 2013 Bryan Ashley, released under the MIT license.