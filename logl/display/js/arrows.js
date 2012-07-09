// Copyright 2009-2012 10gen, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


one_arrow = function(x1, y1, x2, y2, ctx) {

    dx = x2 - x1;
    dy = y2 - y1;

    cx = x1 + dx/2 - dy/4;
    cy = y1 + dy/2 + dx/4;

    ctx.moveTo(x1, y1);
    ctx.lineWidth = 3;
    //ctx.quadraticCurveTo(0, 0, x2, y2);
    ctx.lineTo(x2, y2);
    ctx.stroke();

    // adapted from http://stackoverflow.com/questions/808826/draw-arrow-on-canvas-tag
    var headlen = 20;   // length of head in pixels
    var angle = Math.atan2(y2 - y1,x2 - x1);
    ctx.beginPath();
    ctx.moveTo(x2, y2);
    ctx.lineTo(x2-headlen*Math.cos(angle),y2-headlen*Math.sin(angle));
    ctx.lineTo(x2-headlen*Math.cos(angle),y2-headlen*Math.sin(angle));
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.fill();
};
