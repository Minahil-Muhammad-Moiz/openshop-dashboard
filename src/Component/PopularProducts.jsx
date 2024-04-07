import React from 'react'
import { popularProductsData } from '../Lib/Constant/tableData'
import { Link } from 'react-router-dom'

const PopularProducts = () => {
    return (
        <div className="bg-white px-4 pt-3 pb-4 rounded border border-gray-200 w-[18rem]">
            <strong className="text-gray-700 font-medium">Popular Products</strong>
            <div className="mt-4 flex flex-col gap-3">
                {popularProductsData.map((product) => (
                    <Link to={`/products/${product.id}`} className="flex hover:no-underline">
                        <div className="w-10 h-10 min-w-10 bg-gray-200 rounded-sm overflow-hidden">
                            <img
                                src={product.product_thumbnail}
                                alt={product.product_name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className={"ml-4 flex-1 ${product.product_stock === 0 'text-orange-500': 'text-gray-400'}"}>
                            <p className="text-sm text-gray-800">{product.product_name}</p>
                            <span className="text-sm font-medium">
                                {product.product_stock === 0 ? 'Out of Stock' : product.product_stock + ' in stock'}
                            </span>
                        </div>
                        <div className="text-xs text-gray-400 pl-2">{product.product_price}</div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default PopularProducts
