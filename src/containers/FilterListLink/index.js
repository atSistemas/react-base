import { connect } from 'react-redux';
import React, { Component, PropTypes } from 'react';
import { setVisibilityFilter } from '../../actions/Filters';

class FilterListLink extends Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    filter: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired
  }

  constructor (props) {
    super(props);
  }

  setFilter (filter){
    const { dispatch } = this.props;
    dispatch(setVisibilityFilter(filter));
  }

  render(){
    let { filter, children, active} = this.props;

    if (active) {
      return <span>{ children }</span>;
    }

    return (
      <a
        href=""
        onClick={ e => {
          e.preventDefault()
          this.setFilter(filter)
        } }
      >
        { children }
      </a>
    );
  }

}

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.filter
  }
}

export default connect(mapStateToProps)(FilterListLink)
