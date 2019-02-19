import React, { useEffect } from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import axios from 'axios';

const Home = props => {

  useEffect(() => {
    axios.get('api/trip', {withCredentials: true })
  }, [])

  return (
  <div>
    <h1>Home</h1>
    <p>Count: {props.count}</p>
  </div>)
}

// const mapStateToProps = ({ counter }) => ({
//   count: `counter`.count,
//   isIncrementing: counter.isIncrementing,
//   isDecrementing: counter.isDecrementing
// })

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(
//     {
//       increment,
//       incrementAsync,
//       decrement,
//       decrementAsync,
//       changePage: () => push('/about-us')
//     },
//     dispatch
//   )

export default connect(
  // mapStateToProps,
  // mapDispatchToProps
)(Home)
