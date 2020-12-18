import React from 'react'

function Form() {
  return (
    <main>
      <div className="form-container">
        <header>
          <h1>Build Your Own Pizza</h1>
          <div className="image-container">
            <img src="" alt="pizza banner" />
          </div>
        </header>

        <form>
          <h2>Build your own pizza</h2>

          <div>
            <label>
              Choice of size
              <span>Required</span>
              <select>
                <option value="">Select</option>
                <option value="s">small</option>
                <option value="m">medium</option>
                <option value="l">large</option>
              </select>
            </label>
          </div>


        </form>
      </div>
    </main>
  )
}

export default Form
