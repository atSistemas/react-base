import { connect } from 'react-redux'
import React, { Component, PropTypes } from 'react'
import ReactDom from 'react-dom'
import * as ItemsActions from '../../actions/Items'
import { fetchRequiredActions } from '../../shared/fetch-data'
import { Surface, ListView } from 'react-canvas'
import Row from '../../components/Row'
var Page = require('../Page');
var articles = require('../../../dist/mocks/data');


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
  /*
  render () {
    let listStyle={
      listStyle:'none'
    }
    let list = null
    const { items } = this.props
    if( items ){
      list = (
        items.map((item, index) => {
          return  (
            <Row { ...item } key={ index } onClick={() => this.onRowClick(item.id)} />
            )
        })
      )
    }

    return (
      <div>
        <ul style={listStyle}>{ list }</ul>
      </div>
     )
  }*/
  render () {
    var size = this.getSize();
    var self = this;
    return (
      <Surface top={0} left={0} width={size.width} height={size.height}>
        <ListView
          style={self.getListViewStyle()}
          snapping={true}
          scrollingDeceleration={0.92}
          scrollingPenetrationAcceleration={0.13}
          numberOfItemsGetter={self.getNumberOfPages}
          itemHeightGetter={self.getPageHeight}
          itemGetter={self.renderPage} />
      </Surface>
    );
  }

  renderPage (pageIndex, scrollTop) {
    var size = this.getSize();
    var self = this;
    var article = articles[pageIndex % articles.length];
    var pageScrollTop = pageIndex * self.getPageHeight() - scrollTop;
    return (
      <Page
        width={size.width}
        height={size.height}
        article={article}
        pageIndex={pageIndex}
        scrollTop={pageScrollTop} />
    );
  }

  getSize () {
    return document.getElementById('root').getBoundingClientRect();
  }

  // ListView
  // ========

  getListViewStyle () {
    var size = this.getSize();
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
}

const getVisibleItems = (items, filter) => {

  if (items == undefined)
    return null

  const obj = {
    'SHOW_ALL': () => items,
    'SHOW_REMOVED': () => items.filter(t => t.removed),
    'SHOW_ACTIVE': () =>  items.filter(t => !t.removed)
  }

  return  obj[filter] !== undefined ? obj[filter] (): obj.SHOW_ALL ()
}

export default connect(
  (state) => ({ items: state.items.data})//getVisibleItems(state.items.data, state.filter) })
)(Scroll)
