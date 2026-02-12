import Image from "next/image";

export default function Home() {
  return (
    <main style={{
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(45deg, purple, yellow, green)",
      textAlign: "center"
    }}>
      <div style={{
        background: "black",
        padding: "40px",
        borderRadius: "20px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
        textAlign: "center",
        width: "400px"
      }}>
      <h1> Feliz Carnaval, meu Professor! </h1>
      <p>Que a alegria contagie todo mundo da sua familia e que curta esse periodo de folia</p>
      </div>
    </main>
  );
}
