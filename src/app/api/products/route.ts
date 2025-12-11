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

export async function GET() {
  try {
    const products = readProducts()
    return NextResponse.json(products)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to read products' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const newProduct = await request.json()
    const products = readProducts()

    // Generate new ID
    const newId = Math.max(...products.map((p: any) => p.id)) + 1
    newProduct.id = newId

    products.push(newProduct)
    writeProducts(products)

    return NextResponse.json(newProduct, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to add product' }, { status: 500 })
  }
}