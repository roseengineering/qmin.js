
(function (global, factory) {
    if (typeof module === 'object') {
        module.exports = factory();
    } else {
        global.$ = factory();
    }
}(this, function(){
    'use strict';
    var $ = function(sel, cb){
            var i, ob = Object.create(fn);
            if (!sel) sel = []
            else if (typeof sel === 'string') 
                sel = document.querySelectorAll(sel); 
            else 
                sel = Array.isArray(sel) ? sel : [sel];
            for (i = 0; i < sel.length; i++) ob[i] = sel[i];
            ob.length = i;
            return cb ? ob.forEach(cb) : ob;
        },
        fn = $.fn = $.prototype;

    fn.map = function(callback){
        return $([].concat.apply([], [].map.call(this, callback)));
    };
    fn.forEach = function(callback){
        [].forEach.call(this, callback);
        return this;
    };
    fn.find = function(sel, cb){
        var list, root = '_5e241cdb8',
            ob = this.map(function(el){
                el.classList.add(root);
                list = $('.' + root + ' ' + sel);
                el.classList.remove(root);
                return [].slice.call(list);
            });
        return cb ? ob.forEach(cb) : ob;
    };
    return $;
}));

