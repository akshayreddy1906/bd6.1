let {getProducts, getProductById, addProduct} = require('../product');
describe("Products Functions",()=>{
  it("should get all products",()=>{
    let products = getProducts();
    expect(products.length).toBe(4);
    expect(products).toEqual([
        { 'id': 1, 'name': 'Laptop', 'category': 'Electronics' },
        { 'id': 2, 'name': 'Coffee Maker', 'category': 'Appliances' },
        { 'id': 3, 'name': 'Headphones', 'category': 'Electronics' },
        { 'id': 4, 'name': 'Running Shoes', 'category': 'Footwear' }
    ]);
  });
  it("should get a product by id",()=>{
    let product = getProductById(1);
    expect(product).toEqual( { 'id': 1, 'name': 'Laptop', 'category': 'Electronics' });
  });
    it("should return undefined for a non-existent product",()=>{
    let product = getProductById(5);
    expect(product).toBeUndefined();
    });
  it ("should add a new product",()=>{
    let newProduct = {'id':5, 'name': 'smart watch', 'category': 'Watches'}
    let addedProduct = addProduct(newProduct);
    expect(addedProduct).toEqual({'id':5, 'name': 'smart watch', 'category': 'Watches'});
  const products = getProducts();
  expect(products.length).toBe(5)
    });
  });