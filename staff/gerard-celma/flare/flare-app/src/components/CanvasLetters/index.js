import React, { Component } from 'react'
import './gsap'
import './index.sass'

class CanvasLetters extends Component {
    state = { fake: null}

    componentDidMount() {
        let colors = ["#EDEEC0", "#ED7B84", "#7397C3", "#7EB77F"]
        let ctx = this.canvas.getContext("2d")
        let pathPointsFrom, pathPointsTo, pathPointsNow 
        let steps = 200
        let offset = 0
        let pathCount = 0
        let interpolationPoint = {percentage: 0}
        ctx.lineWidth = 6
        ctx.lineCap = "round"

        var paths = [samplePath(this.circlePath), samplePath(this.rectPath), samplePath(this.trianglePath), samplePath(this.gerardPath)]

        function drawPathToCanvas() {
    
        var thisColor, lastColor = getColorSegment(0);
        ctx.strokeStyle = lastColor;
        ctx.beginPath();
        for (var i = 0, l = pathPointsNow.length; i < l; i++) {
            if (pathPointsNow[i+1]) {
            ctx.moveTo(pathPointsNow[i].x, pathPointsNow[i].y);
            ctx.lineTo(pathPointsNow[i+1].x, pathPointsNow[i+1].y);
            } else {
            ctx.lineTo(pathPointsNow[i].x, pathPointsNow[i].y);
            }
            thisColor = getColorSegment(i);
            if (thisColor) {
            if (thisColor != lastColor) {
                ctx.closePath();
                ctx.stroke();
                ctx.beginPath();
                ctx.strokeStyle = thisColor;
                lastColor = thisColor;
            }
            }
        }
        ctx.closePath();
        ctx.stroke();
        }
        
        // fills paths array with all points of each form from PATH
        function samplePath(pathSelector) {
            
        var path = pathSelector;
        var length = path.getTotalLength();
        var points = [];
        for (var i = 0; i <= steps; i++) {
            points.push(path.getPointAtLength(length*i/steps));
        }
        
        return points;
        }
        
        function interpolatePaths() {
            
        var points = [];
        for (var i = 0; i <= steps; i++) {
            points.push({x: pathPointsFrom[i].x + (pathPointsTo[i].x-pathPointsFrom[i].x)*interpolationPoint.percentage, y: pathPointsFrom[i].y +(pathPointsTo[i].y-pathPointsFrom[i].y)*interpolationPoint.percentage});
        }
        
        return points;
        }
        
        function getColorSegment(i) {
            
        var p = i/steps + offset;
        if (p > 1) p = p-1;
        var point = Math.floor(p*4);
        return colors[point];
        }
        
        function loop() {
            
        ctx.clearRect(0, 0, 200, 200);
        offset = offset + 0.009;
        pathPointsNow = interpolatePaths();
        if (offset >= 1) offset = 0;
        drawPathToCanvas();
        requestAnimationFrame(loop);  
        }
        
        // transition from one form to another
        function tweenPaths() {
        pathPointsFrom = paths[pathCount];
        if (pathCount+1 <= 3) pathPointsTo = paths[pathCount+1];
        else pathPointsTo = paths[0];
        
        TweenLite.to(interpolationPoint, 0.7, {percentage: 1, delay: 0.4, onComplete: function() { // eslint-disable-line
            interpolationPoint.percentage = 0;
            
            pathCount++;
            if (pathCount > 3) {
            pathCount = 0;
            }
            tweenPaths();
        }});
        }
        
        tweenPaths();
        loop();
    }

    render() {
        return <section>
            <svg id="svg" width="200" height="200" viewBox="0 0 200 200">
                <path id="circle-path" d="M10,100a90,90 0 1,0 180,0a90,90 0 1,0 -180,0" ref={(ref) => (this.circlePath = ref)}/>
                <path id="rect-path" d="M90,10 110,10 110,190 90,190 Z" ref={(ref) => (this.rectPath = ref)}/>
                <path id="triangle-path" d="M100,40 170,160 30,160 Z" ref={(ref) => (this.trianglePath = ref)}/>
                <path id="gerard-path" d="M65,20 150,20 150,45 95,45 95,60 128,60 128,80 95,80 95,140 65,140 Z" ref={(ref) => (this.gerardPath = ref)}/>
            </svg>
            <canvas id="canvas" width="200" height="200" ref={(ref) => (this.canvas = ref)}></canvas>
        </section>
    }
}

export default CanvasLetters