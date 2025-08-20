export class postAPI{
constructor(request)
{
    this.request = request;
}

async postResponse(param,body,token)
{  
  let response;
  if(token!=null)
  {
        response = await this.request.post(param,{
            headers:{
                "Authorization": `Bearer ${token}`
            },
            data:body
        })
  }
  else{
    response = await this.request.post(param,{
            data:body
        })

  }
  return response;

}

}