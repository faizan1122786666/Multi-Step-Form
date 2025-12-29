import Header from "./components/Header";
import Footer from "./components/Footer";
import Basic_Information from "./components/Basic_Information";
import Contact_Information from "./components/Contact_Information"
import Personal_Information from "./components/Personal_Information"
import Review from "./components/Review";
import { useState } from 'react';

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    age: '',
    gender: '',
    email: '',
    phone: '',
    address: '',
    occupation: '',
    education: '',
    hobbies: ''
  });

  const renderStep = () => {
    switch(currentStep) {
      case 1: return <Basic_Information formData={formData} updateFormData={updateFormData} 
      errors={errors} handleNext={handleNext} />
      case 2: return <Contact_Information formData={formData} updateFormData={updateFormData} 
      errors={errors} handleNext={handleNext} handleBack={handleBack} /> 
      case 3: return <Personal_Information formData={formData} updateFormData={updateFormData} 
      errors={errors} handleNext={handleNext} handleBack={handleBack} />
      case 4: return <Review formData={formData} handleBack={handleBack} handleSubmit={handleSubmit} />
      default: return null; // Good practice to add default
    }
  }

  const updateFormData = (field, value) => {
    setFormData(prev => ({...prev, [field]: value}));
    if(errors[field]) {
      setErrors(prev => ({...prev, [field]: ''}));
    }
  }

  const Validstep1 = () => {
    const newErrors = {};
    if(!formData.firstname.trim()) newErrors.firstname = "First name is required";
    if(!formData.lastname.trim()) newErrors.lastname = "Last name is required";
    if(!formData.age) newErrors.age = "Age is required";
    else if(formData.age < 1 || formData.age > 120) newErrors.age = "Enter valid age";
    if(!formData.gender) newErrors.gender = "Please select gender";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  const Validstep2 = () => {
    const newErrors = {};
    if(!formData.email.trim()) newErrors.email = "Email is required";
    else if (!formData.email.includes('@') || !formData.email.includes('.')) newErrors.email = 'Email is invalid';
    if(!formData.phone.trim()) newErrors.phone = "Phone is required";
    else if (formData.phone.replace(/[^0-9]/g, '').length < 10) {
      newErrors.phone = 'Phone must have at least 10 digits';
    }
    if(!formData.address.trim()) newErrors.address = "Address is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  const Validstep3 = () => {
    const newErrors = {};
    if(!formData.occupation.trim()) newErrors.occupation = "Occupation is required";
    if(!formData.education.trim()) newErrors.education = "Education is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  const handleNext = () => {
    let isValid = false;
    if(currentStep === 1) isValid = Validstep1();
    else if(currentStep === 2) isValid = Validstep2();
    else if(currentStep === 3) isValid = Validstep3();
    else isValid = true; 

    if(isValid) setCurrentStep(prev => prev + 1);
  }

  const handleBack = () => {
    setCurrentStep(prev => prev - 1);
  }

  const handleSubmit = () => {
    alert("Form Submitted Successfully.");
    setCurrentStep(1);
    setFormData ( {
    firstname: '',lastname: '',age: '',
    gender: '',email: '',phone: '',address: '',occupation: '',education: '',hobbies: ''
    });
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />    
        {renderStep()}
      <Footer />
    </div>
  );
}

export default App;