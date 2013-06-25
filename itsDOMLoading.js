window.itsDOMLoading = (function() {

    var itsDOMLoading = {
        version: "0.3",
        triggers: {},
        observer: null,
        scope: "body",
        selector: $ || document.querySelectorAll,

        addTrigger: function(selector, callback){
            this.triggers[selector] = callback;
        },

        listen: function(){
            var MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
            var config = { attributes: true, childList: true, characterData: true };
            this.observer = new MutationObserver(function(mutations){
                mutations.forEach(function(mutation){
                    var added = [].slice.call(mutation.addedNodes, 0);
                    added.forEach(function(index, node){
                        for(key in itsDOMLoading.triggers){
                            if(matches(node, key)){
                                itsDOMLoading.triggers[key](node);
                            }
                        }
                    });
                });
            });

            (itsDOMLoading.scope.nodeType ?
                [itsDOMLoading.scope] :
                query(scope)
            ).forEach(function(element){
                this.observer.observe(element, config);
            }.bind(this));
        }
    };

    var matches = function(element, selector){
        var parent = element.parentNode;
        var els = itsDOMLoading.selector(selector);
        return els.indexOf(element) > -1;
    };

    var query = function(selector){
        return [].slice.call(itsDOMLoading.selector(selector), 0);
    };

    return itsDOMLoading;
})();
