async function getData() {
    try {
      const todoResponse = await fetch("https://jsonplaceholder.typicode.com/todos/1");
      const todoData = await todoResponse.json();
  
      const postResponse = await fetch("https://jsonplaceholder.typicode.com/posts/1");
      const postData = await postResponse.json();
  
      const result = { todo: todoData, post: postData };
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }
  
  getData();
  