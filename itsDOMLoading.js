var itsDOMLoading = {
    version: "0.2b",
    triggers: {},
    observer: null,
    scope: "body",

    addTrigger: function(selector, callback){
        this.triggers[selector] = callback;
    },

    listen: function(){
        var MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
        var config = { attributes: true, childList: true, characterData: true };
        this.observer = new MutationObserver(function(mutations){
            mutations.forEach(function(mutation){
                $.each(mutation.addedNodes, function(index, node){
                    for(key in itsDOMLoading.triggers){
                        if($(node).is(key)){
                            itsDOMLoading.triggers[key].call(node);
                        }
                    }
                });
            });
        });

        $.each($(itsDOMLoading.scope), function(i, element){
            this.observer.observe(element, config);
        }.bind(this));
    }
}
