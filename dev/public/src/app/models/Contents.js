import Collection from '../../Collection';
import Content from './Content';

class Contents extends Collection {

  constructor (contents) {
    super(Content,"data/contents.json",contents);
  }
}

export default Contents;