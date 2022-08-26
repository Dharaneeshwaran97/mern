import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
const Home = () => {
    const [result, setData] = useState([]);

    useEffect(() => {
        const getAllUserUrl = "http://localhost:5000/getAllUser";
        const getEmailBasedUser="http://localhost:5000/getEmailBasedUser";
        
        fetch(getAllUserUrl,{
            method: 'GET',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
          })
            .then(res => res.json())
            .then(data => console.log("Dharaneesh test",data.message));
    // }, []);
        fetch(getEmailBasedUser, {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userName: 'dharani'
            })
          })
            .then(res => res.json())
            .then(data => setData(data.message)
            );
           
    }, []);
    return (
        <div style={{ display: 'flex' }}>
            {
                result.map(data =>
                    <div class="card" style={{ width: "18rem;" }}>
                        <img src={require("../assets/logo.jpg")} style={{ height: "40px", width: "40px" }} class="card-img-top" alt="..." />


                        <div class="card-body">
                            <h5 class="card-title">{data.userName}</h5>
                            <h6 class="card-title">{data.email}</h6>

                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>



                    </div>
                )
            }
        </div>
    )

}

export default Home;