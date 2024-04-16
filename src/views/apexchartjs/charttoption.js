// chartOptions.js
export const chartOptions = {
    chart: {
        height: 350,
        type: 'line',
        zoom: {
        enabled: false
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth'
    },
    markers: {
        size: 5, // Ukuran titik data
        colors: ['#008FFB'], // Warna titik data
        shape: 'circle' // Bentuk titik data
    },
    grid: {
        row: {
        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5
        },
    },
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep','Okt', 'Nov', 'Des'],
    }
};