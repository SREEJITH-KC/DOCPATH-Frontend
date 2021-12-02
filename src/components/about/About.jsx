
import React from 'react'
import Navbar from '../navbar/Navbar'
import './About.css'
import aboutus from './about.png'


function About() {
    return (
        <>
        <Navbar />
           <div >
            <img src= {aboutus} class="float-left" alt="img"  />
            </div>
            
        
        <div className="text" >
                <p >DocPath is an Indian startup company, established in 2021 in India. <br/>
                    In this covid situations, we are helping people to take the appoitments of verified and trusted
                    Hospitals and doctors. This will reduce your time to go hospital and sit there till your number.
                    and in case of this covid of situations you dont need to go to hospital and rush there, instead 
                    you can take the best doctors appoitments from home, and you can talk with then in virtual mode from 
                    our application. <br/>
                    you will get here best treatment from best of hospitals and doctors of your problems.
                    you can connect to our doctors in your prefferd time slot in the video call and get your treatment.
                    <br />
                    here , you can see the posts bt our best of doctors, which they will share here, you can visite posts
                    and see what our doctors are telling about current situation.

                    to save your time and money , you can go for this, our moto is to reduced the rush of the hospital and
                    give you best.

                    we simply connect you to doctors from our application.
                </p>
            </div>
            <div >
            <table>
  <tr>
    <th>Name</th>
    <th>Email</th>
    <th>Contact</th>
  </tr>
  <tr>
    <td>Tejas </td>
    <td>ABC@gmail.com</td>
    <td>9000000000</td>
  </tr>
  <tr>
    <td>Sai Teja</td>
    <td>Sai@gmail.com</td>
    <td>9000000001</td>
  </tr>
  <tr>
    <td>Shreejith</td>
    <td>Sree@gmail.com</td>
    <td>9000000002</td>
  </tr>
</table>
            </div>
            </>
    )
}

export default About



