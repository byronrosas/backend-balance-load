const webshot = require("node-webshot");
var fs      = require('fs');

import { IScreenShoot } from './../../domain/useCase/abstractions/IScreenShoot.service';

export class WebShoot implements IScreenShoot{
    constructor(){}
    take(url: string,cb:Function) {                
        var renderStream = webshot(url);        
        cb(renderStream);
    }

}