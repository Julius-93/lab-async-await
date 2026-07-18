// Write your code here!

// this function takes in the array of posts and puts them on the page
function displayPosts(posts) {
  // grab the ul from the HTML (it has the id post-list)
  let postList = document.getElementById('post-list');

  // loop through each post one at a time
  for (let i = 0; i < posts.length; i++) {
    let post = posts[i];

    // make a new li for this post
    let li = document.createElement('li');

    // make an h1 and put the title inside it
    let h1 = document.createElement('h1');
    h1.textContent = post.title;

    // make a p and put the body inside it
    let p = document.createElement('p');
    p.textContent = post.body;

    // put the h1 and p inside the li
    li.appendChild(h1);
    li.appendChild(p);

    // put the li inside the ul
    postList.appendChild(li);
  }
}

// async function that houses the fetch
async function getPosts() {
  // await the fetch so we wait for the response to come back
  let response = await fetch('https://jsonplaceholder.typicode.com/posts');

  // await turning that response into JSON (this is also async)
  let posts = await response.json();

  // now that we actually have the posts, display them
  displayPosts(posts);
}

// kick everything off
getPosts();
