const signupBtn = document.querySelector("label.signup");
const loginBtn = document.querySelector("label.login");
const signupForm = document.querySelector("form.signup");
const loginForm = document.querySelector("form.login");
const errorMessage = document.getElementById("error-message");

signupBtn.onclick = () => {
  loginForm.style.display = "none";  // Login formunu gizle
  signupForm.style.display = "block";  // Signup formunu göster
};

loginBtn.onclick = () => {
  signupForm.style.display = "none";  // Signup formunu gizle
  loginForm.style.display = "block";  // Login formunu göster
};

// Signup formu kontrol et
signupForm.addEventListener("submit", (e) => {
  e.preventDefault();  // Formun otomatik gönderilmesini engelle

  const password = signupForm.querySelector("input[placeholder='Password']").value;
  const confirmPassword = signupForm.querySelector("input[placeholder='Confirm Password']").value;
  const username = signupForm.querySelector("input[name='email']").value;  // Kullanıcı adı (örneğin "sahin")

  if (password !== confirmPassword) {
    errorMessage.style.display = "block";
    errorMessage.textContent = "Passwords do not match. Please try again.";
  } else {
    errorMessage.style.display = "none";  // Form geçerli, signup tamamlanıyor

    // E-posta adresini oluştur
    const email = username + "@gmail.com";  // Kullanıcı adını ve @gmail.com'ı birleştiriyoruz

    // Şifreyi ve email'i localStorage'a kaydediyoruz
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);

    alert("Signup Successful!");  // Bilgilendirme
    window.location.href = "menu.html";  // Yönlendirme işlemi yapılır
  }
});

// Login formu kontrol et
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();  // Formun otomatik gönderilmesini engelle

  const email = loginForm.querySelector("input[placeholder='Email Address']").value;
  const password = loginForm.querySelector("input[placeholder='Password']").value;

  // localStorage'dan verileri alıyoruz
  const storedEmail = localStorage.getItem("userEmail");
  const storedPassword = localStorage.getItem("userPassword");

  // Giriş için email'deki @gmail.com'ı kontrol ediyoruz
  if (email === storedEmail && password === storedPassword) {
    alert("Login Successful!");  // Başarılı giriş
    window.location.href = "menu.html";  // Menü sayfasına yönlendirme
  } else {
    alert("Invalid credentials. Please try again.");  // Hatalı giriş
  }
});