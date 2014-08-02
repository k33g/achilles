import Model from '../../Model';

class Content  extends Model {
  constructor (fields) {
    //superclass's constructor invocation
    super(fields, "data/contents.json");
  }
}

export default Content;