import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official'



const options = {
    series: [
        {
            name: 'Profit',
            data: [100, 200, 30, 400, 50]
        }
    ]
};
  
function Nested() {
    return (
        <>
            <div className="row">
                <div className="col-md-4">
                    <HighchartsReact highcharts={Highcharts} options={options} />
                </div>
            </div>
        
        </>
    );
}


export default Nested;