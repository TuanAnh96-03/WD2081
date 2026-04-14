import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import type { IProduct } from './interface/product'
import ProductItem from './components/client/productitem'
import { Route, Router, Routes, useRoutes } from 'react-router-dom'
import Home from './pages/Home'
import Detail from './pages/Detail'
import Category from './pages/Category'
import ClientLayout from './layouts/ClientLayout'
import AdminLayout from './layouts/AdminLayout'
import Products from './pages/admin/Products'
import ProductAdd from './pages/admin/ProductAdd'
import Cart from './pages/Cart'
import ProductEdit from './pages/admin/ProductEdit'
import Login from './pages/Login'
import Register from './pages/Register'
interface IMessage{
  user:string,
  message:string
}

function App() {
  const router = useRoutes([
    {path:'/',Component:ClientLayout,children:[
      {path:'',Component:Home},
      {path:'detail/:id',Component:Detail},
      {path:'category/:id',Component:Category},
      {path: 'cart' , Component: Cart},
      {path:'login',Component:Login},
      {path:'register',Component:Register},
    ]},
    {path:'/admin',Component:AdminLayout,children:[
      {path:'products',Component:Products},
      {path:'products/add',Component:ProductAdd},
      {path:'products/edit/:id',Component:ProductEdit},

    ]}
    
  ])
  return router
}

export default App
