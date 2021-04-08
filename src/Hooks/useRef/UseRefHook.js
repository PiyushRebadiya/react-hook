import React, { useRef , useState , useEffect } from 'react'

const UseRefHook = () => {
    const [show, setShow] = useState(false)
    const name = useRef(null)
    useEffect(() => {
      name.current.focus()
    }, [])
    const submitForm = (e) => {
        e.preventDefault()
        console.log("submitForm",name.current.value);
        const nameChange  = name.current.value
        if(nameChange === "") {
            alert("plz fill the value!!!")
        }else{
            setShow(true)
        }
    }
    return (
        <div>
            <form action="" onSubmit={submitForm}>
                <div>
                    <label htmlFor="name">Enter Your Lucky Name</label>
                    <br />
                    <input type="text" id="name" ref={name}/>
                </div>
                <button>submit</button>
            </form>
            <p>{ show && `Your lucky name is ${name.current.value} `}</p>
        </div>
    )
}

export default UseRefHook
