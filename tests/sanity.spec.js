import {test,expect,request,APIRequestContext} from "@playwright/test";
import { getAPI } from "../utilities/GETAPI";
import { postAPI } from "../utilities/POSTAPI";
import { putAPI } from "../utilities/PUTAPI";
import { deleteAPI } from "../utilities/DELETEAPI";
import{dataSet} from "../dataSet";


test.describe('Validate FASTAPI',()=>{
  let token;
  let apiContext;
  let id;
  //const validator = new SchemaValidator;
test.beforeAll('Do health check and get bearer token before running each testcase', async () => {
        apiContext = await request.newContext();
      
         const getapi = new getAPI(apiContext);
         const postapi = new postAPI(apiContext);
         const body = await getapi.getAPIResponse('/health');
         const jsonBody= await body.json();
        //Health check before running each testcase
        await expect(body.status()).toBeOK;
        await expect(jsonBody.status).toEqual("up");
       
        const tokenBody = await postapi.postResponse('/login',dataSet.existingUser);
        const bodyToken =await tokenBody.json();
        token = await bodyToken.access_token ;  
  })

   test('Validate Login API with invalid credentila',async()=>{
    const postapi = new postAPI(apiContext);
    const tokenBody = await postapi.postResponse('/login',dataSet.newUser)
       expect(await tokenBody.status()).toEqual(400);
       const token=await tokenBody.json();
       expect(token.detail).toEqual("Incorrect email or password");
  })


  test('Validate GETALL Book API',async()=>{
    const getapi = new getAPI(apiContext);
    const response = await getapi.getAPIResponse('/books',token);
  })

  test('Validate GETALL Book API without token',async()=>{
    const getapi = new getAPI(apiContext);
    const response = await getapi.getAPIResponse('/books');
    const resonseBody = await response.json();
    expect(response.status()).toEqual(403);
    expect(resonseBody.detail).toEqual('Not authenticated');
  })

  test('Validate GETALL Book API with invalid token',async()=>{
    const getapi = new getAPI(apiContext);
    const response = await getapi.getAPIResponse('/books','abchgd');
    const resonseBody = await response.json();
    expect(response.status()).toEqual(403);
    expect(resonseBody.detail).toEqual('Invalid token or expired token');
  })
    test('Validate GETALL Book API with single id',async()=>{
    const getapi = new getAPI(apiContext);
    const responseGET = await getapi.getAPIResponse('/books',token);
    const res = await responseGET.json();
     id = res[0].id;
    const response = await getapi.getAPIResponse('/books/'+id,token);
    const resonseBody = await response.json();
    expect(response.status()).toBeOK;
    
  })

  test('Validate SIGNUP API',async()=>{
    const postapi = new postAPI(apiContext);
   const response = await postapi.postResponse('/signup',dataSet.newUser);
     const resonseBody = await response.json();
    expect(response.status()).toBeOK;
   expect(await resonseBody.message).toEqual('User created successfully');
   
  })
  test('Validate SIGNUP API for existing email',async()=>{
    const postapi = new postAPI(apiContext);
   const response = await postapi.postResponse('/signup',dataSet.existingUser);
    const resonseBody = await response.json();
    expect(response.status()).toEqual(400);
   expect(await resonseBody.detail).toEqual('Email already registered');
   
  })

    test('Validate POST Book API',async()=>{
    let data=await dataSet.dataCreateBook;
    const postapi = new postAPI(apiContext);
    const response = await postapi.postResponse('/books',data,token)
    const resonseBody = await response.json();
    expect(await response.status()).toBeOK;
   // console.log(await "resonseBody"+resonseBody.author+resonseBody.name+resonseBody.id+resonseBody.published_year);
   // console.log("data"+data);
  //  expect(resonseBody.author).toEqual(data[0].author);
   
   
  })


 
  test('Validate PUT Book API',async()=>{
     
     const putapi = new putAPI(apiContext);
     const getapi = new getAPI(apiContext);
     const responseGET = await getapi.getAPIResponse('/books',token);
     const res = await responseGET.json();
     id = res[0].id;
     let data={
       "id": id,
       "name": "abc",
       "author": "def",
       "published_year": 2024,
        "book_summary": "Deepaa;klnvk"
      }

     const response = await putapi.putResponse('/books/'+id,data,token)   
     const resonseBody = await response.json();
     expect(await response.status()).toBeOK;
  })

  test('Validate PUT Book API for invalid id',async()=>{
     const putapi = new putAPI(apiContext);
    let data={
      "id": 1,
      "name": "abc",
       "author": "def",
       "published_year": 2024,
        "book_summary": "Deepaa;klnvk"
      }
    const response = await putapi.putResponse('/books/1',data,token) ;
     const resonseBody = await response.json();
    expect(await response.status()).toEqual(404);
    expect(await resonseBody.detail).toEqual('Book not found');  
  })

  test('Validate DELETE Book API',async()=>{
    const getapi = new getAPI(apiContext);
    const deleteapi = new deleteAPI(apiContext);
    const responseGET = await getapi.getAPIResponse('/books',token);
    const res = await responseGET.json();
    const response = await deleteapi.deleteRespose(`/books/${res[0].id}`,token)
    const resonseBody = await response.json();
    expect(await response.status()).toBeOK;
    expect(await resonseBody.message).toEqual('Book deleted successfully');
   
  })

  test('Validate DELETE Book API with invalid id',async()=>{
    const deleteapi = new deleteAPI(apiContext);
    const response = await deleteapi.deleteRespose(`/books/1`,token);
     const resonseBody = await response.json();
    expect(await response.status()).toEqual(404);
    expect(await resonseBody.detail).toEqual('Book not found');
   
  })
  })