var cors = require('cors');
const screenshootRoute = require('./_detail/route/screenshoot.route');
import * as express from 'express';
import {createServer, Server} from 'http';
const PORT = 3000;
export class Nodeserver{    
    private app:express.Application;
    constructor(){
        //server
        this.app = express();
        //routes
        this.app.use('/apiV1',screenshootRoute)
        //cors
        this.app.use(cors({
            credentials:true,            
            origin:'*'
        }));      
        let server:Server = createServer(this.app);        
        
        //init server
        server.listen(PORT,()=>{
            console.log("Server started => %s",PORT);
        });
    }

    getApp(){
        return this.app;
    }
}