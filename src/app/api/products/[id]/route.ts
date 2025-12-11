import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

const productsFilePath = path.join(process.cwd(), 'src/lib/products.json')

function readProducts() {
  const fileContents = fs.readFileSync(productsFilePath, 'utf8')
  return JSON.parse(fileContents)
}

function writeProducts(products: any[]) {
  fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2))
}

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const products = readProducts()
    const product = products.find((p: any) => p.id === parseInt(params.id))

    if (!product) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 })
    }

    return NextResponse.json(product)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to read product' }, { status: 500 })
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const updatedProduct = await request.json()
    const products = readProducts()
    const index = products.findIndex((p: any) => p.id === parseInt(params.id))

    if (index === -1) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 })
    }

    updatedProduct.id = parseInt(params.id)
    products[index] = updatedProduct
    writeProducts(products)

    return NextResponse.json(updatedProduct)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update product' }, { status: 500 })
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const products = readProducts()
    const index = products.findIndex((p: any) => p.id === parseInt(params.id))

    if (index === -1) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 })
    }

    const deletedProduct = products.splice(index, 1)[0]
    writeProducts(products)

    return NextResponse.json(deletedProduct)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete product' }, { status: 500 })
  }
}