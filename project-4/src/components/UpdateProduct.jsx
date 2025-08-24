import React from 'react'

function UpdateProduct({ product, login, signup }) {
    const { isUpdateProduct, setUpdateProduct } = product
    const { isLogin, setLogin } = login
    const { isSignup, setSignup } = signup

    return (
        <section className="update-product-container" onClick={(e) => {e.stopPropagation(); setUpdateProduct(false)}}>
            <form onClick={(e) => {e.stopPropagation(); setUpdateProduct(true)}}>
                <div>
                    <label>Product Name</label>
                    <input
                        name="name"
                        placeholder="Enter product name"
                        required
                    />
                </div>
                <div>
                    <label>Description</label>
                    <textarea
                        name="description"
                        placeholder="Enter product description"
                        rows="3"
                        required
                    ></textarea>
                </div>
                <div>
                    <label>Price (₹)</label>
                    <input
                        type="number"
                        name="price"
                        placeholder="Enter product price"
                        required
                    />
                </div>
                <div>
                    <label>Category</label>
                    <input
                        name="category"
                        placeholder="e.g. Electronics, Books"
                    />
                </div>
                <div>
                    <label>Stock Quantity</label>
                    <input
                        type="number"
                        name="stock"
                        placeholder="Available stock"
                    />
                </div>
                <button className="btn" type="submit">Update Product</button>
            </form>
        </section>
    )
}

export default UpdateProduct
