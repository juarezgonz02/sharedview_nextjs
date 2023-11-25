import md5 from 'md5'
import NodeMediaServer from 'node-media-server'
import { publish_config } from "./nms_configs.js";
import { pull_config_0, pull_config_1, pull_config_2 } from "./nms_configs.js";
import {config} from 'dotenv'

config()

const publish = new NodeMediaServer(publish_config)
const relay1 = new NodeMediaServer(pull_config_0)
 
const consult_api_for_room = async (streamPath) => {
  
  //TODO: change path to /checkroom/{stream} 
  const stream = streamPath.substring(6) 

  const API_ENV_URL = `${process.env.API_PROTOCOL}://${process.env.API_HOST}:${process.env.API_PORT}`

  const res = await fetch(`${API_ENV_URL}/room/${stream}`)
  
  
  if(res.status !== 200){
    return false
  } 

  if(res.status == 200){
    const {expirationDate} = await res.json()
    
    const expD = new Date(expirationDate).getTime()
    
    const now = Date.now()
    
    return expD > now
  }

}

const generate_room_hash = (StreamPath, args) => {
  return md5(`${StreamPath}-${args.expiration}-${process.env.SECRET}`)
}

const prePublishCallback = async (nms, id, StreamPath, args) => {
   
    console.log('\n[NodeEvent on prePublish]', `id=${id} StreamPath=${StreamPath} args=${JSON.stringify(args)}`);
    
    let session = nms.getSession(id);
  
    if(!await consult_api_for_room(StreamPath)){
      session.reject()
    }
    
    if(args.sign == undefined && args.expiration == undefined ){
      session.reject(); 
    }
  
    const hash = generate_room_hash(StreamPath, args)
    
    if(args.sign != `${args.expiration}-${hash}` ){
      session.reject(); 
    }
  
}

  
publish.on('prePublish', async(id, StreamPath, args) => { prePublishCallback(publish, id, StreamPath, args ) } );
publish.on('prePlay', prePlayCallback);
publish.run();

relay1.on('prePublish', async(id, StreamPath, args) => { prePublishCallback(publish, id, StreamPath, args ) } );
relay1.on('prePlay', prePlayCallback);
relay1.run();




