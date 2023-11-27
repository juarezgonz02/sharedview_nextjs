import { NextReactP5Wrapper } from "@p5-wrapper/next";

const P5Sketch = ({username, media}) => {

    function sketch(p5) {

        window.p5 = p5;

        let width, height, audioCtx, source, amplitude;

        let fontRegular;

        let bufferLength;

        let dataArray;

        let analyser;

        p5.preload = () => {
            //fontRegular = loadFont('./OpenSans.ttf')
        }

        p5.setup = () => {
            p5.createCanvas(40, 40);
            audioCtx = new window.AudioContext()
            width = 40;
            height = 40;
        
            p5.frameRate(30)
        
            const audioContext = new window.AudioContext();
        
            analyser = audioContext.createAnalyser();
            analyser.fftSize = 256;
        
            const source = audioContext.createMediaStreamSource(media);
            source.connect(analyser);
        
            bufferLength = analyser.frequencyBinCount;
            dataArray = new Uint8Array(bufferLength);
        }

        function getAmplitude() {
            analyser.getByteFrequencyData(dataArray);

            // Calculate the average amplitude
            let sum = 0;
            for (let i = 0; i < bufferLength; i++) {
                sum += dataArray[i];
            }
            const averageAmplitude = sum / bufferLength;

            //console.log("Average Amplitude: " + averageAmplitude);

            return averageAmplitude
            // Call the function recursively for real-time updates
        }

        p5.draw = () => {

            p5.background("#121212");

            p5.fill(50);
            p5.stroke(50);
            //console.log(audioCtx.state)
            //let level = amplitude.getLevel();
            let level = getAmplitude()
            let size = p5.map(level, 0, 255, 0, 40)

            p5.ellipse(width / 2, height / 2, size, size)

            p5.strokeWeight(1)
            p5.stroke(255);
            p5.fill("#121212")
            p5.ellipse(width / 2, height / 2, 40, 40)

            p5.textSize(40)

            p5.strokeWeight(0.01)

            let iLetter = username[0].toUpperCase()

            p5.fill(255, 255, 255);
            p5.text(iLetter, width / 2 - p5.textWidth(iLetter) / 2, height / 2 + 16);

        }
    }

    return <NextReactP5Wrapper sketch={sketch}/>;
}

export default P5Sketch
