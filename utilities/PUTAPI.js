export class putAPI{
    constructor(request)
    {
        this.request = request;
    }
    async putResponse(param,body,token)
    {
         const response = await this.request.put(param,
            {
                headers: {"Authorization": `Bearer ${token}`},
                data:body
            
            }
         )
         return await response;
    }
}