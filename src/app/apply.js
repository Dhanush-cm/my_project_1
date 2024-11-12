import { useState } from 'react';

export default function Apply() {
  const [selectedRole, setSelectedRole] = useState('');
  const [experience, setExperience] = useState('');
  const [applicationReason, setApplicationReason] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [file, setFile] = useState(null);

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
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <span style={styles.logo}>Logo</span>
        <span style={styles.text}>SentinelGuardAI</span>
        <nav style={styles.nav}>
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
          <a href="#" style={styles.activeLink}>Apply</a>
        </nav>
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
            rows="3"
            style={styles.textarea}
          />
          <textarea
            value={applicationReason}
            onChange={(e) => setApplicationReason(e.target.value)}
            placeholder="Why are you applying to this particular role?"
            maxLength="120"
            rows="3"
            style={styles.textarea}
          />
          <textarea
            value={additionalInfo}
            onChange={(e) => setAdditionalInfo(e.target.value)}
            placeholder="Is there anything else you would like us to know?"
            maxLength="60"
            rows="2"
            style={styles.smallTextarea}
          />
          <button type="submit" style={styles.submitButton}>Submit</button>
        </form>
      </main>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    textAlign: 'center',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 40px',
    fontSize: '18px',
    borderBottom: '1px solid #ddd',
  },
  logo: {
    fontWeight: 'bold',
  },
  nav: {
    display: 'flex',
    gap: '20px',
  },
  activeLink: {
    color: '#0070f3',
    fontWeight: 'bold',
  },
  main: {
    padding: '20px 40px',
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
  },
  radioColumn: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  radioLabel: {
    fontSize: '16px',
    marginBottom: '8px',
  },
  radioButton: {
    marginRight: '10px',
  },
  fileInput: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  fileUpload: {
    marginTop: '10px',
  },
  textarea: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    resize: 'none',
  },
  smallTextarea: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    resize: 'none',
    maxWidth: '50%',
  },
  submitButton: {
    backgroundColor: '#0070f3',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
  },
};
