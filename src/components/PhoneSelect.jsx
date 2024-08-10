import React from 'react'
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'

export default function PhoneSelect({phone , setPhone, isFocused, setIsFocused}) {
    const handleFocus = () => {
        setIsFocused(!isFocused);
      };
  return (
    <>
                        <PhoneInput
                              country={"ar"}
                              value={phone}
                              onChange={(e)=>setPhone(e)}
                              placeholder="Telefono"
                              inputClass={`phoneInp ${isFocused ? 'focused' : ''}`}
                              dropdownClass="phone-dropdown"
                              containerStyle={{width:"320px", marginTop:"15px", marginLeft:"-20px"}}
                              dropdownStyle={{width:"320px"}}
                              inputStyle={{borderColor:"#aae1e9", width:"300px", marginLeft:"42px",paddingLeft:"10px" , borderRadius:"6px" }}
                              buttonStyle={{borderRadius:"6px",  background:"transparent" }}
                              onlyCountries={['ar', 'bo', 'br', 'cl', 'co', 'cr', 'cu', 'do', 'ec', 'sv', 'gt', 'hn', 'mx', "ni",  'pa', 'py','pe', 'pr', 'uy', 've']}
                              onFocus={handleFocus}
                              onBlur={handleFocus}
                         /> 
      
    </>
  )
}
