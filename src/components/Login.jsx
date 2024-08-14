"use client"
import Link from "next/link";
import { useState, useEffect } from "react";
import PaisesSelect from "@/components/PaisesSelect";
import Recaptcha from "@/components/Recaptcha";
// icon
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { ImLab } from "react-icons/im";
import { FcGoogle } from "react-icons/fc";
import { TbWorldWww } from "react-icons/tb";
import PhoneSelect from "./PhoneSelect";



export default function Home() {
    const [phone, setPhone] = useState('');     
    const [isSignUp, setIsSignUp] = useState(false);   
    const [isFocused, setIsFocused] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState(null);

            const handleFocus = () => {
            setIsFocused(!isFocused);
            };
            
            const handleSignIn = () => {
                setIsSignUp(!isSignUp);
                
                
            };

            useEffect(() => {
                const container = document.getElementById('container');
                const signInButton = document.getElementById('signIn');
                const signUpButton = document.getElementById('signUp');
            
                const handleFocusChange = (event) => {
                  if (event.target === signInButton) {
                    container?.classList.remove('right-panel-active');
                    container?.classList.remove('container');
                    container?.classList.add('container');
                  } else if (event.target === signUpButton) {
                    container?.classList.remove('container');
                    container?.classList.add('container');
                    container?.classList.add('right-panel-active');
                  }
                };
            
                signInButton?.addEventListener('focus', handleFocusChange);
                signUpButton?.addEventListener('focus', handleFocusChange);
            
                return () => {
                  signInButton?.removeEventListener('focus', handleFocusChange);
                  signUpButton?.removeEventListener('focus', handleFocusChange);
                };
              }, []);


    return (
             
                    <section className={`container ${isSignUp ? "right-panel-active" : ""} `} id="container">   

                            <section className="form-container sign-in-container">
                                 {/* Formulario de iniciar sesion */}
                                    
                                     <form >
                                             <h1>Iniciar Sesion</h1>
                                            
                                             <label htmlFor="email" className="email"> 
                                                     <HiOutlineMail className="icon"/>
                                                     <input type="email" id="email" placeholder="Email" className="input"  />
                                             </label>

                                             <label htmlFor="password"> 
                                                    <RiLockPasswordLine className="icon"/>
                                                    <input type="password" id="password" placeholder="Password" className="input" />
                                             </label>

                                             <a href="#" className="btnOlvidaste">Olvidaste tu contraseña?</a>

                                             <button className="btnIngresar">Ingresar</button>

                                             <section className="social-container">
                                                    
                                                    <span>------- o inicia con tu cuenta de --------</span> 
                                                    <button className="btnGoogle " ><FcGoogle className="google"/> Google</button> 

                                            </section>
                                            
                                     </form>
                                     <h2 className="titleghost">No tienes cuenta? </h2>
                                     <button className="ghost2" id="signUp" onClick={handleSignIn}>REGISTRATE</button>
                            </section>


                            <section className="form-container sign-up-container">
                                 {/* Formulario de registro */}

                                    <form action="#">

                                            <h1 className="titleUp">Crear Cuenta</h1>

                                            <label htmlFor="nameApell"> 
                                                <FaRegUser  className="iconUserR"/>
                                                <input type="text" id="nameApell"  placeholder="Nombre y Apellido" className="input" required/>
                                            </label>

                                            <label htmlFor="ema"> 
                                                <HiOutlineMail className="iconEmailR"/>
                                                <input type="email" id="ema"  placeholder="Email" className="input" required />
                                            </label>

                                            <label htmlFor="pass"> 
                                                <RiLockPasswordLine className="iconPassR"/>
                                                <input type="password" id="pass"  placeholder="Contraseña" className="input" required/>
                                            </label>

                                            <label htmlFor="rePass"> 
                                                <RiLockPasswordLine className="iconPassR"/>
                                                <input type="password" id="rePass"  placeholder="Repita su contraseña" className="input" required />
                                            </label>
                                           
                                        
                                        
                                           <PaisesSelect isFocused={isFocused} setIsFocused={setIsFocused} 
                                                        selectedCountry={selectedCountry}    
                                                        setSelectedCountry={setSelectedCountry}
                                            />  

                             
                                           <PhoneSelect phone={phone} setPhone={setPhone} isFocused={isFocused} setIsFocused={setIsFocused}/>

                                 
                                            

                                            <label htmlFor="nameLab"> 
                                                <ImLab  className="iconUserR"/>
                                                <input type="text" id="nameLab"  placeholder="Nombre del laboratorio" className="inputNameLab" required/>
                                            </label>

                                            <span className="titleLab">Nombre de la pagina de su laboratorio en la nube: </span>

                                            <div className="divN">
                                                <TbWorldWww className="iconPassRe"/>
                                                <div className="nameUrl" >
                                                    <label htmlFor="npagin"> 
                                                            <input type="text" required id="npagin"  placeholder="Nombre para la pagina" className="input2"  />
                                                            <div className="titlePagin">.socilabcloud.com</div>  

                                                        </label>
                                                </div>

                                            </div>

                                            <Recaptcha/>
                                          
                                            <section className="termYcond">
                                                <input type="checkbox"  id="terms-and-conditions" name="terms-and-conditions" required/> 
                                                <span className="lTermyCond">Al registrarse usted acepta nuestra <Link href="" className="link">  política de privacidad </Link> 
                                                        <Link href="" className="link"> y los términos de uso.</Link> 
                                                </span>
                                            
                                            </section>   
                                            
                                            <button className="btnCrearCuenta">Crear Cuenta</button> 
                                     </form>

                                     <h2 className="titleghost2">Ya tienes cuenta? </h2>
                                     <button className="ghost2" id="signUp" onClick={handleSignIn}>INICIA SESION</button>

                                </section> 
                        
                        
                            <section className={`overlay-container `}>
                                <div className="overlay">
                                <div className="overlay-panel overlay-left">
                                    <h1>¡Bienvenido de nuevo!</h1>
                                    <p>Para mantenerse conectado con nosotros, inicie sesión con su información personal.</p>
                                    <button className="ghost" id="signIn" onClick={handleSignIn}>Iniciar sesion</button>
                                </div>
                                <div className="overlay-panel overlay-right">
                                    <h1>Hola, amig@!</h1>
                                    <p>Ingresa tus datos personales y comienza a utlizar nuestro sofware SOCILAB! </p>
                                    <button className="ghost" id="signUp" onClick={handleSignIn}>Registrate</button>
                                </div>
                                </div>
                            </section> 
                </section>


              

    )

}