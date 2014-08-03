import Router from '../Router';
import Human from './models/Human';
import Humans from './models/Humans';

var router = new Router();

router.add("/humans/{v}", (args)=>{
  console.log("one human", args);
  var human = new Human();
  human.fetch(args[0]).then(() => { console.log(human); });

})

router.add("/humans", (args)=>{
  console.log("all humans", args);
  var humans = new Humans();
  humans.fetch().then(() => { console.log(humans.models); });
})

/*<a href="#/">router.match("/");</a><br>*/

router.add("/", (args)=>{
  console.log("===HOME===")
})


/*<a href="#">router.match("");</a><br>*/
router.add("", (args, hash)=>{ //all
  console.log("###===SomeThingElse===###", args, hash)
})


router.listen()




