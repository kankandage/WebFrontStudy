
function bindEvent(obj,event,fn){
    if(obj.addEventListener){
        obj.addEventListener(event,fn,false);
    }else{
        obj.attachEvent('on'+event,fn);
    }
}

//获取class
function getByClass(oparent,sClass){
    var arr = [];
    var elems = oparent.getElementsByTagName('*');
    for(var i=0;i<elems.length;i++){
        if(elems[i].className == sClass){
            arr.push(elems[i]);
        }
    }

    return arr;
}

function toArray(elems){
    var arr = [];
    for(var i=0;i<elems.length;i++){
        arr.push(elems[i]);
    }

    return arr;
}

function Vquery(vArg){
    //vArg:function,

    this.elements = []; //选择元素的集合

    switch(typeof vArg){
        case 'function':
            //window.onload =vArg;
            //绑定事件
            bindEvent(window,'load',vArg);
        break;
        case 'string':
            switch(vArg.charAt(0)){
                //varg:'#div1'
                case '#': //id
                  this.elements.push(document.getElementById(vArg.substring(1)));
                break;
                case '.' ://class
                    this.elements = getByClass(document,vArg.substring(1));
                break;
                default: //tag
                    //document.getElementsByTagName(vArg)返回类数组
                    this.elements = toArray(document.getElementsByTagName(vArg));
                break;
                case 'object':
                    this.elements.push(vArg);
                break
            }
        break;
    }
}

Vquery.prototype.css = function(){};

Vquery.prototype.html = function(str){
    if(str){
        for(var i=0;i<this.elements.length;i++){
            this.elements[i].innerHTML = str;
        }
    }else{
        return this.elements[0].innerHTML;
    }
    
};


function $(vArg){
    return new Vquery(vArg);
}