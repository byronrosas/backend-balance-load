import { WebShoot } from './../services/webshoot';
import { TakeScreenshootUC } from './../../domain/useCase/takeScreenshoot.uc';
import { Router } from 'express';
const router = Router();
let webshootService = new WebShoot();
let uc = new TakeScreenshootUC(webshootService);
router.get('/take-screenshoot/:url',(req,res)=> uc.exec(req,res));


module.exports = router;