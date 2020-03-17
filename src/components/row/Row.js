/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import './Row.scss';
import { connect } from 'react-redux';
import * as actions from '../../actions'

const PADDING_SIZE = 60;
const Row = ({ columnIndex, rowIndex, value, style, switchStatus }) => {

  return (
    <div
      style={{
        ...style,
        top: `${parseFloat(style.top) + PADDING_SIZE}px`
      }}
      className={value[rowIndex][Object.keys(value[0]).length - 1] ? `app-cell column${columnIndex.toString()}` : `app-cell2 column${columnIndex.toString()}`}
    >
      {columnIndex === Object.keys(value[0]).length - 1
        ? <input
          className="app-cell__checkbox"
          onChange={() => switchStatus(rowIndex)}
          checked={value[rowIndex][columnIndex]}
          id={rowIndex}
          type='checkbox' />
        : <span
          className="app-cell__text"
          onClick={() => switchStatus(rowIndex)}
        >{value[rowIndex][columnIndex]}</span>
      }
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    value: state.data
  }
}

export default connect(mapStateToProps, actions)(Row);