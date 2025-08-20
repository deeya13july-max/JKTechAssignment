export class deleteAPI{
    constructor(request)
    {
        this.request = request;
    }
    async deleteRespose(param,token)
    {
        const response = await this.request.delete(param,{
            headers:{"Authorization": `Bearer ${token}`}
        })
        return response;
    }

}
