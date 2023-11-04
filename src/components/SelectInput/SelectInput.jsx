import React from 'react';
import SelectInputStyle from './SelectInputStyle';

const SelectInput = ({label, placeholder, img, type}) => {
  const universities = [
    "Select campus",
    "Abia State University, Uturu",
"Ahmadu Bello University, Zaria",
"Afe Babalola University, Ado Ekiti",
"Ambrose Alli University, Ekpoma",
"Anambra State University, Uli",
"Babcock University, Ilishan-Remo",
"Bayero University Kano",
"Baze University, Abuja",
"Benue State University, Makurdi",
"Bowen University, Iwo",
"Covenant University, Ota",
"Delta State University, Abraka",
"Ebonyi State University, Abakaliki",
"Ekiti State University, Ado Ekiti",
"Federal University, Lafia",
"Federal University, Lokoja",
"Federal University, Ndufu-Alike",
"Federal University, Otuoke",
"Federal University, Oye-Ekiti",
"Federal University, Wukari",
"Fountain University, Osogbo",
"Gombe State University, Gombe",
"Ibrahim Badamasi Babangida University, Lapai",
"Igbinedion University, Okada",
"Imo State University, Owerri",
"Joseph Ayo Babalola University, Ikeji-Arakeji",
"Kaduna State University, Kaduna",
"Kano University of Science and Technology, Wudil",
"Kogi State University, Anyigba",
"Kwara State University, Ilorin",
"Lagos State University, Ojo",
"Landmark University, Omu-Aran",
"Ladoke Akintola University of Technology, Ogbomoso",
"Michael Okpara University of Agriculture, Umudike",
"Modibbo Adama University of Technology, Yola",
"Nasarawa State University, Keffi",
"Niger Delta University, Wilberforce Island",
"Nile University of Nigeria, Abuja",
"Nnamdi Azikiwe University, Awka",
"Obafemi Awolowo University, Ile-Ife",
"Oduduwa University, Ile-Ife",
"Ondo State University of Science and Technology, Okitipupa",
"Osun State University, Osogbo",
"Pan-Atlantic University, Lagos",
"Redeemer's University, Mowe",
"Rivers State University, Port Harcourt",
"Salem University, Lokoja",
"Tai Solarin University of Education, Ijebu-Ode",
"Tansian University, Umunya",
"Taraba State University, Jalingo",
"Umaru Musa Yar'adua University, Katsina",
"University of Abuja, Gwagwalada",
"University of Agriculture, Abeokuta",
"University of Agriculture, Makurdi",
"University of Benin",
"University of Calabar",
"University of Ibadan",
"University of Ilorin",
"University of Jos",
"University of Lagos",
"University of Maiduguri",
"University of Nigeria, Nsukka",
"University of Port Harcourt",
"University of Uyo"

  ]
  return (
    < SelectInputStyle>
        <label htmlFor="name">Campus</label>
        <div className='input'>
            <select name="Campus" id="Campus">
              {
                universities.map((item, index)=>{
                  return <option value={item} key={index}>{item}</option>
                })
              }
            </select>
        </div>
    </SelectInputStyle>
  )
}

export default SelectInput