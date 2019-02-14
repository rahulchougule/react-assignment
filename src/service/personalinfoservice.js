class PersonalInfoService{

    addPersonalInfo(user, token){
            
        let promise = fetch("http://localhost:4040/api/personalinfo", {
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

export default PersonalInfoService;
