(function(){
    function AjaxEvent(){
        this.eventList = {};
    };
    AjaxEvent.prototype = {
        constructor: AjaxEvent,
        commit : function(flagReady,value){
            var that = this;
            if(that.eventList[flagReady]){
                var list = that.eventList[flagReady];
                    len = list.length;
                for(var i=0; i<len; i++){
                   for(var key in list[i]){
                     list[i][key].call(Component.componentObj[key],value);
                   }
                }
            }else{
               console.log('找不到对应的注册事件依赖该模块====>',flagReady);
            }
        },
        on : function(flag,fn,triggerKey){
            var that = this,
                eventObj = {};
            if(!that.eventList[flag]){
              that.eventList[flag] = [];
            }
            eventObj[triggerKey] = fn;
            that.eventList[flag].push(eventObj);
        }

    };
    window.AjaxEvent = new AjaxEvent;
})();

