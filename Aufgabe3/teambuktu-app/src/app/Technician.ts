import {Router} from "@angular/router";

export class Technician{
    private loggedIn:Boolean = false;
    private router:Router;

    constructor(){
        console.log("Technician con!")
    }

    public isLoggedIn():Boolean{
        return this.loggedIn;
    }

    public login(email:String, password:String):Boolean{
        if(email == "a" && password == "a"){
            this.loggedIn = true;
        }
        return this.loggedIn;
    }

    setRouter(router:Router){
        this.router = router;
    }

    checkLogin(router:Router){
        console.log("Checking login")
        console.log(this.isLoggedIn()) 
        console.log(this.router.url);
        if(!this.isLoggedIn() && this.router.url != "/login"){
            console.log("redirecting to login")
            this.router.navigate(['/login']);
        }
    }
}