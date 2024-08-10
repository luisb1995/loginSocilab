import Select from 'react-select';
import {countries }from "@/db/country"
import { GiWorld } from "react-icons/gi";

export default function PaisesSelect({isFocused,setIsFocused,selectedCountry,setSelectedCountry}) {

  const id = 'mi pais';

    const handleFocus = () => {
      setIsFocused(!isFocused);
    };
    const handleChange = (newValue) => {
      if (newValue) {
        setSelectedCountry(newValue); // Update the state with the new value
      } else {
        setSelectedCountry(null);
      }
    };


  return (
    <>
        <label htmlFor="pais">
                  <GiWorld className="iconWorldR"/>
                
                  <Select
                         instanceId="my-select-instance"
                         options={countries}
                         value={selectedCountry}
                         onChange={handleChange}
                         className={`selectPaisesR ${isFocused ? 'focused' : ''}`}
                         placeholder="Seleccione el pais"
                         formatOptionLabel={(option) => (
                                <div 
                                       key={`${option.value}-${option.label}`}
                                      className="divPaisR"  style={{ display: 'flex', alignItems: 'center' }}>
                                      <img src={option.flag} alt={option.label} style={{ width: 20, marginRight: 10 }} />
                                      {option.label}
                                </div>
                        )}

                        onFocus={handleFocus}
                        onBlur={handleFocus}
                        styles={{
                                 control:(styles,state) =>{
                                     return {...styles,
                                             borderColor: state.menuIsOpen ? '#aae1e9' : '#aae1e9',
                                             borderRadius:"6px",
                                             "&:hover": {borderColor:"#aae1e9"},
                                                        
                                            }
                                },
                                                
                        }}
                    />   
         </label>
    </>
  )
}
