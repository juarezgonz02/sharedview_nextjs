
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
    mediaroot: './media',
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
  },
  trans: {
    ffmpeg: '/usr/bin/ffmpeg',
    tasks: [
      {
        app: 'live',
        hls: true,
        hlsFlags: '[hls_time=2:hls_list_size=3:hls_flags=delete_segments]',
        hlsKeep: true, // to prevent hls file delete after end the stream
      }
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
    mediaroot: './media',
    allow_origin: '*'
  },
  auth: {
    play: true,
    publish: true,
    secret: "nodemediahls"
  },
  trans: {
    ffmpeg: '/usr/bin/ffmpeg',
    tasks: [
      {
        app: 'live',
        hls: true,
        hlsFlags: '[hls_time=2:hls_list_size=3:hls_flags=delete_segments]',
        hlsKeep: true, // to prevent hls file delete after end the stream
      }
    ]
  }

}