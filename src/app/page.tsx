'use client'
import { useState } from 'react';

export default function Apply() {
  const [selectedRole, setSelectedRole] = useState('');
  const [experience, setExperience] = useState('');
  const [applicationReason, setApplicationReason] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [file, setFile] = useState(null);

  
  const [] = useState<SetStateAction<string>>('');


  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('role', selectedRole);
    formData.append('experience', experience);
    formData.append('applicationReason', applicationReason);
    formData.append('additionalInfo', additionalInfo);
    formData.append('file', file);

    // Send formData to the server
    console.log('Form submitted');
    // Add form submission handling here
  }

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <span style={styles.logo}>Logo</span>
        <span style={styles.text}>SentinelGuardAI</span>
        <span style={styles.nav}>
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
          <a href="#" style={styles.activeLink}>Apply</a>
        </span>
      </header>
      <main style={styles.main}>
        <h1 style={styles.title}>Tech Hiring</h1>
        <form onSubmit={handleSubmit} encType="multipart/form-data" style={styles.form}>
          <div style={styles.radioGroup}>
            <div style={styles.radioColumn}>
              {["Design", "Frontend Development", "Backend Development", "Cybersecurity Engineering"].map((role) => (
                <label key={role} style={styles.radioLabel}>
                  <input
                    type="radio"
                    value={role}
                    checked={selectedRole === role}
                    onChange={(e) => setSelectedRole(e.target.value)}
                    style={styles.radioButton}
                  /> {role}
                </label>
              ))}
            </div>
            <div style={styles.radioColumn}>
              {["Machine Learning and AI", "Data Science and Analytics", "NLP and LLM Specialization", "Ethical Hacking and Penetration Testing"].map((role) => (
                <label key={role} style={styles.radioLabel}>
                  <input
                    type="radio"
                    value={role}
                    checked={selectedRole === role}
                    onChange={(e) => setSelectedRole(e.target.value)}
                    style={styles.radioButton}
                  /> {role}
                </label>
              ))}
            </div>
          </div>
          <div style={styles.fileInput}>
            <label style={styles.label}>Resume/CV/Portfolio</label>
            <input type="file" onChange={handleFileChange} style={styles.fileUpload} />
          </div>
          <textarea
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            placeholder="Your Experience (if any)"
            maxLength="120"
            rows="2"
            style={styles.textarea1}
          />
          <textarea
            value={applicationReason}
            onChange={(e) => setApplicationReason(e.target.value)}
            padding-left="200%"
            
            placeholder="Why are you applying to this particular role?"
            maxLength="120"
            rows="2"
            style={styles.textarea2}
          />
          <textarea
            value={additionalInfo}
            onChange={(e) => setAdditionalInfo(e.target.value)}
            placeholder="Is there anything else you would like us to know?"
            maxLength="60"
            rows="2"
            style={styles.textarea3}
          />
          
          <button type="submit" style={styles.submitButton}>Submit</button>
        </form>
      </main>
    </div>
  );
}

const styles = {
  header: {
    display:'flex',
    
    
    fontSize: '18px',
  },
  container: {
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    textAlign: 'center',
  },

  logo: {
    padding: '29px 30px',
    fontSize: '70%',
  },
  text: {
    fontSize: '70%',
    padding: '29px 30px',
  

  },
  nav: {
    fontSize: '70%',
    display: 'flex',
    gap: '20px',
    padding: '29px 29%',
  },
  activeLink: {
    color: '#',
    fontWeight: 'bold',
  },
  main: {
    padding: '20px 115px',
    maxWidth: '800px',
    margin: '0 auto',
    
  },
  title: {
    fontSize: '32px',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '15px',
  },
  radioGroup: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: '20px',
    fontSize: '70%',
  },
  radioColumn: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    fontSize: '80%',
  },
  radioLabel: {
    fontSize: '12px',
    marginBottom: '8px',
    marginLeft: '10px',
  },
  radioButton: {
    marginRight: '1px',
    marginTop: 'px',
  },
  fileInput: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  fileUpload: {
    marginTop: '10px',
  },
  textarea1: {
    width: '100%',
    padding: '10px',
    fontSize: '70%',
    border: '1px solid #ddd',
    borderRadius: '15px',
    resize: 'none',
  },
  textarea2: {
    width: '100%',
    padding: '10px',
    fontSize: '70%',
    border: '1px solid #ddd',
    borderRadius: '15px',
    resize: 'none',
    marginRight: '105%',
    
  },
  textarea3: {
    width: '100%',
    padding: '10px',
    fontSize: '70%',
    border: '1px solid #ddd',
    borderRadius: '15px',
    resize: 'none',
    marginLeft: '105%',
    margin: '-70px 50px 75px 650px',
  },
  
  submitButton: {
    backgroundColor: '#0070f3',
    color: '#fff',
    padding: '5px 250px',
    border: 'none',
    borderRadius: '15px',
    fontSize: '16px',
    cursor: 'pointer',
    marginTop: '-70px'
  },
};
