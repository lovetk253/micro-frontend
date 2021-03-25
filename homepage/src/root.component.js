import React, { useEffect, useState } from "react";

export default function Root(props) {

  const [user, setUser] = useState('123')
  useEffect(() => {

    fetch("http://localhost:8000/dashboard/get-all-users")
    .then(res => res.json())
    .then(
      (result) => {
        // this.setState({
        //   isLoaded: true,
        //   items: result.items
        // });
        // if(result.result.length > 0){
          setUser([123])
          console.log(result.result);
        // }
        
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {
       
        console.log('not ok');
      }
    )
   
  }, [])
  return (
    <section>
      <div className="homepage-hero" style={{ margin: "5rem 0" }}>
        {/* <img
          style={{ width: "100%" }}
          src="https://blog.logrocket.com/wp-content/uploads/2019/05/logrocket-blog.jpg"
        /> */}
      </div>
      <h1 className="cover-heading">Welcome to the micro-frontend world!</h1>
      <p className="lead">
        This is an example of how powerful micro-frontends can be!
        <br /> You may integrate all of your frontend apps, regardless of what
        frameworks they're built with.
      </p>
      <p className="lead">
        <a href="#" className="btn btn-lg btn-secondary">
          Learn more {user}
        </a>
      </p>
    </section>
  );
}
// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       error: null,
//       isLoaded: false,
//       items: []
//     };
//   }

//   componentDidMount() {
//     fetch("http://localhost:8000/dashboard/get-all-users")
//       .then(res => res.json())
//       .then(
//         (result) => {
//           // this.setState({
//           //   isLoaded: true,
//           //   items: result.items
//           // });
//           console.log('success');
//         },
//         // Note: it's important to handle errors here
//         // instead of a catch() block so that we don't swallow
//         // exceptions from actual bugs in components.
//         (error) => {
//           this.setState({
//             isLoaded: true,
//             error
//           });
//           console.log('not ok');
//         }
//       )
//   }

//   render() {
//     const { error, isLoaded, items } = this.state;
//     if (error) {
//       return <div>Error: {error.message}</div>;
//     } else if (!isLoaded) {
//       return <div>Loading...</div>;
//     } else {
//       return (
//         <ul>
//           {items.map(item => (
//             <li key={item.id}>
//               {item.name} {item.price}
//             </li>
//           ))}
//         </ul>
//       );
//     }
//   }
// }