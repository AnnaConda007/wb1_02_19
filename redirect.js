const url = new URL(window.location.href);
const code = url.searchParams.get("code");

if (code) {
  fetch("http://localhost:3000/get-token?code=" + code)
    .then((response) => response.json())
    .then((data) => {
      const accessToken = data.accessToken;
      if (accessToken) {
        localStorage.setItem("vkAccessToken", accessToken);
        window.location.href = "https://annaconda007.github.io/wb1_02_19/";
      } else {
        console.error("Failed to get access token");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
