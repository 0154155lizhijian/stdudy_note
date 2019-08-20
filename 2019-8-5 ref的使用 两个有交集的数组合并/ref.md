```
import React, { Component } from "react";
import List from "./list";
import Ref from "./Ref";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.list = React.createRef();
  }
  a;
  listRef;
  componentDidMount() {
    console.log(this.a);
    console.log(this.listRef);
    console.log(this.list.current.input);
  }
  render() {
    return (
      <React.Fragment>
        {/* this.list 采用React.createRef的方式 */}
        <List getListRef={ref => (this.listRef = ref)} ref={this.list} />
        {/* 传统方法 */}
        <Ref onRef={ref => (this.a = ref)} />
      </React.Fragment>
    );
  }
}

```

```
import React, { Component } from 'react'

export default class List extends Component {
    componentDidMount(){
        // this.props;
        this.props.getListRef(this.input);
    }
    render() {
        return (
            <div>
                <input  ref={ref=>this.input = ref}/>
                <button >确认</button>
            </div>
        )
    }
}
```

```
import React, { Component } from "react";

export default class Ref extends Component {
  componentDidMount() {
    this.props.onRef(this.input)
  }
  
  render() {
    return (
      <div>
        <form ref={ref => this.input = ref}>
          <label>我要拿这个</label> <input />
        </form>
      </div>
    );
  }
}

```