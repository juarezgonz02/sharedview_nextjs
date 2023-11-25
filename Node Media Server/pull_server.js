import md5 from 'md5'
import NodeMediaServer from 'node-media-server'
import { pull_config as config } from "./nms_configs.js";

const nms = new NodeMediaServer(config)

//TODO: FETCH API FOR CODE 
 
const consult_api_for_room = async (streamPath, args) => {
  
  //TODO: change path to /checkroom/{stream} 
  const stream = streamPath.substring(4) 

  const res = await fetch(`http://localhost/exproom/${stream}`)
  
  if(res.status == 200){
    return true
  }else {
    return false
  }

}

const generate_room_hash = (StreamPath, args) => {
  return md5(`${StreamPath}-${args.expiration}-nodemediahls`)
}

nms.on('prePublish', async (id, StreamPath, args) => {
   
  console.log('\n[NodeEvent on prePublish]', `id=${id} StreamPath=${StreamPath} args=${JSON.stringify(args)}`);
  
  let session = nms.getSession(id);

  if(!await consult_api_for_room(StreamPath, args)){
    session.reject()
  }
  
  if(args.sign == undefined && args.expiration == undefined ){
    session.reject(); 
  }

  const hash = generate_room_hash(StreamPath, args)
  
  if(args.sign != `${args.expiration}-${hash}` ){
    session.reject(); 
  }

});

nms.on('prePlay', (id, StreamPath, args) => {
  console.log('[NodeEvent on prePlay]', `id=${id} StreamPath=${StreamPath} args=${JSON.stringify(args)}`);
 // let session = nms.getSession(id);
});


export default nms


