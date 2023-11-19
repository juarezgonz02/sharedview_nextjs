
export const publish_config = {
  logType: 3,
  rtmp: {
    port: 1935,
    chunk_size: 60000,
    gop_cache: true,
    ping: 30,
    ping_timeout: 60
  },
  http: {
    port: 8008,
    allow_origin: '*'
  },
  auth: {
    play: true,
    publish: true,
    secret: "nodemediahls"
  },
  relay: {
    ffmpeg: '/usr/bin/ffmpeg',
    tasks: [
      {
        app: 'live0',
        mode: 'push',
        edge: 'rtmp://localhost:1936',
      },
      {
        app: 'live1',
        mode: 'push',
        edge: 'rtmp://localhost:1937',
      },
      {
        app: 'live2',
        mode: 'push',
        edge: 'rtmp://localhost:1938',
      },
    ]
  }
}

export const pull_config_0 = {
  logType: 3,
  rtmp: {
    port: 1936,
    chunk_size: 60000,
    gop_cache: true,
    ping: 30,
    ping_timeout: 60
  },
  http: {
    port: 8001,
    allow_origin: '*'
  },
  auth: {
    play: true,
    publish: true,
    secret: "nodemediahls"
  }

}
export const pull_config_1 = {
  logType: 3,
  rtmp: {
    port: 1937,
    chunk_size: 60000,
    gop_cache: true,
    ping: 30,
    ping_timeout: 60
  },
  http: {
    port: 8002,
    allow_origin: '*'
  },
  auth: {
    play: true,
    publish: true,
    secret: "nodemediahls"
  }

}
export const pull_config_2 = {
  logType: 3,
  rtmp: {
    port: 1938,
    chunk_size: 60000,
    gop_cache: true,
    ping: 30,
    ping_timeout: 60
  },
  http: {
    port: 8003,
    allow_origin: '*'
  },
  auth: {
    play: true,
    publish: true,
    secret: "nodemediahls"
  }

}

export const config = {
  logType: 0,
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
    play: false,
    publish: true,
    secret: "nodemediahls"
  },
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
        mode: 'pull',
        edge: 'rtmp://localhost:1935',
      }
    ]
  }
  
  
};