window.itsDOMLoading = (function() {

    var itsDOMLoading = {
        version: "0.3",
        triggers: {},
        observer: null,
        scope: "body",
        selector: $ || function(selector, el) {
            return (el || document).querySelectorAll(selector);
        },

        addTrigger: function(selector, callback){
            this.triggers[selector] = callback;
        },

        listen: function(){
            var MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
            var config = { attributes: true, childList: true, characterData: true };
            this.observer = new MutationObserver(function(mutations){
                mutations.forEach(function(mutation){
                    var added = [].slice.call(mutation.addedNodes, 0);
                    added.forEach(function(node){
                        for(var key in itsDOMLoading.triggers){
                            if (itsDOMLoading.triggers.hasOwnProperty(key) &&
                                    matches(node, key)){
                                itsDOMLoading.triggers[key](node);
                            }
                        }
                    });
                });
            });

            (itsDOMLoading.scope.nodeType ?
                [itsDOMLoading.scope] :
                query(this.scope)
            ).forEach(function(element){
                this.observer.observe(element, config);
            }.bind(this));
        }
    };

    var matches = function(element, selector){
        var parent = element.parentNode;
        var els = query(selector, parent);
        return els.indexOf(element) > -1;
    };

    var query = function(selector, parent){
        return [].slice.call(itsDOMLoading.selector(selector, parent) || [], 0);
    };

    return itsDOMLoading;
})();
