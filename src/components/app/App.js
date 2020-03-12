import React from 'react';
import './App.scss';
// import { FixedSizeGrid as Grid } from 'react-window';
// import AutoSizer from "react-virtualized-auto-sizer";
import { data } from '../../data';
// import Row from '../Row';
// import Controlls from '../Controlls'
import FullTable from '../FullTable/FullTable'
// import TableWrapper from '../TableWrapper/TableWrapper'

function App() {
  return (
    <div className="App">
      <FullTable data={data} />
      {/* <Controlls data={arrOfTitles} />
      <AutoSizer>
        {({ height, width }) => (
          <Grid
            className='app-grid'
            itemData={data}
            columnCount={7}
            columnWidth={200}
            height={height}
            rowCount={1000}
            rowHeight={35}
            width={width}
          >
            {Row}
          </Grid>
        )}
      </AutoSizer> */}

    </div >
  );
}

export default App;
