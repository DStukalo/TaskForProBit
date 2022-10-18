import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';

export default function Chart(props) {
    return (
        <ResponsiveContainer width='100%' aspect={2}>
            <LineChart
                width={400}
                height={100}
                data={props.val}
                margin={{
                    top: 5,
                    right: 20,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray='3 3' />
                <XAxis dataKey='name' tick={false} />
                <YAxis />
                <Tooltip
                    position={{ x: 0, y: 0 }}
                    // wrapperStyle={{ width: '250px' }}
                />
                <Legend />
                <Line type='monotone' dataKey='value' stroke='#82ca9d' />
            </LineChart>
        </ResponsiveContainer>
    );
}
