#First News

Hello World!!!!

    export default (selector) => {
      var nodes = Array.from(document.querySelectorAll(selector));
    
      Object.assign(nodes, {
        first ()  { return this[0]; },
        last () { return this[this.length-1]; }
      })
    
      return nodes;
    }
