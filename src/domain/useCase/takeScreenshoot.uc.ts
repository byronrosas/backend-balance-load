import { IScreenShoot } from './abstractions/IScreenShoot.service';
export class TakeScreenshootUC{
    constructor(private readonly screenShootService:IScreenShoot){}

    exec(req,res){
        //exec service
        this.screenShootService.take(req.params.url,(readableStreamFile)=>{        
            //response 
            readableStreamFile.pipe(res);            
        });
    }
}