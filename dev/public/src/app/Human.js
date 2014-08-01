import Model from '../Model';

class Human  extends Model {
  constructor (fields) {
    //superclass's constructor invocation
    super(fields, "/humans");
  }
}

export default Human;