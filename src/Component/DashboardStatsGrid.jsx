import React from 'react'
import { IoBagHandle, IoCart, IoPeople, IoPieChart } from 'react-icons/io5'

const DashboardStatsGrid = () => {
    return (
        <div className="flex gap-3 w-full">
            <BoxWrapper>
                <div className="flex justify-center items-center bg-sky-500 rounded-full h-10 w-10">
                    <IoBagHandle className="text-2xl text-white" />
                </div>
                <div className="pl-3">
                    <span className="text-sm text-gray-500 font-light">Total Sales</span>
                    <div className="flex items-center ">
                        <strong className="text-xl text-gray-700 font-semibold">$3442</strong>
                        <span className="text-sm text-green-500 pl-2">+231</span>
                    </div>
                </div>
            </BoxWrapper>
            <BoxWrapper>
                <div className="flex justify-center items-center bg-red-500 rounded-full h-10 w-10">
                    <IoPieChart className="text-2xl text-white" />
                </div>
                <div className="pl-3">
                    <span className="text-sm text-gray-500 font-light">Total Expenses</span>
                    <div className="flex items-center">
                        <strong className="text-xl text-gray-700 font-semibold">$2363</strong>
                        <span className="text-sm text-green-500 pl-2">-431</span>
                    </div>
                </div>
            </BoxWrapper>
            <BoxWrapper>
                <div className="flex justify-center items-center bg-yellow-400 rounded-full h-10 w-10">
                    <IoPeople className="text-2xl text-white" />
                </div>
                <div className="pl-3">
                    <span className="text-sm text-gray-500 font-light">Total Customers</span>
                    <div className="flex items-center ">
                        <strong className="text-xl text-gray-700 font-semibold ">4572</strong>
                        <span className="text-sm text-red-600 pl-2">-31</span>
                    </div>
                </div>
            </BoxWrapper>
            <BoxWrapper>
                <div className="flex justify-center items-center bg-green-500 rounded-full h-10 w-10">
                    <IoCart className="text-2xl text-white" />
                </div>
                <div className="pl-3">
                    <span className="text-sm text-gray-500 font-light">Total Orders</span>
                    <div className="flex items-center">
                        <strong className="text-xl text-gray-700 font-semibold">4778</strong>
                        <span className="text-sm text-red-600 pl-2">-21</span>
                    </div>
                </div>
            </BoxWrapper>
        </div>
    )
}

export default DashboardStatsGrid

const BoxWrapper = ({ children }) => {
    return <div className="flex items-center border border-gray-200 rounded-sm flex-1 bg-white p-4">{children}</div>
}
