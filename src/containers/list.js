import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from '../actions'

class List extends Component {
  render() {
    const { items, actions } = this.props
    return (
      <div>
        <Header addTodo={actions.addTodo} />
        <MainSection items={items} actions={actions} />
      </div>
    )
  }
}

List.propTypes = {
  items: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    items: state.items
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List)
