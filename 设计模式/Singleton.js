function Universe() {
    if(typeof Universe.instance === "object"){
        return Universe.instance
    }
    Universe.instance = this;
    return this
}

var uni1 = new Universe();
var uni2 = new Universe();