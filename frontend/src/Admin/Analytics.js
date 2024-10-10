// // import React, { useState, useEffect } from 'react';
// // import { motion } from 'framer-motion';
// // import { Line, Bar, Doughnut } from 'react-chartjs-2';
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import { faCar, faChartPie, faChartLine, faTachometerAlt } from '@fortawesome/free-solid-svg-icons';

// // const Analytics = () => {
// //   const [loading, setLoading] = useState(false);

// //   // Dummy data for charts
// //   const carData = {
// //     labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
// //     datasets: [
// //       {
// //         label: 'Vintage Car Sales',
// //         data: [65, 59, 80, 81, 56, 55, 40],
// //         fill: true,
// //         backgroundColor: 'rgba(75,192,192,0.2)',
// //         borderColor: 'rgba(75,192,192,1)',
// //       },
// //     ],
// //   };

// //   const carTypeData = {
// //     labels: ['Sedan', 'Convertible', 'SUV', 'Truck'],
// //     datasets: [
// //       {
// //         data: [300, 50, 100, 40],
// //         backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
// //       },
// //     ],
// //   };

// //   useEffect(() => {
// //     setLoading(true);
// //     setTimeout(() => {
// //       setLoading(false);
// //     }, 2000);
// //   }, []);

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-gray-200 via-gray-100 to-gray-50 p-8">
// //       <motion.div
// //         className="bg-white shadow-xl border border-gray-300 rounded-lg p-8"
// //         initial={{ opacity: 0, y: 30 }}
// //         animate={{ opacity: 1, y: 0 }}
// //         transition={{ duration: 0.7, ease: 'easeOut' }}
// //         style={{
// //           background: 'linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%)', // Soft vintage background
// //         }}
// //       >
// //         <motion.h1
// //           className="text-4xl font-serif text-center mb-8 text-gray-800"
// //           initial={{ opacity: 0 }}
// //           animate={{ opacity: 1 }}
// //           transition={{ duration: 1 }}
// //         >
// //           Car Analytics Dashboard
// //         </motion.h1>

// //         {/* Analytics Grid Section */}
// //         <motion.div
// //           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
// //           initial={{ opacity: 0, y: 50 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.8 }}
// //         >
// //           {/* Sales Chart */}
// //           <motion.div
// //             className="bg-gray-800 text-white p-6 rounded-lg shadow-lg"
// //             whileHover={{ scale: 1.05 }}
// //             whileTap={{ scale: 0.95 }}
// //           >
// //             <FontAwesomeIcon icon={faChartLine} className="text-3xl mb-2" />
// //             <h2 className="text-xl font-semibold mb-4">Sales Over Time</h2>
// //             <Line data={carData} />
// //           </motion.div>

// //           {/* Car Types Pie Chart */}
// //           <motion.div
// //             className="bg-purple-500 text-white p-6 rounded-lg shadow-lg"
// //             whileHover={{ scale: 1.05 }}
// //             whileTap={{ scale: 0.95 }}
// //           >
// //             <FontAwesomeIcon icon={faChartPie} className="text-3xl mb-2" />
// //             <h2 className="text-xl font-semibold mb-4">Car Types Distribution</h2>
// //             <Doughnut data={carTypeData} />
// //           </motion.div>

// //           {/* Revenue Bar Chart */}
// //           <motion.div
// //             className="bg-blue-500 text-white p-6 rounded-lg shadow-lg"
// //             whileHover={{ scale: 1.05 }}
// //             whileTap={{ scale: 0.95 }}
// //           >
// //             <FontAwesomeIcon icon={faTachometerAlt} className="text-3xl mb-2" />
// //             <h2 className="text-xl font-semibold mb-4">Revenue by Car Type</h2>
// //             <Bar
// //               data={{
// //                 labels: ['Sedan', 'Convertible', 'SUV', 'Truck'],
// //                 datasets: [
// //                   {
// //                     label: 'Revenue',
// //                     backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
// //                     data: [150, 200, 180, 120],
// //                   },
// //                 ],
// //               }}
// //             />
// //           </motion.div>
// //         </motion.div>

// //         {loading && (
// //           <motion.p
// //             className="text-center text-lg font-semibold mt-8"
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 1 }}
// //             transition={{ duration: 0.5 }}
// //           >
// //             Loading analytics...
// //           </motion.p>
// //         )}
// //       </motion.div>
// //     </div>
// //   );
// // };

// // export default Analytics;
// // Import necessary modules from Chart.js
// import {
//     Chart, 
//     CategoryScale,   // for category scales on X-axis (like labels)
//     ArcElement,      // for pie/doughnut chart
//     BarElement,      // for bar charts
//     LinearScale,     // for linear scaling of data
//     Title,           // for the chart title
//     Tooltip,         // for tooltips
//     Legend           // for legends
// } from 'chart.js';

// // Import the chart component from react-chartjs-2
// import { Bar, Pie } from 'react-chartjs-2';

// // Register the required components
// Chart.register(CategoryScale, ArcElement, BarElement, LinearScale, Title, Tooltip, Legend);

// // Now define your chart component
// const AnalyticsPage = () => {
//     // Data for the bar chart
//     const barData = {
//         labels: ['Car A', 'Car B', 'Car C', 'Car D'], // X-axis labels
//         datasets: [
//             {
//                 label: 'Number of Bids',
//                 data: [12, 19, 3, 5],  // Example data
//                 backgroundColor: 'rgba(75, 192, 192, 0.6)', // Color of bars
//                 borderColor: 'rgba(75, 192, 192, 1)', // Border color
//                 borderWidth: 1
//             }
//         ]
//     };

//     // Data for the pie chart
//     const pieData = {
//         labels: ['Car A', 'Car B', 'Car C', 'Car D'],
//         datasets: [
//             {
//                 data: [300, 50, 100, 80], // Example data
//                 backgroundColor: [
//                     'rgba(255, 99, 132, 0.6)',
//                     'rgba(54, 162, 235, 0.6)',
//                     'rgba(255, 206, 86, 0.6)',
//                     'rgba(75, 192, 192, 0.6)'
//                 ],
//                 borderColor: [
//                     'rgba(255, 99, 132, 1)',
//                     'rgba(54, 162, 235, 1)',
//                     'rgba(255, 206, 86, 1)',
//                     'rgba(75, 192, 192, 1)'
//                 ],
//                 borderWidth: 1
//             }
//         ]
//     };

//     // Chart options (optional)
//     const options = {
//         responsive: true,
//         maintainAspectRatio: false,
//         plugins: {
//             legend: {
//                 display: true,
//                 position: 'top',
//             },
//             title: {
//                 display: true,
//                 text: 'Number of Bids per Car'
//             }
//         },
//         scales: {
//             x: {
//                 beginAtZero: true
//             },
//             y: {
//                 beginAtZero: true
//             }
//         }
//     };

//     return (
//         <div style={{ width: '80%', margin: '0 auto', paddingTop: '50px' }}>
//             {/* Bar Chart for Car Bids */}
//             <div style={{ height: '400px' }}>
//                 <h2>Bar Chart</h2>
//                 <Bar data={barData} options={options} />
//             </div>

//             {/* Pie Chart for Car Distribution */}
//             <div style={{ height: '400px', marginTop: '50px' }}>
//                 <h2>Pie Chart</h2>
//                 <Pie data={pieData} />
//             </div>
//         </div>
//     );
// };

// export default AnalyticsPage;
import React from 'react';
import {
    Chart,
    CategoryScale,
    ArcElement,
    BarElement,
    LinearScale,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
import { Bar, Pie } from 'react-chartjs-2';
import { motion } from 'framer-motion';

// Register Chart.js components
Chart.register(CategoryScale, ArcElement, BarElement, LinearScale, Title, Tooltip, Legend);

const AnalyticsPage = () => {
    // Data for the bar chart
    const barData = {
        labels: ['Car A', 'Car B', 'Car C', 'Car D'],
        datasets: [
            {
                label: 'Number of Bids',
                data: [12, 19, 3, 5],
                backgroundColor: [
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(255, 99, 132, 0.6)'
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(255, 99, 132, 1)'
                ],
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(0, 123, 255, 0.9)',
                hoverBorderColor: 'rgba(0, 123, 255, 1)',
            }
        ]
    };

    // Data for the pie chart
    const pieData = {
        labels: ['Car A', 'Car B', 'Car C', 'Car D'],
        datasets: [
            {
                data: [300, 50, 100, 80],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 1,
                hoverBackgroundColor: [
                    'rgba(255, 99, 132, 0.8)',
                    'rgba(54, 162, 235, 0.8)',
                    'rgba(255, 206, 86, 0.8)',
                    'rgba(75, 192, 192, 0.8)'
                ],
            }
        ]
    };

    // Chart options with animations
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                position: 'top',
                labels: {
                    font: {
                        size: 14,
                        family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                        weight: 'bold'
                    },
                    color: '#4b5563',
                }
            },
            title: {
                display: true,
                text: 'Bids Distribution by Car',
                color: '#333',
                font: {
                    size: 18,
                    weight: 'bold',
                    family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"
                },
                padding: {
                    top: 20,
                    bottom: 30
                }
            },
            tooltip: {
                enabled: true,
                backgroundColor: 'rgba(0,0,0,0.8)',
                titleFont: {
                    size: 16
                },
                bodyFont: {
                    size: 14
                },
                borderWidth: 1,
                borderColor: '#ccc',
            }
        },
        scales: {
            x: {
                beginAtZero: true,
                grid: {
                    display: false
                }
            },
            y: {
                beginAtZero: true,
                grid: {
                    color: '#e5e7eb',
                    borderDash: [5, 5]
                }
            }
        },
        animation: {
            duration: 2000,
            easing: 'easeInOutBounce',
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="bg-gray-100 p-8 min-h-screen"
        >
            <div className="max-w-6xl mx-auto">
                {/* Bar Chart */}
                <motion.div
                    className="bg-white p-6 rounded-lg shadow-lg mb-12"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1 }}
                >
                    <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Bar Chart: Car Bids</h2>
                    <div className="relative" style={{ height: '400px' }}>
                        <Bar data={barData} options={options} />
                    </div>
                </motion.div>

                {/* Pie Chart */}
                <motion.div
                    className="bg-white p-6 rounded-lg shadow-lg"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Pie Chart: Car Distribution</h2>
                    <div className="relative" style={{ height: '400px' }}>
                        <Pie data={pieData} options={options} />
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default AnalyticsPage;
