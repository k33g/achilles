import r2 from './r2.dependency';
class Model {
  constructor (fields, url) {
    this.url = url !== undefined ? url : "";
    this.fields = fields !== undefined ? fields : {};
  }

  get (fieldName) {
    return this.fields[fieldName];
  }

  set (fieldName, value) {
    this.fields[fieldName] = value;
    return this;
  }

  id() { return this.get("_id");}

  save () {
     return this.id() == undefined
       ? new r2.Request(this.url).post(this.fields).then((data) => { this.fields = data; })
       : new r2.Request(`${this.url}/${this.id()}`).put(this.fields).then((data) => { this.fields = data; });
  }

  fetch (id) {
    return id == undefined
      ? new r2.Request(`${this.url}/${this.id()}`).get().then((data) => { this.fields = data; })
      : new r2.Request(`${this.url}/${id}`).get().then((data) => { this.fields = data; });
  }

  delete (id) {
    return id == undefined
      ? new r2.Request(`${this.url}/${this.id()}`).delete().then((data) => { this.fields = data; })
      : new r2.Request(`${this.url}/${id}`).delete().then((data) => { this.fields = data; });
  }
}

export default Model;

