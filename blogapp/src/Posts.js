import React, { Component } from "react";
import Post from "./Post";

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  loadPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        const posts = data.map(
          (item) => new Post(item.id, item.title, item.body)
        );
        this.setState({ posts });
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }

  componentDidMount() {
    this.loadPosts();
  }
 componentDidCatch(error, info) {
    alert("An error occurred: " + error);
    this.setState({ error });
  }
  render() {
    return (
      <div>
        <h2>Blog App</h2>
        {this.state.posts.map((post) => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Posts;
