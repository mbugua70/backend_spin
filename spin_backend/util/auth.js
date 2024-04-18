const user = localStorage.getItem("user");
const signOut = document.getElementById("sign-out-btn");

if (!user) {
  //   appNotifier("Please login");

  setTimeout(() => {
    window.location.href =
      "/backend_spin/spin_backend/authentication/layouts/overlay/sign-in.html";
  }, 6000);
}

signOut.addEventListener(
  "click",
  () => {
    localStorage.removeItem("user");
    workingNotifier("Signed Out successfully");

    console.log("Signed Out successfully");
  },
  false
);

const workingNotifier = (message) => {
  swal({
    buttonsStyling: !1,
    button: "Ok, got it!",
    customClass: { confirmButton: "btn btn-primary" },
    title: message,
    text: "",
    icon: "success",
  });
};

//   swal libraly
function appNotifier(message) {
  swal({
    buttonsStyling: !1,
    button: "Ok, got it!",
    customClass: { confirmButton: "btn btn-primary" },
    title: message,
    text: "",
    icon: "warning",
  });
}
