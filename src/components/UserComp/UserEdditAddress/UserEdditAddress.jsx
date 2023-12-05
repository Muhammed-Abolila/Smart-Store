import { ToastContainer } from "react-toastify";
import UserEdditAddressHook from "../../../CustomHooks/User/UserEdditAddressHook";
import FormSpinner from "../../Utilities/FormSpinner/FormSpinner";
const UserEdditAddress = () => {
  let [alias,onAliasChange,addressDetails,onAddressDetailsChange,phone,onPhoneChange,handleClick,display]=UserEdditAddressHook()
  return (
    <div className='user-eddit-address'>
      <h3 className="mb-4">Edit Address</h3>
      <input 
        value={alias}
        onChange={onAliasChange}
        type="text" 
        className='form-control input-style' 
        placeholder='Enter Address (Home)' 
        />
      <input
        value={addressDetails}
        onChange={onAddressDetailsChange} 
        type="text" 
        className='form-control input-style mt-2' 
        placeholder='Address' 
        />
      <input
        value={phone}
        onChange={onPhoneChange} 
        type="tel" 
        className='form-control input-style mt-2 mb-3' 
        placeholder='Phone' 
        />
      <button className='btn btn-style' onClick={handleClick}>Save</button>
      <ToastContainer/>
      <FormSpinner displayStyle={display}/>
    </div>
  )
};

export default UserEdditAddress
