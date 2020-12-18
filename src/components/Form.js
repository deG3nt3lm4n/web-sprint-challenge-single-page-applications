import React from 'react'

function Form({values, change, submit, disabled, err}) {

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    const valueToUSe = type === "checkbox" ? checked : value;
    change(name, valueToUSe);
  }

  const onSubmit = (e) => {
    e.preventDefault()
    submit()
  }


  return (
    <main>
      <div className="form-container">
        <header>
          <h1>Build Your Own Pizza</h1>
          <div className="image-container">
            <img src="https://images.unsplash.com/photo-1589010588553-46e8e7c21788?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1127&q=80" alt="pizza banner" />
          </div>
        </header>

        <form onSubmit={onSubmit}>
          <h2>Build your own pizza</h2>

          {/* name */}
          <div>
            <label>
              Name:
              <input type="text" name="name" value={values.name} onChange={onChange}/>
              {/* error message */}
              <h6>{err.name}</h6>
            </label>
          </div>

          {/* pizza size */}
          <div>
            <label>
              Choice of size:
              <span>Required</span>
              <select value={values.size} name="size" onChange={onChange}>
                <option value="">Select</option>
                <option value="small">small</option>
                <option value="medium">medium</option>
                <option value="large">large</option>
              </select>
            </label>
          </div>

          {/* pizza topping */}
          <div>
            <h3>Topping: </h3>
            <label>
               Cheese
               <input type="checkbox" name="cheese" checked={values.cheese} onChange={onChange}/>
            </label>
            <label>
              Pepperoni:
              <input type="checkbox" name="pepperoni" checked={values.pepperoni} onChange={onChange} />
            </label>
            <label>
              Onions:
              <input type="checkbox" name="onions" checked={values.onions} onChange={onChange} />
            </label>
            <label>
              Peppers:
              <input type="checkbox" name="peppers" checked={values.peppers} onChange={onChange} />
            </label>
          </div>

          {/* special instructions */}
          <div>
            <label>
              Special instructions:
              <input type="text" name="specialInstructions" value={values.specialInstructions} onChange={onChange} />
            </label>
          </div>

          <button disabled={disabled}>Submit</button>

        </form>
      </div>
    </main>
  )
}

export default Form
