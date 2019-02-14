class UserService{

    createUser(user, token){
            
        let promise = fetch("http://localhost:4040/api/user", {
                                method:"POST",
                                headers:{
                                    "Content-type":"application/json",
                                    "Authorization":"Bearer "+token
                                },
                                body:JSON.stringify(user)
                            });
        return promise;
    }

    getUser(user,token){

        let promise = fetch("http://localhost:4040/api/user", {
                            method:"POST",
                            headers:{
                                
                                "Content-type":"application/json",
                                "Authorization":"Bearer "+token
                            },
                            body:JSON.stringify(user)
                        });
                        return promise;                
        }
}

export default UserService;
