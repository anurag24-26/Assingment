import React from "react";

const About = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>About This Application</h1>
      <p style={styles.paragraph}>
        Welcome to our app! This platform is designed to help you manage tasks
        efficiently and prioritize them based on their importance.
      </p>
      <h2 style={styles.subHeading}>How It Works</h2>
      <ul style={styles.list}>
        <li>
          <span style={styles.highlight}>Task Creation:</span> You can add a
          task by entering its details and selecting a priority level (High,
          Medium, or Low).
        </li>
        <li>
          <span style={styles.highlight}>Task Priority:</span> Each task is
          visually categorized based on its priority, helping you focus on what
          matters most.
        </li>
        <li>
          <span style={styles.highlight}>Interactive Features:</span> Tasks can
          be deleted or rearranged easily, ensuring flexibility and control.
        </li>
      </ul>
      <h2 style={styles.subHeading}>Technologies Used</h2>
      <p style={styles.paragraph}>
        This application is built with modern web development technologies
        including:
      </p>
      <ul style={styles.list}>
        <li>React for building interactive UIs.</li>
        <li>CSS for responsive and elegant design.</li>
        <li>JavaScript for dynamic functionality.</li>
        <li>
          Backend technologies to store and retrieve task data (if applicable).
        </li>
      </ul>
      <p style={styles.paragraph}>
        We hope this app empowers you to organize your tasks efficiently and
        stay productive!
      </p>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "600px",
    margin: "40px auto",
    padding: "20px",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    color: "#f5f5f5",
    textAlign: "left",
    borderRadius: "12px",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.4)",
  },
  heading: {
    fontSize: "28px",
    marginBottom: "20px",
    color: "#ffcc00",
    textAlign: "center",
    textShadow: "1px 1px 4px rgba(0, 0, 0, 0.6)",
  },
  subHeading: {
    fontSize: "22px",
    margin: "20px 0 10px",
    color: "#4caf50",
  },
  paragraph: {
    fontSize: "16px",
    lineHeight: "1.6",
    marginBottom: "15px",
  },
  list: {
    listStyleType: "disc",
    paddingLeft: "20px",
    marginBottom: "15px",
  },
  highlight: {
    color: "#ffcc00",
    fontWeight: "bold",
  },
};

export default About;
