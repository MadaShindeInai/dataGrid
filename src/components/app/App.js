import React from 'react';
import './App.scss';
import { FixedSizeList as List } from "react-window";
import data from "../../data";
import Row from '../row';
import Controlls from '../controlls'

function App() {
  // const Rows = data.map((item) => {
  //   return <Row key={item.id} item={item} />
  // });
  return (
    <div className="App">
      <Controlls data={data} />
      <List
        className="List"
        height={400}
        itemCount={data.length}
        itemSize={36}
        max-width={1440}
      >
        {Row}
      </List>
    </div >
  );
}

export default App;
