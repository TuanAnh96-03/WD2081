import { Button, Form, Input, InputNumber, message, Select } from 'antd'
import React from 'react'
import type { IProduct, TProduct } from '../../interface/product'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import type { ICategory } from '../../interface/category'

const ProductAdd = () => {
  const queryclient = useQueryClient()
  const navigate = useNavigate()
  const { data: categories } = useQuery<ICategory[]>({
    queryKey: ['categories'],
    queryFn: async () => {
      const { data } = await axios.get('http://localhost:3000/categories')
      return data
    }
  })
  const mutation = useMutation({
    mutationFn:async (productdata:TProduct)=>{
        try {
          const {data} = await axios.post(`http://localhost:3000/products`,productdata)
          return data
        } catch (error) {
          throw error
        }
    },
    onSuccess: (data:IProduct)=>{
      message.success("Thêm mới thành công")
      // Cập nhật dữ liệu vào querykey
      queryclient.getQueryData(["products"])&&
      queryclient.setQueryData(["products"],(olddata:IProduct[])=>[...olddata,data])
      navigate('/admin/products')
    },
    onError: (err)=>{
      message.error("Thêm thất bại")
    }
  })
  const onFinish = (productdata:TProduct)=>{
      // console.log(productdata);  
      mutation.mutate(productdata)    
  }
  return (
    <div style={{ padding: 20 }}>
      <h1 className="text-center text-2xl uppercase mb-5">
        Thêm mới sản phẩm
      </h1>

      <Form
        layout="vertical"
        style={{ maxWidth: 600, margin: '0 auto' }}
        onFinish={onFinish}
      >
        <Form.Item<TProduct>
          label="Tên sản phẩm"
          name="name"
          rules={[{ required: true, message: 'Không được để trống' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item<TProduct>
          label="Ảnh sản phẩm"
          name="image"
          rules={[{ required: true, message: 'Không được để trống' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<TProduct>
          label="Giá tiền"
          name="price"
          rules={[
            { required: true, message: 'Giá >= 1000', type: 'number', min: 1000 }
          ]}
        >
          <InputNumber style={{ width: '100%' }} />
        </Form.Item>

        <Form.Item<TProduct>
          label="Mô tả"
          name="description"
          rules={[{ required: true, message: 'Không được để trống' }]}
        >
          <Input.TextArea rows={4} />
        </Form.Item>
        <Form.Item<TProduct>
          label="Danh mục"
          name="categoryId"
          rules={[{ required: true, message: 'Chọn danh mục' }]}
        >
          <Select
            placeholder="Chọn danh mục"
            showSearch
            optionFilterProp="children"
          >
            {categories?.map((c) => (
              <Select.Option key={c.id} value={c.id}>
                {c.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            loading={mutation.isPending}
            block
          >
            Thêm sản phẩm
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default ProductAdd