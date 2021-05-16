import './App.css';
import React from 'react';
import Nested from './Nested';
import Chart1 from './Chart1';
import Chart2 from './chart2';
import { Select } from 'antd';


const { Option } = Select;



const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

function handleChange(value) {
  console.log(`selected ${value}`);
}




function App() {
  console.log("First");
  fetch('https://api.covid19india.org/v4/min/timeseries.min.json')
  .then(response => response.json())
  .then(data => console.log(data))
  console.log("After");
  //const charts = ['chart-1', 'chart-2', 'chart-3']

  return (
    <div className="App">
          <Select defaultValue="Select a chart" style={{ width: 120 }} onChange={handleChange}>
      <Option value="1">Chart-1</Option>
      <Option value="2">Chart-2</Option>
      <Option value="3">Chart-3</Option>
    </Select>

         {/* <p>Select a Chart</p>
          <Select placeholder='Select chart' style={{width:'50%'}}>
            {charts.map((chart,index) =>{
              return <Select.Option key={index} value={chart}>{chart}</Select.Option>
            })}

          </Select> */}
            

      <div className="row">
        <Nested />
        <div className="col-md-6">   <Chart1 /> </div>
        <div className="col-md-6">   <Chart2 /> </div>
      </div>
    </div>
  );
}

export default App;
