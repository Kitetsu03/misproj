import React, { useState } from 'react';

const MyProfile = () => {

const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    emailAddress: '',
    phoneNumber: '',
    birthDate: '',
    streetAddress: '',
    city: '',
    state: '',
    zipCode: '',
    contactName: '',
    emergencyPhone: '',
    relationship: '',
    familyMembers: [
    {
        name: 'Michael Miller',
        relationship: '',
        birthdate: '',
        phone: ''
    }
    ]
});

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
    ...prev,
    [name]: value
    }));
};


const handleFamilyChange = (index, field, value) => {
    const updatedMembers = [...formData.familyMembers];
    updatedMembers[index][field] = value;
    setFormData(prev => ({
    ...prev,
    familyMembers: updatedMembers
    }));
};


const addFamilyMember = () => {
    setFormData(prev => ({
    ...prev,
    familyMembers: [...prev.familyMembers, { name: '', relationship: '', birthdate: '', phone: '' }]
    }));
};

const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
};

return (
    <div className="page">
    <header className="header">
        <div className="my-logo"></div>
        <div className="portal-title">MEMBERS PORTAL</div>
        <hr className="separator" />
    </header>

    <main className="main-content">
        <form onSubmit={handleSubmit}>
        <section className="profile-header">
            <h1>MY PROFILE</h1>
            <p>Update your information and family details.</p>
        </section>

        <section className="card profile-picture-card">
            <div className="section-label">
                <i className="bx bx-user"></i>
                <strong>Profile Picture</strong>
            </div>
                <div className="profile-picture-container">
                <div className="profile-picture-placeholder" aria-label="Profile Picture"></div>
                <div className="profile-picture-info">
                    <button className="btn btn-change-photo" type="button" aria-label="Change Photo">
                        <i className="bx bx-camera"></i> Change Photo
                    </button>
                <div className="photo-instruction">JPG or PNG, max 5MB</div>
            </div>
                </div>
        </section>

        <section className="card">
            <div className="section-label">
                <strong>Personal Information</strong>
            </div>
                <div className="input-row">
                    <label htmlFor="firstName">First Name</label>
                    <label htmlFor="lastName">Last Name</label>
                </div>

                <div className="input-row">
                <input  type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange} />

                <input  type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}/>
                </div>

            <label htmlFor="emailAddress" className="full-label">Email Address</label>
                <input  type="email"
                        id="emailAddress"
                        name="emailAddress"
                        value={formData.emailAddress}
                        onChange={handleChange}/>

            <label htmlFor="phoneNumber" className="full-label">Phone Number</label>
            <input  type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}/>

            <label htmlFor="birthDate" className="full-label">Birth Date</label>
            <input  type="date"
                    id="birthDate"
                    name="birthDate"
                    value={formData.birthDate}
                    onChange={handleChange}/>
        </section>

        <section className="card">
            <div className="section-label"><strong>Address Information</strong></div>
                <label htmlFor="streetAddress" className="full-label">Street Address</label>

            <input  type="text"
                    id="streetAddress"
                    name="streetAddress"
                    value={formData.streetAddress}
                    onChange={handleChange}/>

            <div className="input-row">
                <label htmlFor="city">City</label>
                <label htmlFor="state">State</label>
            </div>

                <div className="input-row">
                <input type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}/>

                <input  type="text"
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}/>
                </div>

            <label htmlFor="zipCode" className="full-label">Zip Code</label>
                <input  type="text"
                        id="zipCode"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleChange}/>
        </section>

        <section className="card">
            <div className="section-label"><strong>Emergency Contact</strong></div>
            
            <label htmlFor="contactName" className="full-label">Contact Name</label>
                <input  type="text"
                        id="contactName"
                        name="contactName"
                        value={formData.contactName}
                        onChange={handleChange}/>

            <label htmlFor="emergencyPhone" className="full-label">Phone Number</label>
                <input  type="tel"
                        id="emergencyPhone"
                        name="emergencyPhone"
                        value={formData.emergencyPhone}
                        onChange={handleChange}/>

            <label htmlFor="relationship" className="full-label">Relationship</label>
                <input  type="text"
                        id="relationship"
                        name="relationship"
                        value={formData.relationship}
                        onChange={handleChange}/>
        </section>

        <section className="card family-members-card">
            <div className="section-label">
                <strong>Family Members</strong>
            <button className="btn btn-add-member" type="button" aria-label="Add Member" onClick={addFamilyMember}>
                + Add Member
            </button>
            </div>
            {formData.familyMembers.map((member, index) => (
            <div key={index} className="family-member">
                <h3>{member.name || `Family Member ${index + 1}`}</h3>
                <div className="input-row">
                <label htmlFor={`fmRelationship-${index}`}>Relationship</label>
                <label htmlFor={`fmBirthdate-${index}`}>Birthdate</label>
                </div>
                <div className="input-row">
                <input
                    type="text"
                    id={`fmRelationship-${index}`}
                    name={`fmRelationship-${index}`}
                    value={member.relationship}
                    onChange={(e) => handleFamilyChange(index, 'relationship', e.target.value)}
                />
                <input
                    type="date"
                    id={`fmBirthdate-${index}`}
                    name={`fmBirthdate-${index}`}
                    value={member.birthdate}
                    onChange={(e) => handleFamilyChange(index, 'birthdate', e.target.value)}
                />
                </div>
                <label htmlFor={`fmPhone-${index}`} className="full-label">Phone Number</label>
                <input
                type="tel"
                id={`fmPhone-${index}`}
                name={`fmPhone-${index}`}
                value={member.phone}
                onChange={(e) => handleFamilyChange(index, 'phone', e.target.value)}
                />
            </div>
            ))}
        </section>

        <button className="btn btn-save" type="submit">Save Changes</button>
        </form>
    </main>

    <nav className="bottom-nav" role="navigation" aria-label="Main navigation">
        <a target="_self" href="./memberportal01.html" className="nav-item nav-selected" aria-current="page">
        <i className="bx bx-home"></i>
        <span>Home</span>
        </a>

        <a className="nav-item">
        <i className="bx bx-user"></i>
        <span>Profile</span>
        </a>

        <a target="_self" href="./membersportal03.html" className="nav-item">
        <i className="bx bxs-wallet"></i>
        <span>Giving</span>
        </a>
    </nav>
    </div>
);
};

export default MyProfile;
