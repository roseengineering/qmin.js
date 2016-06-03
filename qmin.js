
(function (global, factory) {
    if (typeof module === 'object') {
        module.exports = factory();
    } else {
        global.$ = factory();
    }
}(this, function(){
    var $ = function(sel, cb){
            var el, i, k, n = 0, ob = Object.create(fn);
            sel = sel || [];
            if (typeof sel === 'string') sel = document.querySelectorAll(sel); 
            else sel = Array.isArray(sel) ? sel : [sel];
            for (i = 0; i < sel.length; i++){
                el = sel[i];
                if (el instanceof $) for (k = 0; k < el.length; k++) ob[n++] = el[k]; 
                else ob[n++] = el;
            }
            ob.length = n;
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
                return list;
            });
        return cb ? ob.forEach(cb) : ob;
    };
    return $;
}));

