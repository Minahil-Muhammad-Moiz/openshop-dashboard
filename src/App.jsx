import Layout from './Component/Shared/Layout'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './Component/Dashboard'
import Products from './Component/Products'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="products" element={<Products />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default App
