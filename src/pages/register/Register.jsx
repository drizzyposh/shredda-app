import { DriveFolderUploadOutlined } from '@mui/icons-material'
import React, { Fragment, useState } from 'react'
import '../register/Register.scss'
import { Link } from 'react-router-dom'
import { createUserWithEmailAndPassword, updateProfile} from "firebase/auth";
import { auth, db, storage} from '../../firebase';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 



const Register = () => {
  const [img, setImg] = useState(null)
  const [error, setError] = useState(false)


  const handleRegister = async (e) => {
    e.preventDefault()
    const displayName = e.target[0].value
    const email = e.target[1].value
    const password = e.target[2].value
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password)

      const storageRef = ref(storage, displayName)

      const uploadTask = uploadBytesResumable(storageRef, img)

      uploadTask.on (
        (error) => {
          setError(true)
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then( async (downloadURL) => {
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            })
            // console.log(res.user)
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            setDoc(doc(db, "userPosts", res.user.uid), { messages: []})
          })
        }
      )
      console.log(res.user)
    } catch (error) {
      setError(true)
    }
  }  
   
     

  return (
    <Fragment>
      <div className="register">
        <div className="registerwrapper">
            <div className="registerleft">
                <h3 className="registerlogo">Shredda</h3>
                <span className="registerdesc">Connect with friends & people around the world.</span>
            </div>

            <div className="registerright">
                <div className="registerbox">
                    <div className="top">
                        <img src={img ? URL.createObjectURL(img) :  '/assets/profileCover/DefaultProfile.jpg'} alt="" className='profileimg'/>
                        <div className="forminput">
                            <label htmlFor="file">
                            Image: <DriveFolderUploadOutlined className='icon'/>
                            <input type="file" name='file' id="file" accept='.png,.jpg,.jpeg' style={{ display: "none"}} onChange={(e) => setImg(e.target.files[0])}/>
                            </label>
                        </div>
                    </div>

                    <div className="bottom">
                        <form className="bottombox" onSubmit={handleRegister}>
                            <input type="text" placeholder='Username' 
                            id='username'
                            className='registerinput' required/>

                            <input type="text" placeholder='Email' 
                            id='email'
                            className='registerinput' required/>

                            <input type="password" placeholder='Password'
                             id='password' className='registerinput' required/>

                            {/* <input type="text" placeholder='Confirm Password'  id='password' className='registerinput' required/> */}
                            
                            <button className="registerbtn" type='submit'>Sign Up</button>
                            <Link to="/login"><button className="loginregisterbtn">LogIn Account</button></Link>

                            {error && <span style={{ color: "red" }}>Something went wrong</span>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Register
