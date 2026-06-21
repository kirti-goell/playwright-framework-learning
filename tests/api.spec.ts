// How do you automate a GET request in Playwright?
// Send request using request.get()
// Store response
// Validate status code
// Convert response to JSON using response.json()
// Validate response body data using assertions

import {test,expect} from '@playwright/test';

// request is playwright fixture of api as page was in ui
test('Get posts',async({request})=>{

    const response = await request.get( // response is http response object
        'https://jsonplaceholder.typicode.com/posts/1'
    );
    expect (response.status()).toBe(200);
    // convert the response into json
    const body = await response.json();
    expect (body.id).toBe(1);
    console.log(body);

});

// How do you automate a POST request in Playwright?

// You can answer in steps:
// Send the POST request using request.post().
// Pass the request body using the data property.
// Store the response.
// Validate the status code (usually 201 Created).
// Convert the response to JSON using response.json().
// Validate the response body fields using assertions.
// Verify that the resource was created successfully (for example, check that an id is returned).

test('Create post',async({request})=>{
    const response = await request.post(
        'https://jsonplaceholder.typicode.com/posts',
        {
            data : {
                title: 'My first post',
                body: 'learning playwright API',
                userId: 1

            }
        }
    );

    expect (response.status()).toBe(201);
    const body = await response.json();
    console.log(body);

    expect (body.title).toBe('My first post');
    expect (body.userId).toBe(1);
    expect (body.id).toBeDefined();
});

// How do you automate a PUT request in Playwright?
// Send request using request.put()
// Pass updated data in request body
// Store response
// Validate status code
// Convert response to JSON
// Validate updated fields


test('Update post',async({request})=>{
    const response =await request.put(
        'https://jsonplaceholder.typicode.com/posts/1',
        {
            data : {
                id : 1,
                title : 'Updated title',
                body : 'updated body',
                userId : 1
            }
        }
    );

    expect (response.status()).toBe(200);
    const body = await response.json();

    expect (body.title).toBe('Updated title');
    expect (body.userId).toBe(1);
    console.log(body);
});


test('Semi updated post',async({request})=>{
    const response =await request.patch(
        'https://jsonplaceholder.typicode.com/posts/1',
        {
            data : {

                title : 'Patched title',
            }
        }
    );

    expect (response.status()).toBe(200);
    const body = await response.json();

    expect (body.title).toBe('Patched title');
    expect (body.userId).toBe(1);
    console.log(body);
});

test('Delete post',async({request})=>{
    const response =await request.delete(
        'https://jsonplaceholder.typicode.com/posts/1'
    );

    expect (response.status()).toBe(200);
});

