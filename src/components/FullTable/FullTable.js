import React from 'react';
import { FixedSizeGrid as Grid } from 'react-window';
import AutoSizer from "react-virtualized-auto-sizer";
import Row from '../Row';
import TableWrapper from '../TableWrapper/TableWrapper';

function Fulltable({ data }) {
  return (
    <AutoSizer>
      {({ height, width }) => (
        <Grid
          className='app-grid'
          itemData={data}
          columnCount={7}
          columnWidth={200}
          innerElementType={TableWrapper}
          height={height}
          rowCount={1000}
          rowHeight={35}
          width={width}
        >
          {Row}
        </Grid>
      )}
    </AutoSizer>
  );
}

export default Fulltable;