import React from 'react';
import { connect } from 'react-redux';
import { DownOutlined, UpOutlined, CloseOutlined, SearchOutlined, PlusOutlined, MinusOutlined } from '@ant-design/icons';
import './ControllsItem.scss'
import * as actions from '../../actions'

const ControllsItem = ({ title, value, valueV, setValueV, id, delCol, sortUp, filterValue, sortDown, filterBoolean, returnFullBoolean }) => {

  return (
    <div className="controlls__item">
      <span className="controlls__title">{title}</span>
      <div className="controlls__buttons">
        <button
          type="button"
          onClick={() => {
            setValueV(id + 10);
            sortUp(id)
            console.log(valueV);
          }}
          className={valueV === id + 10 ? "controlls__sort-button2" : "controlls__sort-button"}><DownOutlined /></button>
        <button
          type="button"
          onClick={() => {
            setValueV(id);
            sortDown(id)
            console.log(valueV);
          }}
          className={valueV === id ? "controlls__sort-button2" : "controlls__sort-button"}><UpOutlined /></button>
        <button
          type="button"
          onClick={() => {
            delCol(id)
          }}
          className="controlls__sort-button"><CloseOutlined /></button>
        {
          value[0][id] === 'true' || value[0][id] === 'false'
            ? <><button
              type="button"
              onClick={() => filterBoolean(id, 'true')}
              className="controlls__search-button"><PlusOutlined /></button>
              <button
                type="button"
                onClick={() => filterBoolean(id, 'false')}
                className="controlls__search-button"><MinusOutlined /></button>
              <button
                type="button"
                onClick={() => returnFullBoolean()}
                className="controlls__search-button all">All</button></>
            : <button
              type="button"
              onClick={() => filterValue(id)}
              className="controlls__search-button"><SearchOutlined /></button>
        }
      </div>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    value: state.data
  }
}
export default connect(mapStateToProps, actions)(ControllsItem);