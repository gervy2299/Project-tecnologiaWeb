import { Line } from 'react-chartjs-2'
import { formTime } from '../../helpers/formTime';

import {
    Chart as ChartJs,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from 'chart.js';
import { useServiceStore } from '../../hooks/useServiceStore';

ChartJs.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
)



export const ChartCheck = () => {

    const { events } = useServiceStore();

    const labels = events.map(time => formTime(time.event_timestamp));
    const latency = events.map(lt => lt.latency);

    const data = {
        labels: labels,
        datasets: [{
            label: 'Latencia',
            data: latency,
            fill: true,
            borderColor: '#178DF5',
            backgroundColor: 'rgba(23, 141, 245,0.3)',
            pointRadius: 5,
            tension: 0.1

        }]
    };
    const decimation = {
        enabled: true,
        algorithm: 'lttb',
        samples: 2
    };

    const myOption = {
        plugins: {
            decimation: decimation,
        }
    }




    return (
        <>
            <Line data={data} options={myOption} />
        </>
    )
}
