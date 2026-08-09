import { Component } from "react";

type State = {
  count: number;
};

class Counter extends Component<{}, State> {
  constructor(props: {}) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increase = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <>
        <h1>Counter</h1>

        <h2>{this.state.count}</h2>

        <button onClick={this.increase}>
          Increase
        </button>
      </>
    );
  }
}

export default Counter;


// import { useState } from "react";

// function Counter() {
//   const [count, setCount] = useState<number>(0);

//   const increase = () => {
//     setCount(count + 1);
//   };

//   return (
//     <>
//       <h1>Counter</h1>

//       <h2>{count}</h2>
//       <button onClick={increase}>
//         Increase
//       </button>
//     </>
//   );
// }

// export default Counter;