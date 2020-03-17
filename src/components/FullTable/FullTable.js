import React, { useState } from 'react';
import { FixedSizeGrid as Grid } from 'react-window';
import AutoSizer from "react-virtualized-auto-sizer";
import { Input, Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import { CSVLink } from "react-csv";
import './FullTable.scss'
import { connect } from 'react-redux';
import Row from '../Row';
import TableWrapper from '../TableWrapper';
import * as actions from '../../actions';

function FullTable({ value, arrOfTitles, inputValue, setValue, clearInput, searchInAllTable }) {
  // const [csvData, setcsvData] = useState([]);
  const [isUpload, setIsUpload] = useState(false);
  const data = [Object.values(arrOfTitles)];
  value.map((item) => {
    const tempArr = Object.values(item);
    tempArr.pop();
    data.push(tempArr);
  })




  const objLength = Object.keys(value[0]).length;
  return (
    <>
      <div className="header">
        <Input
          className="header__search-input"
          placeholder="Search....."
          type='text'
          value={inputValue}
          onChange={(event) => setValue(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === 'Enter') searchInAllTable()
          }} />
        <Button type="primary"
          className="header__button"
          onClick={() => {
            searchInAllTable()
          }}>
          Search in all columns
          </Button>
        <Button type="primary"
          className="header__button clear"
          onClick={() => {
            setValue('');
            clearInput();
          }}>
          Clear
          </Button>
        <Button type="primary"
          className="header__button clear"
          onClick={() => {
            setIsUpload(true)
          }}>
          Generate CSV
          </Button>
        {isUpload &&
          <CSVLink
            className="header__download-button"
            onClick={() => {
              setIsUpload(false)
            }}
            data={data}
            separator=" | "
            enclosingCharacter={`'`}
            filename="table.csv">
            <DownloadOutlined />
          Here is your link to download
          </CSVLink>
        }
      </div>
      <AutoSizer>
        {({ height, width }) => (
          <Grid
            className='app-grid'
            itemData={value}
            columnCount={objLength}
            columnWidth={170}
            innerElementType={TableWrapper}
            height={height}
            rowCount={value.length}
            rowHeight={35}
            width={width}
          >
            {Row}
          </Grid>
        )}
      </AutoSizer>
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    value: state.data,
    inputValue: state.inputValue,
    arrOfTitles: state.arrOfTitles
  }
}

export default connect(mapStateToProps, actions)(FullTable);