
export class getAPI{
    constructor(request)
    {
      this.request =request
    }

    async getAPIResponse(param,token)
    {
        let response;
        if(token!=null){
            response = await this.request.get(param,{
            headers:{
                "Authorization": `Bearer ${token}`
            }
            });
        }
        else
        {
            response = await this.request.get(param);
        }
        return await response;
                  
    }


}