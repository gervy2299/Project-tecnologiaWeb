import { Line } from 'react-chartjs-2'
import { DataCheck } from '../../helpers';
import { formTime } from '../../helpers/formTime';
export const ChartCheck = () => {
    const labels = DataCheck.map(time => formTime(time.event_timestamp));
    const latency = DataCheck.map(lt => lt.latency);
    /*  const data = {
         labels: labels,
         datasets: [{
             label: 'My First Dataset',
             data: latency,
         }]
     }; */

    return (
        <>

        </>
    )
}
