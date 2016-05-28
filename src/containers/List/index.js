import Immutable from 'immutable';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React, { Component, PropTypes } from 'react';

import Row from '../../components/Row';
import * as ItemsActions from '../../actions/Items';
import fetchRequiredActions from '../../shared/fetch-data';

const propTypes = {
  dispatch: PropTypes.func.isRequired,
  items: React.PropTypes.instanceOf(Immutable.Record)
};

class List extends Component {

  static requiredActions = [ItemsActions.fetchItems];

  constructor (props) {
    super(props);
    this.actions = bindActionCreators(ItemsActions, props.dispatch);
  }

  componentDidMount() {
    fetchRequiredActions(List.requiredActions, this.props, 'items');
  }

  render () {

    let items = this.props.items;
    let itemList = items.data.valueSeq().map( item => {

      return (<Row
        item={ item }
        key={ item.get('id') }
        onClick={ this.actions.changeItemState }
      />);

    });

    return (
      <div>
       { itemList }
      </div>
    );
  }
}

List.propTypes = propTypes;


export default connect(
  (state) => ({ items: state.items })
)(List);
