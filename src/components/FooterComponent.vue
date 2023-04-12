<template>
  <footer>
    <p>&copy; 2023 Dieta od brokuła</p>
    <ul>
      <li><a href="#">Polityka prywatności</a></li>
      <li><a href="#">Regulamin</a></li>
      <li><a href="#">Kontakt</a></li>
    </ul>
    <div>
      <a href="#"><i class="fab fa-facebook-f"></i></a>
      <a href="#"><i class="fab fa-twitter"></i></a>
      <a href="#"><i class="fab fa-instagram"></i></a>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>

<style scoped>
footer {
  background-color: #333333;
  color: white;
  padding: 10px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}

footer p {
  margin: 0;
}

footer ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

footer li {
  display: inline-block;
  margin-right: 10px;
}

footer a {
  color: white;
}

footer a:hover {
  color: green;
}

@media (max-width: 600px) {
  footer ul {
    display: block;
    text-align: center;
  }

  footer li {
    display: block;
    margin-bottom: 5px;
  }
}
</style>
