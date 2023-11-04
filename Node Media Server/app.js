const NodeMediaServer = require('node-media-server');

const config = {
  logType: 3,

  rtmp: {
    port: 1935,
    chunk_size: 60000,
    gop_cache: true,
    ping: 30,
    ping_timeout: 60
  },
  http: {
    port: 8000,
    allow_origin: '*'
  }
};

/**
 * 
const config = {
  rtmp: {
    port: 1935,
    chunk_size: 60000,
    gop_cache: true,
    ping: 30,
    ping_timeout: 60
  },
  http: {
    port: 8000,
    allow_origin: '*'
  },
  auth: {
    play: true,
    publish: true,
    secret: 'nodemedia2017privatekey'
  }
  fission: {
    ffmpeg: '/usr/local/bin/ffmpeg',
    tasks: [
      {
        rule: "game/*",
        model: [
          {
            ab: "128k",
            vb: "1500k",
            vs: "1280x720",
            vf: "30",
          },
          {
            ab: "96k",
            vb: "1000k",
            vs: "854x480",
            vf: "24",
          },
          {
            ab: "96k",
            vb: "600k",
            vs: "640x360",
            vf: "20",
          },
        ]
      },
      {
        rule: "show/*",
        model: [
          {
            ab: "128k",
            vb: "1500k",
            vs: "720x1280",
            vf: "30",
          },
          {
            ab: "96k",
            vb: "1000k",
            vs: "480x854",
            vf: "24",
          },
          {
            ab: "64k",
            vb: "600k",
            vs: "360x640",
            vf: "20",
          },
        ]
      },
    ]
  },
  relay: {
    ffmpeg: '/usr/local/bin/ffmpeg',
    tasks: [
      {
        app: 'live',
        mode: 'push',
        edge: 'rtmp://192.168.0.10',
      }
    ]
  }
  
};

*/

console.log(fetch)
const nms = new NodeMediaServer(config)

nms.run();
 
nms.on('prePublish', (id, StreamPath, args) => {
  console.log('[NodeEvent on prePublish]', `id=${id} StreamPath=${StreamPath} args=${JSON.stringify(args)}`);
   let session = nms.getSession(id);
  // session.reject();
    //console.log('Session', session)
    if(StreamPath == "/live/fails"){
      session.reject(); 
   }
});

nms.on('prePlay', (id, StreamPath, args) => {
  console.log('[NodeEvent on prePlay]', `id=${id} StreamPath=${StreamPath} args=${JSON.stringify(args)}`);
  let session = nms.getSession(id);



  // session.reject();
});

