"use client"

import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, TimeScale } from 'chart.js';
import { CandlestickController, CandlestickElement, OhlcController, OhlcElement } from 'chartjs-chart-financial';
import { Chart } from 'react-chartjs-2';
// import { ArrowUpDown } from 'lucide-react';
 import 'chartjs-adapter-date-fns';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale,
  CandlestickController,
  CandlestickElement,
  OhlcController,
  OhlcElement
);

const timeFrames = ['1H', '1D', '3D', '1M', '1Y'];

const generateDummyData = (dataPoints) => {
  const data = [];
  let price = 300;
  const now = new Date();
  for (let i = 0; i < dataPoints; i++) {
    const open = price + Math.random() * 20 - 10;
    const high = open + Math.random() * 10;
    const low = open - Math.random() * 10;
    const close = low + Math.random() * (high - low);
    data.push({
      x: now.getTime() - (dataPoints - i) * 86400000,
      o: open,
      h: high,
      l: low,
      c: close
    });
    price = close;
  }
  return data;
};

const CryptoChart = () => {
  const [selectedTimeFrame, setSelectedTimeFrame] = useState('1D');
  const [chartData, setChartData] = useState(null);
  const [currentPrice, setCurrentPrice] = useState(null);

  useEffect(() => {
    const data = generateDummyData(30);

    const newChartData = {
      datasets: [
        {
          label: 'ETH/USD',
          data: data,
          
          borderColor: {
            up: '#5CFF9C', // Color for upward candles
            down: '#FF4C4C', // Color for downward candles
          },
          backgroundColor: {
            up: '#5CFF9C', // Fill color for upward candles
            down: '#FF4C4C', // Fill color for downward candles
          },
        },
      ],
    };

    setChartData(newChartData);
    setCurrentPrice(data[data.length - 1].c.toFixed(2));
  }, [selectedTimeFrame]);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        type: 'time',
        time: {
          unit: 'day',
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        ticks: {
          color: 'rgba(255, 255, 255, 0.5)',
        },
        
      },
      y: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        ticks: {
          color: 'rgba(255, 255, 255, 0.5)',
          callback: (value) => `$${value.toFixed(2)}`,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        mode: 'index',
        intersect: false,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: 'white',
        bodyColor: 'white',
        borderColor: 'rgba(255, 255, 255, 0.2)',
        borderWidth: 1,
        callbacks: {
          label: (context) => {
            const point = context.raw;
            return [
              `Open: $${point.o.toFixed(2)}`,
              `High: $${point.h.toFixed(2)}`,
              `Low: $${point.l.toFixed(2)}`,
              `Close: $${point.c.toFixed(2)}`,
            ];
          },
        },
      },
    },
    interaction: {
      mode: 'nearest',
      axis: 'x',
      intersect: false,
    },
  };
  const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        // Check for user's theme preference in local storage
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.documentElement.classList.add('dark');
            setIsDarkMode(true);
        } else {
            document.documentElement.classList.remove('dark');
            setIsDarkMode(false);
        }
    }, []);

    const toggleTheme = (theme) => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            setIsDarkMode(true);
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            setIsDarkMode(false);
        }
    };

  return (
    <div className={`  ${isDarkMode? "bg-[#0F0C19]" : "bg-[#41435a]"}  w-screen  md:w-auto text-white p-4`}>
      <div className={`max-w-6xl mx-auto ${isDarkMode? "bg-[#0F0C19]" : "bg-[#41435a]"} rounded-lg p-6`}>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
          <div className="flex items-center gap-2 mb-4 sm:mb-0">
            <h2 className="text-xl font-bold">ETH/USD</h2>
            {/* <ArrowUpDown className="h-5 w-5 text-gray-400" /> */}
          </div>
          <div className="flex gap-2">
            {timeFrames.map((tf) => (
              <button
                key={tf}
                className={`px-3 py-1 rounded ${
                  selectedTimeFrame === tf
                    ? 'bg-[#fcf7] text-white'
                    : 'bg-[#2a2a35] text-gray-400 hover:bg-[#3a3a45]'
                }`}
                onClick={() => setSelectedTimeFrame(tf)}
              >
                {tf}
              </button>
            ))}
          </div>
        </div>
        <div className="relative h-[400px]">
          {chartData ? (
            <Chart type="candlestick" data={chartData} options={options} />
          ) : (
            <div className="flex items-center justify-center h-full">
              <p>Loading chart data...</p>
            </div>
          )}
          {currentPrice && (
            <div className="absolute right-0 top-0 bg-[#ff1cf7] px-3 py-1 rounded text-sm">
              ${currentPrice}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CryptoChart;