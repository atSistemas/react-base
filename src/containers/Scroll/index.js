import { connect } from 'react-redux'
import React, { Component, PropTypes } from 'react'
import * as ItemsActions from '../../actions/Items'
import { fetchRequiredActions } from '../../shared/fetch-data'
import { Surface, ListView } from 'react-canvas'

const Page = require('../Page');
const articles = require('../../../dist/mocks/data');


class Scroll extends Component {

  static requiredActions = [ItemsActions.fetchItems];

  static propTypes = {
    items: PropTypes.array,
    dispatch: PropTypes.func.isRequired
  }

  constructor (props) {
    super(props)
  }

  componentDidMount() {
    const { items } = this.props
    fetchRequiredActions( Scroll.requiredActions, this.props, items)
  }

  onRowClick(id) {
    const { dispatch } = this.props
    dispatch(ItemsActions.changeItemState(id))
  }

  getSize () {
    return document.getElementById('root').getBoundingClientRect();
  }

  // ListView
  // ========

  getListViewStyle () {
    let size = this.getSize();
    return {
      top: 0,
      left: 0,
      width: size.width,
      height: size.height
    };
  }

  getNumberOfPages () {
    return 1000;
  }

  getPageHeight () {
    return 1000;//this.getSize().height;
  }

  renderPage (pageIndex, scrollTop) {
    let size = this.getSize();
    let self = this;
    let article = articles[pageIndex % articles.length];
    let pageScrollTop = pageIndex * self.getPageHeight() - scrollTop;
    return (
      <Page
        width={ size.width }
        height={ size.height }
        article={ article }
        pageIndex={ pageIndex }
        scrollTop={ pageScrollTop } 
      />
    );
  }

  render () {
    let size = this.getSize();
    let self = this;
    return (
      <Surface top={ 0 } left={ 0 } width={ size.width } height={ size.height }>
        <ListView
          style={ self.getListViewStyle() }
          snapping={ true } 
          scrollingDeceleration={ 0.92 }
          scrollingPenetrationAcceleration={ 0.13 }
          numberOfItemsGetter={ self.getNumberOfPages }
          itemHeightGetter={ self.getPageHeight }
          itemGetter={ self.renderPage } 
        />
      </Surface>
    );
  }

}


export default connect(
  (state) => ({ items: state.items.data})//getVisibleItems(state.items.data, state.filter) })
)(Scroll)
