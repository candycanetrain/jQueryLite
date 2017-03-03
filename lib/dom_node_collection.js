class DOMNodeCollection {
  constructor(arrayOfHTMLElements){
    this.arr = arrayOfHTMLElements;

  }

  html(string){
    if (string) {
      this.arr.forEach( (el) => {
        el.innerHTML = string;
      });
    }else {
      return this.arr[0];
    }
  }

}

module.exports = DOMNodeCollection;
