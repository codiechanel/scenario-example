var mobx = require('mobx')
var { observable, autorun } = mobx
const map = observable.map({ key: "initial value" });

var disposer = autorun(() => {
  console.log("Invoked:", map.get("key"));
})

map.set("key", "new value");
