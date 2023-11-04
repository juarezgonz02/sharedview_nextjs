# Sharedview Next JS Version

Remake for original Sharedview proyect made back in 2020 

### Requires
- Node ^18.2
- Windows/Linux 
- FFmpg (https://www.ffmpeg.org/)

## Basic Usage

- First start the signaling server with
``` bash
 npm i
 cd ./"Signaling Server"
 npm run dev
```
- Then start the web site with
``` bash
 npm i
 cd ./"NextJS Proyect" 
 npm run dev
```
- Finaly is site is avainable in http://localhost:3000/[room] 

Examples: 
http://localhost:3000/xac-1a3-vds 
http://localhost:3000/abc-123-def 
http://localhost:3000/met-9o3-fgf 
Any room can be access with room pattern = [three characters]-[three characters]-[three characters] 

### Contains
- RMTP Server (Site in construction)
- NextJS WebSite 
- WebSocket Server for signaling between peers
- (Comming soon) API Server

![Sharedview logo](https://raw.githubusercontent.com/juarezgonz02/sharedview_nextjs/main/NextJS%20Proyect/src/app/images/ICONO.png "Sharedview Logo")


