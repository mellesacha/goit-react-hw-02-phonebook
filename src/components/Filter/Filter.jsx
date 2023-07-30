// import { Component } from "react";

// class Filter extends Component {

//     hendlImput = (e) => {
//         console.log(e.target.value)
//         this.props.searchQuery(e.target.value)
//     }

//     render() {
//          return (
//              <input value={} onChange={this.hendlImput } />
//     )
// };
// }
    
const Filter = ({search, hendlInput}) => {
    return (
        <label> Find contacts by name
            <input
            type="text"
            value={search}
            onChange={hendlInput} />
        </label>
        
    )
}
   

export default Filter;