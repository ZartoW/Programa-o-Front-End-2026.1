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
      color: "white",
      textAlign: "center"
    }}>
      <h1> Feliz Carnaval, minha Professor! </h1>
      <p>Que a alegria contagie todo mundo da sua familia e que curta esse periodo de folia</p>
    </main>
  );
}
