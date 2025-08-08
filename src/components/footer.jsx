const Footer = () => {
  return (
    <footer
      style={{
        textAlign: "center",
        padding: "20px",
        background: "#222",
        color: "#fff",
      }}
    >
      <p>
        © {new Date().getFullYear()} Denivaldo - Todos os direitos reservados.
      </p>
    </footer>
  );
};

export default Footer;
